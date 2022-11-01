<template>
  <table
    v-if="repos.length"
    class="table github-users__user-repos"
  >
    <tr
      v-for="repo in repos"
      :key="repo.id"
      class="table__row"
    >
      <td class="table__cell github-users__user-repos-name">
        <a :href="repo.html_url">
          {{ repo.name }}
        </a>
      </td>
      <td class="table__cell github-users__user-repos-watchers">
        <div>
          <img
            src="@/assets/binoculars.svg"
            alt="binoculars"
          />
          {{ repo.watchers_count }}
        </div>
      </td>
      <td class="table__cell github-users__user-repos-stars">
        <div>
          <img
            src="@/assets/star.svg"
            alt="star"
          />
          {{ repo.stargazers_count }}
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import RouteName from '@/router/RouteName';

export default {
  name: 'UserReposTable',
  data () {
    return {
      RouteName
    };
  },
  computed: {
    repos() {
      return this.$store.state.userPageModule.repos;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/main.scss";

  .github-users__user-repos {
    text-align: start;
    table-layout: fixed;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;

    &-name {
      width: auto;

      a {
        &:hover {
          color: $color-blue !important;
          text-decoration: underline;
        }
      }
    }

    &-watchers {
      width: 25%;

      img {
        vertical-align: middle;
      }
    }

    &-stars {
      width: 25%;

      img {
        vertical-align: middle;
      }
    }

    .table__cell {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
