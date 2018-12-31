import Vue from 'vue';
import Vuex from 'vuex'
import stocks from '../data/stocks';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    funds: 1000,
    stocks: [],
    portfolioStocks: []
  },
  getters: {
    current_funds: state => {
      return state.funds
    },
    stocks: state => {
      return state.stocks
    },
    stockPortfolio (state, getters) {
      return state.portfolioStocks.map(stock => {
        const record = getters.stocks.find(element => element.id == stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        }
      });
    }
  },
  mutations: {
    'SET_STOCKS' (state, portfolio) {
      state.stocks = portfolio.stocksss;
    },
    'RND_STOCKS' (state) {

    },
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
      const record = state.portfolioStocks.find(element => element.id == stockId)
      if(record) {
        record.quantity += parseInt(quantity);
      } else {
        state.portfolioStocks.push({
          id: stockId,
          quantity: parseInt(quantity)
        })
      };
      state.funds -= stockPrice * quantity
      console.log("portfolio is", state.portfolioStocks)
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
      const record = state.portfolioStocks.find(element => element.id == stockId)
      if (record.quantity >= quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.portfolioStocks.indexOf(record), 1)
      }
      state.funds += stockPrice * quantity;
    },
    'END_DAY' (state) {
        // take each stock, randomly inc/dec between 10-50% of current value
      state.stocks.map(stock => {
        let upDown =  Math.random()
        console.log("updowm is", upDown)
        if(upDown > 0.5) {
          stock.price += Math.floor((Math.random() * 10))
        } else {
          stock.price -= Math.floor((Math.random() * 10))
        }
        console.log("ending day", stock.price)
      })
    },
    'LOAD_DATA' (state, portfolio) {
      state.funds = portfolio.funds
      state.stocks = portfolio.stocksss;
      state.portfolioStocks = portfolio.portfolioStocks ? portfolio.portfolioStocks : [];
    }
  },
  actions: {
    buyStock: ({commit}, order) => {
      commit('BUY_STOCK', order);
    },
    // initStocks: ({commit}) => {
    //   commit('SET_STOCKS')
    // },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS')
    },
    sellStock: ({commit}, order) => {
      commit('SELL_STOCK', order)
      },
    endDay: ({commit}) => {
      commit('END_DAY')
    },
    loadData: ({commit}) => {
      Vue.http.get('data.json').then(response => response.json())
        .then((data, err) => {
        if(err) {
          console.log("error here!", err)
        }
        if(data) {
          console.log("jsonified response is", data)
         const funds = data.funds;
          const stocksss = data.stocks;
          const portfolioStocks = data.portfolioStocks;

          const portfolio = {
            portfolioStocks,
            stocksss,
            funds
          }

        commit('LOAD_DATA', portfolio);
        commit('SET_STOCKS', portfolio)
        }
      })
    }
  }
});


