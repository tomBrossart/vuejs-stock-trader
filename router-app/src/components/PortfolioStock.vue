<template>
  <div class="col-sm-6 col-md-5 mt-4" v-if="stock.quantity > 0">
    <div class="card bg-light">
      <div class="card-header">
        <div class="row">
          <h3 class="card-title mr-auto">
            {{ stock.name }}
          </h3>
          <p class="ml-auto mt-1">(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</p>
        </div>
        </div>
      <div class="card-body w-100 row">
        <div class="">
          <input
            type="number"
            class="ml-2 mr-auto form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          >
        </div>
        <div class="ml-auto">
          <button
            class="btn btn-warning"
            @click="sellStock"
            :disabled="quantity <= 0 || Number.isInteger(quantity)"
          > Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>

<script>
  export default {
    name: 'PortfolioStock',
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.current_funds;
      },
    },
    methods: {
      sellStock() {
        console.log("sell stock called");
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('sellStock', order);
        this.quantity = 0;
      }
    }
  }
</script>
