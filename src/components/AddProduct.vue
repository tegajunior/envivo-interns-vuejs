<template>
  <div>
    <form @submit="onAddProduct">
      <label for="product-name">Quote</label>
      <input type="text" id="product-name" v-model.trim="productName" />
      <label for="author">Author</label>
      <input type="text" id="author" v-model.trim="author" />
      <button type="submit">Add Quote</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      productName: '',
      author: "",
    }
  },
  methods: {
    onAddProduct: function(event) {
      event.preventDefault();
      if(this.productName.trim().length === 0) {
        return 
      }
      const payload = {
        author: this.author,
        quote: this.productName
      }
      this.$emit('onAddProduct', payload);
    }
  }
}
</script>