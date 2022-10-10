import RouteName from './RouteName';

const routes = [
  {
    path: '/',
    name: RouteName.USER_LIST,
    component: () => import('@/views/UserList/UserList.vue'),
    meta: {
      isSearchDisplayed: true
    }
  },
  {
    path: '/:username',
    name: RouteName.USER_PAGE,
    component: () => import('@/views/UserPage/UserPage.vue'),
    meta: {
      isSearchDisplayed: false
    }
  },
  {
    path: '*',
    name: RouteName.NOT_FOUND,
    redirect: {
      name: RouteName.USER_LIST
    }
  }
];

export default routes;
