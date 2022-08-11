import {
  fetchData,
  getFetchHeaders,
  getFormData,
  getRequestOptions,
} from './service.js';

const housesActions = {
  async handleFetchAllHouses(context) {
    const myHeaders = getFetchHeaders();
    const requestOptions = getRequestOptions('GET', myHeaders);
    const url = '/.netlify/functions/house';
    // Call fetch api
    const data = await fetchData(url, requestOptions, 'json');
    //call function handleGetAllHouses in mutation and pass data as payload
    context.commit('handleGetAllHouses', data.value);
  },

  async handleCreateEditHouse(context, payload) {
    const { value } = payload;
    const editID = Boolean(value?.id);
    //If value.id is pass in payload then edit functionality will work if not create functionality will work
    const myHeaders = getFetchHeaders();
    //Add data from form
    const formdataCreate = getFormData('create', value);
    //Request options

    const methodHttp = editID ? 'PUT' : 'POST';

    const reqOptions1 = getRequestOptions(
      methodHttp,
      myHeaders,
      formdataCreate
    );

    const urlCreate = '/.netlify/functions/house';
    const urlEdit = `/.netlify/functions/house?id=${value?.id}`;

    //If value.id is undefined so in isNaN(value.id) this is true then use create url if not use url edit
    const url1 = editID ? urlEdit : urlCreate;
    // const type = isNaN(value?.id) ? 'json' : 'json';
    //Call fetch api
    const data = await fetchData(url1, reqOptions1, 'json');
    // Add data image from form

    const formdataUpload = getFormData('upload', value);
    //Request options
    const reqOptions2 = getRequestOptions('PATCH', myHeaders, formdataUpload);

    //If value.id is undefined so in isNaN(value.id) this is true, then id house when create form, if false id house from edit form
    const idHouse = editID ? value?.id : data.value._id;
    const url2 = `/.netlify/functions/image?id=${idHouse}`;

    //Call fetch api
    const data1 = await fetchData(url2, reqOptions2, 'json');

    //Dodanie url image, alt name, imageId zdjecia do bazy

    const formDataUpdate = getFormData('update', data1.value);

    //Request options update house
    const reqOptions3 = getRequestOptions('PATCH', myHeaders, formDataUpdate);

    const urlUpdate = `/.netlify/functions/house?id=${idHouse}`;

    const data2 = await fetchData(urlUpdate, reqOptions3, 'json');

    if (!editID) {
      context.commit('handleCreateHouse', data2.value);
      //Commit handleGetIdHouse mutation with payload id house
      context.commit('handleGetIdHouse', data2.value._id);
      return;
    }

    // //Commit handleEditHouse mutation with payload edited house
    context.commit('handleEditHouse', data2.value);
  },

  //Delete house action
  async handleDeleteHouse(context, payload) {
    const { value } = payload;

    const myHeaders = getFetchHeaders();
    const requestOptions = getRequestOptions('DELETE', myHeaders);
    const url = `/.netlify/functions/house?id=${value}`;
    await fetchData(url, requestOptions, 'text');

    //commit handleDeleteHouse mutation with payload id House as value
    context.commit('handleDeleteHouse', value);
  },

  //Change file from url action
  async handleChangeUrlToFile(context, payload) {
    const { value } = payload;
    // value as image url

    const myHeaders = getFetchHeaders();
    const requestOptions = getRequestOptions('GET', myHeaders);
    const data = await fetchData(value, requestOptions, 'blob');

    //Data here is blob below change blob to new file
    let newFile = new File([data], 'image', {
      type: data.type,
    });

    //Commit handleChangeUrlToFile mutation pass as payload newFile
    context.commit('handleChangeUrlToFile', newFile);
  },

  //Sort houses action
  handleSortHouses(context, payload) {
    const { value } = payload;
    //commit handleSortHouses mutation and in value name property to sort and active state
    context.commit('handleSortHouses', value);
  },
  //Search houses action
  handleSearchHouses(context, payload) {
    const { value } = payload;
    context.commit('handleSearchHouses', value);
  },
  //Input value search action
  handleSearchValue(context, payload) {
    const { value } = payload;
    context.commit('handleSearchValue', value);
  },
};

export default housesActions;
