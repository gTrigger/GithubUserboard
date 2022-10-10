import { createStore } from 'vuex';
import userPageModule from '@/store/modules/userPageModule';
import userListModule from '@/store/modules/userListModule';

const store = createStore({
  modules: {
    userPageModule,
    userListModule
  }
});

export default store;
