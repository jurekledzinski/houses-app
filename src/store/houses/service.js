export const getFetchHeaders = () => {
  const myHeaders = new Headers();
  myHeaders.append('X-Api-Key', process.env.VUE_APP_API_KEY);
  return myHeaders;
};

export const getRequestOptions = (method, headers, body) => {
  const requestOptions = {
    method,
    headers,
    redirect: 'follow',
    body: body,
  };
  return requestOptions;
};

export const getFormData = (type, value) => {
  let formDataCreate = new FormData();
  let formDataUpload = new FormData();
  let formDataUpdate = new FormData();

  if (type === 'create') {
    formDataCreate.append('price', parseFloat(value.house.price));
    formDataCreate.append('bedrooms', value.house.bedrooms);
    formDataCreate.append('bathrooms', value.house.bathrooms);
    formDataCreate.append('size', parseFloat(value.house.size));
    formDataCreate.append('street', value.house.street);
    formDataCreate.append('houseNumber', value.house.number);
    formDataCreate.append('numberAddition', value.house.addition);
    formDataCreate.append('zip', value.house.zip);
    formDataCreate.append('city', value.house.city);
    formDataCreate.append('constructionYear', value.house.construction);
    formDataCreate.append('hasGarage', value.house.garage);
    formDataCreate.append('description', value.house.description);
    formDataCreate.append('madeByMe', true);
    return formDataCreate;
  }

  if (type === 'upload') {
    formDataUpload.append(
      'image',
      value.file,
      value.file.name,
      value.house.imageId
    );
    return formDataUpload;
  }

  if (type === 'update') {
    const index = value.name?.match(/_/).index;
    formDataUpdate.append('alt', value.name.slice(0, index));
    formDataUpdate.append('imageId', value.imageId);
    formDataUpdate.append('image', value.url);
    return formDataUpdate;
  }
};

export const fetchData = async (url, options, type) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    const msg = 'Something went wrong, please try later';
    throw new Error(response.statusText || msg);
  }

  const responseType = {
    blob: async () => await response.blob(),
    json: async () => await response.json(),
    text: async () => await response.text(),
  };

  const data = await responseType[type]();

  return data;
};
