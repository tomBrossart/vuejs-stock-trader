<template>
  <div class="container-fluid">
      <div class="row">
        <h1 v-if="portfolio.length == 0" class="mt-4"> Buy some stocks and see them displayed here! </h1>
        <port-stock class="col-lg-6" v-for="item in portfolio" :stock="item" :key="item.id"></port-stock>
      </div>
  </div>
</template>

<script>
  import PortfolioStock from './PortfolioStock.vue'

  export default {
    name: "Portfolio",
    components: {
      portStock: PortfolioStock
    },
    data() {
      return {
      }
    },
    computed: {
      portfolio() {
        return this.$store.getters.stockPortfolio
        console.log("portfolio is", this.$store.getters.stockPortfolio)
      }
    }
  }
</script>

<style scoped>

</style>
