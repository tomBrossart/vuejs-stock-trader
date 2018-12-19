<template>
  <div class="container">
    <header-nav :funds="currentFunds"></header-nav>
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
    },
    computed: {
        currentFunds() {
          return this.$store.getters.current_funds
        }
    }
  }
</script>

<style>

</style>
