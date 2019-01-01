<template>
    <div class="jumbotron  mt-2">
        <h1 class="display-4">Trade or View your Portfolio</h1>
        <p class="lead">You may Save & Load your Data</p>
        <hr class="my-4">
        <p>Click on 'End Day' to begin a new Day!</p>
        <h4 class="lead">
              Your funds: {{ currentFunds | currency }}
        </h4>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
      props: ['Funds'],
      computed: {
        currentFunds() {
          return this.$store.getters.current_funds
        }
      }
    }
</script>

<style scoped>

</style>
