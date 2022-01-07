<template>
  <div>
    <form @submit="onAddProduct">
      <label for="product-name">Product Name</label>
      <input type="text" id="product-name" v-model.trim="productName" />
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      productName: ''
    }
  },
  methods: {
    onAddProduct: function(event) {
      event.preventDefault();
      if(this.productName.trim().length === 0) {
        return
      }
      this.$emit('onAddProduct', this.productName);
    }
  }
}
</script>