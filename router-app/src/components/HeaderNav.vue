<template>
    <div class="container-fluid">
            <nav class="row navbar navbar-expand-lg navbar-dark bg-dark">
              <router-link class="navbar-brand" :to="'/dashboard'"> Stock Trader </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="col-md-8 navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="'/portfolio'">Portfolio </router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" :to="'/stocks'">Stocks </router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Save & Load
                            </a>
                            <!--TODO dropdown not responsive-->
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="www.google.com">Save</a>
                                <a class="dropdown-item" href="#">Load</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" @click="end_day">End Day</a>
                          </li>
                        <li class="nav-item funds">
                          Current funds are: {{ funds }}
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
      props: ['funds'],
    methods: {
      end_day() {
        this.$store.dispatch('endDay')
      }
    },
};
</script>

<style scoped>
    .funds {
      color: white
    }
</style>
