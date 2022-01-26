import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      items: [],
      totalAmount: 0,
    }
  },
  getters: {
    totalItems: state => {
      return state.cart.items.length;
    },
    totalPrice: state => {
      let value = 0;
      if (state.cart.items.length === 0) {
        return value;
      }
      state.cart.items.forEach(item => {
        const itemTotalCost = item.price * item.amount;
        value += itemTotalCost;
      })
      return value;
    }
  },
  mutations: {
    increment (state, payload) {
      // update the total amount
      const updatedTotalPrice = state.cart.totalAmount + payload.amount * payload.price;

      // check if item is already in the cart
      const productIndex = state.cart.items.findIndex(
        (item) => item.id === payload.id
      );
      const itemInCart = state.cart.items[productIndex];

      let updatedItems;

      if (itemInCart) {
        const updatedItem = { ...payload, amount: itemInCart.amount + payload.amount };
        updatedItems = [...state.cart.items]
        updatedItems[productIndex] = updatedItem;
      } else {
        updatedItems = state.cart.items.concat(payload);
      }
      state.cart.items = updatedItems;
      state.cart.totalAmount = updatedTotalPrice;
      
    }
  },
  actions: {
  },
  modules: {
  }
})
