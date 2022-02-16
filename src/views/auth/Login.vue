<template>
  <div>
    <input type="text" placeholder="email"/>
    <input type="text" placeholder="password" />
    <button @click="login">Submit</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login: function() {
      const user = {
        name: 'fffbff',
        email: 'gggddf',
      }
      localStorage.setItem('app_token', '1234fkfklkd666');
      localStorage.setItem('user', JSON.stringify(user));
      this.$router.push('/profile')

    }
  },
}
</script>