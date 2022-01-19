<template>
  <div class="home">
    <div>
      {{number}}
    </div>
    <AddProduct @onAddProduct="addProductHandler($event)" />
    <Products
      :products="myQuotes"
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
  mounted() {
    this.incrementNumber()
    this.getAllQuotes();
  },
  data() {
    return {
      myQuotes: [],
      number: 0,
    };
  },
  
  computed: {}, 
  watch: {
    number: function (val) {
    }
  },
  methods: {
    incrementNumber: function () {
      setInterval(() => {
        this.number += 1;
      }, 1000);
    },
    addProductHandler: async function(payload) {
      const res = await fetch('http://localhost:3000/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        this.getAllQuotes();
      }
    },

    deleteProductHandler: async function (productId) {
      // this.myProducts2 = this.myProducts2.filter((p) => p.id !== productId);
      const res = await fetch(`http://localhost:3000/quotes/${productId}`, {method: 'DELETE', headers: {
        'Content-Type': 'application/json'
      }})
      this.getAllQuotes();
    },

    getAllQuotes: async function () {
      const res = await fetch('http://localhost:3000/quotes');
      if (res.ok) {
        const data = await res.json();
        this.myQuotes = data;
      }
    },
    
  },
  components: {
    Products,
    AddProduct,
  },
};
</script>
