const housesGetters = {
  getAllHouses(state) {
    return state.houses;
  },
  getSearchHouses(state) {
    return state.search;
  },
  getNewFile(state) {
    return state.file;
  },
  getIdHouse(state) {
    return state.idHouse;
  },
  getSearchValue(state) {
    return state.searchValue;
  },
};

export default housesGetters;
