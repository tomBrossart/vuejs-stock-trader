<template>
  <div class="container-fluid">
    <header-nav :funds="currentFunds"></header-nav>
    <vue-snotify/>
    <div class="col-xs-12">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
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
    created() {
      this.$store.dispatch('loadData');
    },
    computed: {
        currentFunds() {
          return this.$store.getters.current_funds
        }
    }
  }
</script>


<style>
  body {
    padding: 30px;
  }

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
