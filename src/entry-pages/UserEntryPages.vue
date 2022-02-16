<template>
  <div>
    <p>{{user.name}}</p>
    <button @click="logout">Logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'UserEntryPage',
  data() {
    return {
      user: null
    }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('app_token');
      this.$router.replace('/login')
    }
  },
}
</script>