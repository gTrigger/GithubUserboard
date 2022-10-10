<template>
  <div class="github-users__user-list">
    <h1 class="github-users__user-list-title">Top Users</h1>
    <template v-if="users.length">
      <div class="github-users__user-list-items">
        <UserTile
          v-for="user in users"
          :key="user.id"
          :user="user"/>
      </div>
    </template>
    <AppSpinner
      v-else-if="isLoading"
    />
    <div
      v-else
      class="github-users__user-list-no-results"
    >
      Users not found
    </div>
  </div>
</template>

<script>
import UserTile from '@/components/UserTile/UserTile';
import AppSpinner from '@/components/AppSpinner/AppSpinner';

export default {
  name: 'UserList',
  components: {
    UserTile,
    AppSpinner
  },
  computed: {
    users() {
      return this.$store.state.userListModule.users;
    },
    isLoading() {
      return this.$store.state.userListModule.isUserListLoading;
    }
  },
  created() {
    this.getUserList();
  },
  destroyed() {
    this.$store.commit('userListModule/resetState');
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

 .github-users__user-list {
   text-align: center;

   &-items {
     margin-top: 60px;
     display: flex;
     flex-flow: row wrap;
     gap: 10px;
   }

   &-no-results {
     @include font-size-medium;

     margin-top: 118px;
   }
 }
</style>
