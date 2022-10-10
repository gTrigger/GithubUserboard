<template>
  <div class="spinner"/>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppSpinner'
});
</script>

<style lang="scss" scoped>
  @import '~@/styles/main.scss';

  .spinner {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: conic-gradient($color-white 10%, $color-black);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
    animation: spin 0.8s infinite linear;
    margin: 40px auto;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
</style>
