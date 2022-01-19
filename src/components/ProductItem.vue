<template>
  <li class="product" @click="onDeleteProduct">
    <span class="author">{{productItem.author}}</span>
    {{productItem.quote}}
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
    padding: 40px;
    background-color: #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
  }
  .product:hover {
    background-color: #6e7056;
    color: #fff;
  }
  .author {
    display: block;
    margin-bottom: 20px;
    font-style: italic;
    font-weight: bold;
  }
</style>