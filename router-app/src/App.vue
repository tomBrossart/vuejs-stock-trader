<template>
  <div class="container">
    <header-nav></header-nav>
    <router-view transition="fade" mode="out-in"></router-view>
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav.vue'
  import Dashboard from './components/Dashboard.vue'
  export default {
    components: {
      HeaderNav,
      Dashboard
    }
  }
</script>

<style>

</style>
