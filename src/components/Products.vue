<template>
  <div>
    <h3>Click on Quotes to Delete</h3>
    <transition-group class="list" name="products" tag="ul" appear>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :productItem="product"
        @onDeleteProduct="onDeleteProductHandler($event)"
      />
    </transition-group>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem';
export default {
  name: 'Products',
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    greetings: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDeleteProductHandler: function (id) {
      this.$emit('onDeleteProduct', id);
    }
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0;
}
.products-enter-active {
  transition: all 0.5s ease-in;
}
.products-leave-active {
 transition: all 0.5s ease-out;
}

.products-enter, .products-leave-to {
  opacity: 0;
  transform: translateY(50px)
}
</style>
