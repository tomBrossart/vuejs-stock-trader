<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
      <router-link class="navbar-brand" :to="'/dashboard'"> Stock Trader</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="col-lg-4 navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="'/portfolio'">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/stocks'">Stocks</router-link>
          </li>
        </ul>
        <ul class="col-md-6 nav navbar-nav ml-auto">
          <!--TODO figure out unresponsive dropdown-->
          <!--<li class="dropdown"-->
              <!--:class="{open: isDropdownOpen}"-->
              <!--@click="isDropdownOpen = !isDropdownOpen">-->
            <!--<a class="nav-link dropdown-toggle"-->
               <!--href="#" id="navbarDropdown"-->
               <!--role="button"-->
               <!--data-toggle="dropdown"-->
               <!--aria-haspopup="true"-->
               <!--aria-expanded="false">-->
              <!--Save & Load-->
            <!--</a>-->
            <!--<ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
              <!--<li><a class="dropdown-item" href="#">Save</a></li>-->
              <!--<li><a class="dropdown-item" href="#">Load</a></li>-->
              <!--<li>-->
                <!--<div class="dropdown-divider"></div>-->
              <!--</li>-->
              <!--<li><a class="dropdown-item" href="#">Something else here</a></li>-->
            <!--</ul>-->
          <!--</li>-->

          <li class="nav-item ml-3">
            <a class="nav-link" @click="save_stocks">Save</a>
          </li>
          <li class="nav-item ml-3">
            <a class="nav-link" @click="load_stocks">Load</a>
          </li>
          <li class="nav-item ml-3">
            <a class="nav-link" @click="end_day">End Day</a>
          </li>
          <li class="ml-4 nav-item nav-link text-white funds">
            Current funds are: {{ funds | currency }}
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
    data() {
      return {
        isDropdownOpen: false
      }
    },
    methods: {
      end_day() {
        this.$store.dispatch('endDay')
      },
      save_stocks() {
        console.log('save them stocks!');
        const data = {
          funds: this.$store.getters.current_funds,
          stocks: this.$store.getters.stocks,
          portfolioStocks: this.$store.getters.stockPortfolio,
        };
        this.$http.put('data.json', data).then((response, err) => {
          if(err) {
            console.log("error here!", err)
          }
          console.log("response is", response)
          }
        );
      },
      load_stocks() {
        this.$store.dispatch('loadData')
      },
    },
  };
</script>

<style scoped>
  .funds {
    color: white
  }

  .navbar, .navbar-expand-lg {
    border-radius: 5px;
  }
</style>
