<template>
  <div>
    <h3>This is List of Products</h3>
    <router-link to="/checkout">
      <div class="cart">
        Cart ({{ totalItems }})
      </div>
    </router-link>
    <div class="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} <span><i>Price:</i> ${{ product.price }}</span>
          <button class="add-btn" @click="handleAddProductToCart(product)">
            &plus;
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'ProductsList',
  data() {
    return {
      products: [
        {
          name: 'Product A',
          id: 'pa',
          price: 15,
          amount: 1,
          totalPrice: 15,
        },
        {
          name: 'Product B',
          id: 'pb',
          price: 22,
          amount: 1,
          totalPrice: 22,
        },
        {
          name: 'Product C',
          id: 'pc',
          price: 20,
          amount: 1,
        },
        {
          name: 'Product D',
          id: 'pd',
          price: 8,
          amount: 1,
        },
      ],
    };
  },
  computed: {
    localComputed() {},
    ...mapState(['cart']),
    ...mapGetters(['totalItems']),
  },
  methods: {
    ...mapMutations({
      addToCart: 'increment',
    }),
    handleAddProductToCart: function (payload) {
      this.addToCart(payload);
    },
  },
};
</script>

<style scoped>
.cart {
  background-color: green;
  color: #fff;
  cursor: pointer;
  width: 300px;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 0 auto;
}
.products {
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
}
.products ul {
  list-style: none;
  padding: 0;
  width: 800px;
  background-color: #222;
  color: #fff;
  border-radius: 5px;
}
.products ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
  transition: all 0.4s ease-in;
}
.add-btn {
  border: none;
  font-size: 20px;
  background-color: green;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: 12px;
  transition: transform 0.3s ease-in;
}
.add-btn:hover {
  transform: scale(1.3);
}
.products ul li:hover {
  opacity: 0.5;
}
.products ul li:last-of-type {
  border-bottom: none;
}
</style>
