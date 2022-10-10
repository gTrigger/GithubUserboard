<template>
  <div class="github-users__footer">
    <a
      href="https://github.com/"
      class="github-users__footer-logo"
    >
      <img
        src="@/assets/logo.svg"
        alt="logo"
      />
    </a>
    <span class="github-users__footer-copyright">
      © All rights reserved, 2022
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/main.scss";

  .github-users {
    &__footer {
      background: $color-primary;
      color: $font-color-primary;
      width: 100%;
      height: 120px;
      display: flex;
      flex-direction: column;

      &-logo {
        margin: 20px auto;

        img {
          height: 40px;
          width: 40px;
        }
      }

      &-copyright {
        @include font-size-small;
        text-align: center;
      }
    }
  }
</style>
