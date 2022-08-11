const housesMutations = {
  //Mutation function when fetch all data
  handleGetAllHouses(state, payload) {
    state.houses = payload;
  },

  handleCreateHouse(state, payload) {
    state.houses.push(payload);
  },

  handleEditHouse(state, payload) {
    const idHouse = payload._id;
    const edit = state.houses.map((item) => {
      if (item._id === idHouse) {
        return payload;
      }
      return item;
    });
    state.houses = edit;
  },

  handleDeleteHouse(state, payload) {
    const id = payload;
    //Filter houses and return those houses which were not deleted
    const restHouses = state.houses.filter((item) => item._id !== id);
    state.houses = restHouses;
  },

  handleChangeUrlToFile(state, payload) {
    //Assign new File
    state.file = payload;
  },

  //Get id house when create house, used to redirect to his details page
  handleGetIdHouse(state, payload) {
    state.idHouse = payload;
  },

  //Sort houses
  handleSortHouses(state, payload) {
    state.houses = state.houses.sort((a, b) => {
      //payload.nameProperty - name property to sort
      if (a[payload.nameProperty] < b[payload.nameProperty])
        //payload.state true sort ascending if false descending
        return !payload.state ? 1 : -1;
      if (a[payload.nameProperty] > b[payload.nameProperty])
        //payload.state true sort ascending if false descending
        return !payload.state ? -1 : 1;
      return 0;
    });
  },

  handleSearchHouses(state, payload) {
    //Search house base on street, city, zip, price, size
    const search = state.houses.filter(
      (item) =>
        item.street.toLowerCase().startsWith(payload.toLowerCase()) ||
        item.city.toLowerCase().startsWith(payload.toLowerCase()) ||
        item.zip.toLowerCase().startsWith(payload.toLowerCase()) ||
        item.price.toString().startsWith(payload.toLowerCase()) ||
        item.size.toString().startsWith(payload.toLowerCase())
    );
    state.search = search;
  },

  //Input value search
  handleSearchValue(state, payload) {
    state.searchValue = payload;
  },
};

export default housesMutations;
