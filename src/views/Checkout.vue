<template>
  <div>
    <div class="amount">
      <p class="amount">${{cart.totalAmount}}</p>
      <button class="btn sub" @click="emptyCart">Cancel</button>
    </div>
    <ul class="checkout-lists">
      <li v-for="(item, index) in cart.items" :key="index">
        <div class="product-name">{{ item.name + " $" + item.price}}</div>
        <div class="count-and-btns">
          <div class="count">{{ item.amount }}</div>
          <button class="btn add" @click="handleAddProductToCart(item)">&plus;</button>
          <button class="btn sub" @click="handleSubProductToCart(item)">&minus;</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Checkout',
  computed: {
    localComputed() {},
    ...mapState(['cart']),
    ...mapGetters(['totalItems']),
  },
  methods: {
    ...mapMutations({
      addToCart: 'increment',
      emptyCart: 'cancel',
      subCart: 'decrement'
    }),
    handleAddProductToCart: function (payload) {
      this.addToCart(payload);
    },
    handleSubProductToCart: function (payload) {
      this.subCart(payload);
    }
  },
};
</script>

<style scoped>
.amount {
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkout-lists {
  list-style: none;
  padding: 0;
  width: 500px;
}
ul.checkout-lists li {
  text-align: left;
  background-color: rgb(75, 33, 33);
  margin: 20px;
  color: #fff;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.product-name {
  flex: 2;
}
.count-and-btns {
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  border: none;
  border-radius: 2px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 24px;
}
.btn.add:hover {
  background-color: green;
}
.btn.sub:hover {
  background-color: red;
}
.btn:hover {
  color: #fff;
}
</style>
