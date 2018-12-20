<template>
  <div class="container">
    <port-stock v-for="stock in portfolio" :stock="stock"></port-stock>
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
