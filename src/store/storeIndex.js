import { createStore } from 'vuex';
import housesModule from './houses/housesIndex.js';

const store = createStore({
  modules: {
    houses: housesModule,
  },
});

export default store;
