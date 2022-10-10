<template>
  <div id="app">
    <AppHeader />

    <div
      id="main"
      class="github-users__main"
    >
      <router-view />
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader';
import AppFooter from '@/components/AppFooter/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
