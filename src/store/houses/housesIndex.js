import housesGetters from './housesGetters.js';
import housesActions from './housesActions.js';
import housesMutations from './housesMutations.js';

const housesModule = {
  namespaced: true,
  state() {
    return {
      file: [], //here store new file created from url image when use edit form
      idHouse: '', //here store id house added when create house and necessary to redirect to details of this house
      houses: [], //here store all fetched houses
      search: [], //here store searched houses
      searchValue: '', //input search value
    };
  },
  getters: housesGetters,
  actions: housesActions,
  mutations: housesMutations,
};

export default housesModule;
