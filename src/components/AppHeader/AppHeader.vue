<template>
  <div class="github-users__header">
    <router-link
      :to="{ name: RouteName.USER_LIST }"
      class="github-users__header-logo-wrapper"
    >
      <img
        src="@/assets/logo.svg"
        alt="logo"
        class="github-users__header-logo"
      />
      <span class="github-users__header-title">
        Github Userboard
      </span>
    </router-link>
    <div
      v-if="isSearchDisplayed"
      class="github-users__header-search-wrapper"
    >
      <input
        v-model="searchString"
        @input="getUserList"
        class="github-users__header-search"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import RouteName from '@/router/RouteName';

export default {
  name: 'AppHeader',
  data() {
    return {
      RouteName
    };
  },
  computed: {
    isSearchDisplayed() {
      return this.$route.meta.isSearchDisplayed;
    },
    searchString: {
      get() {
        return this.$store.state.userListModule.searchString;
      },
      set(newValue) {
        this.$store.commit('userListModule/setSearchString', newValue);
      }
    }
  },
  created () {
    debounce(this.getUserList, 1500);
  },
  methods: {
    getUserList() {
      this.$store.dispatch('userListModule/getUserList');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/main.scss";

  .github-users {
     &__header {
       background: $color-primary;
       font-weight: 700;
       font-size: 20px;
       line-height: 23px;
       position: sticky;
       top: 0;
       left: 0;
       max-width: 100%;
       height: 80px;
       display: flex;
       justify-content: space-between;
       padding: 0 48px;
       z-index: 1;

       &-logo-wrapper, &-search-wrapper {
         display: flex;
         justify-content: center;
         align-items: center;
       }

       &-logo {
         margin-right: 16px;
       }

       &-title {
         color: $font-color-primary;
       }

       &-search {
         width: 198px;
         height: 16px;
         border: 0;
         border-radius: 12px;
         padding: 8px 20px 8px 40px;
         background: url('~@/assets/search.svg') no-repeat scroll 16px 8px;
         background-color: #FFFFFF;
       }
     }
  }
</style>
