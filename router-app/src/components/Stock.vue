<template>
  <div class="col-sm-12 col-md-6 mt-4">
    <div class="card bg-primary text-white">
      <div class="card-header">
        <div class="row">
          <h3 class="card-title ml-1 mr-auto">
            {{ stock.name }}
          </h3>
          <p class="ml-auto mt-1 mr-2">(Price: {{ stock.price }})</p>
        </div>
      </div>
      <div class="card-body w-100">
        <div class="row">
          <div class="mr-auto ml-2">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model.number="quantity"
              :class="{danger: insufficientFunds}"
            >
          </div>
          <div class="ml-auto">
            <button
              class="btn btn-success mr-2 w-100"
              @click="buyStock"
              :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
            >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
            </button>
          </div>
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
    name: 'Stock',
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
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {
      buyStock() {
        console.log("Number.isInteger", Number.isInteger(this.quantity));
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>
