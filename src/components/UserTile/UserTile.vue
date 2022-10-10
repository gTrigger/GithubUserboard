<template>
  <div
    v-if="user"
    class="github-users__user-tile"
  >
    <router-link :to="routeTo">
      <img
        :src="userProfileImageSource"
        alt="user-profile-image"
        class="github-users__user-tile-image"
      >
      <div class="github-users__user-tile-name">
        {{ userLogin }}
      </div>
    </router-link>
    <a :href="userGithubLink" class="github-users__user-tile-link">
      github
    </a>
  </div>
</template>

<script>
import RouteName from '@/router/RouteName';
import imagePlaceholder from '@/assets/image-placeholder.svg';

export default {
  name: 'UserTile',
  props: {
    user: {
      required: true
    }
  },
  computed: {
    routeTo() {
      return {
        name: RouteName.USER_PAGE,
        params: {
          username: this.user.login
        }
      };
    },
    userProfileImageSource() {
      return this.user.avatar_url || imagePlaceholder;
    },
    userLogin() {
      return this.user.login || '';
    },
    userGithubLink() {
      return this.user.html_url || '';
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/main.scss";

  .github-users__user-tile {
    border-radius: 6px;
    text-align: center;
    width: 200px;
    padding-top: 30px;
    padding-bottom: 30px;

    &:hover {
      @include common-shadow;
    }

    &-image {
      height: 140px;
      width: 140px;
      border-radius: 50%;
    }

    &-name {
      @include font-size-medium;
      @include ellipsis;

      &:hover {
        text-decoration: underline;
      }
    }

    &-link {
      padding-left: 20px;
      background: url('~@/assets/link.svg') no-repeat scroll 0 2px;
      color: $color-blue;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
