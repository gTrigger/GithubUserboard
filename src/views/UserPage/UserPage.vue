<template>
  <div class="github-users__user-page">
    <div
      v-if="user"
      class="github-users__user-page-user"
    >
      <router-link
        :to="{ name: RouteName.USER_LIST }"
        class="github-users__user-page-back"
      >
        <img
          src="@/assets/back.svg"
          alt="back"
        />
      </router-link>
      <img
        :src="userProfileImageSource"
        alt="user-profile-image"
        class="github-users__user-page-image"
      >
      <h2>
        {{ userLogin }}
      </h2>
      <UserReposTable />
    </div>
    <AppSpinner
      v-else-if="isLoading"
    />
  </div>
</template>

<script>
import RouteName from '@/router/RouteName';
import imagePlaceholder from '@/assets/image-placeholder.svg';
import AppSpinner from '@/components/AppSpinner/AppSpinner';
import UserReposTable from '@/components/UserRepos/UserRepos';

export default {
  name: 'UserPage',
  components: {
    UserReposTable,
    AppSpinner
  },
  data() {
    return {
      RouteName
    };
  },
  computed: {
    user() {
      return this.$store.state.userPageModule.user;
    },
    userLogin() {
      return this.$store.state.userPageModule.user.login || '';
    },
    isLoading() {
      return this.$store.state.userPageModule.isUserInfoLoading;
    },
    userProfileImageSource() {
      return this.user.avatar_url || imagePlaceholder;
    }
  },
  created () {
    this.getUserInfo();
    this.getUserRepos();
  },
  destroyed() {
    this.$store.commit('userPageModule/resetState');
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch('userPageModule/getUserInfo', this.$route.params.username);
    },
    getUserRepos() {
      this.$store.dispatch('userPageModule/getUserRepos', this.$route.params.username);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/main.scss";

  .github-users__user-page {
    @include font-size-medium;

    font-weight: $font-weight-normal;
    text-align: center;

    &-user {
      display: flex;
      flex-direction: column;
    }

    &-back {
      position: absolute;
    }

    &-image {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      margin: 0 auto 30px;
    }

    h2 {
      margin-bottom: 30px;
    }
  }
</style>
