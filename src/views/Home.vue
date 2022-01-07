<template>
  <div class="home">
    <AddProduct @onAddProduct="addProductHandler($event)" />
    <Products
      :products="myProducts2"
      :greetings="'Good afternoon!'"
      @onDeleteProduct="deleteProductHandler($event)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Products from '../components/Products';
import AddProduct from '../components/AddProduct';

export default {
  name: 'Home',
  data() {
    return {
      myProducts2: [
        { id: 'm1', name: 'Cup 1' },
        { id: 'm2', name: 'Cup 2' },
        { id: 'm3', name: 'Cup 3' },
      ],
    };
  },
  methods: {
    addProductHandler: function (productName) {
      const newProduct = {
        id: new Date().toISOString(),
        name: productName,
      };
      this.myProducts2.push(newProduct);
    },
    deleteProductHandler: function (productId) {
      this.myProducts2 = this.myProducts2.filter(p => p.id !== productId);
    }
  },
  components: {
    Products,
    AddProduct,
  },
};
</script>
