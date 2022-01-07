<template>
  <li class="product" @click="onDeleteProduct">
    {{productItem.name}}
  </li>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productItem: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onDeleteProduct: function() {
      this.$emit('onDeleteProduct', this.productItem.id);
    }
  }
}
</script>

<style scoped>
  .product{
    margin: 20px;
    padding: 20px;
    background-color: #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
  }
  .product:hover {
    background-color: #6e7056;
    color: #fff;
  }
</style>