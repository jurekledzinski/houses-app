import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';

import CreateHouse from './components/CreateHouse.vue';
import DetailsHouse from './components/DetailsHouse.vue';
import EditHouse from './components/EditHouse.vue';
import ListHouses from './components/ListHouses.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '',
          component: ListHouses,
        },
        {
          path: 'create/house',
          component: CreateHouse,
        },
        {
          name: 'editHouse',
          path: 'edit/house/:id',
          component: EditHouse,
        },
        {
          name: 'detailsHouse',
          path: 'details/house/:id',
          component: DetailsHouse,
        },
      ],
    },
    { path: '/about', component: AboutPage },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});
export default router;
