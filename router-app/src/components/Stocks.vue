<template>
    <div class="container-fluid">
      <div class="row">
        <app-stock class="col-lg-6" v-for="stock in stocks" :stock="stock"></app-stock>
      </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
      name: "Stocks",
      components: {
        appStock: Stock
      },
      data() {
          return {
          }
      },
      props: [
        'gmPrice',

      ],
      computed: {
        stocks() {
          return this.$store.getters.stocks
        },
        // groupedStocks() {
        //   return _.chunk(this.stocks, 2)
        //   // returns a nested array:
        //   // [[article, article, article], [article, article, article], ...]
        // }
      }
    }
</script>

<style scoped>

</style>
