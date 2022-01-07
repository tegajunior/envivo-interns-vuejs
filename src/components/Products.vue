<template>
  <div>
    <h3>{{ greetings }}</h3>
    <ul class="list">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :productItem="product"
        @onDeleteProduct="onDeleteProductHandler($event)"
      />
    </ul>
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
</style>
