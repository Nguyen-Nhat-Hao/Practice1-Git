<template>
  <div>
    <h1>Home</h1>
    <p>Welcome to the Home page!</p>
    <router-view></router-view>
    <button @click="changeAboutPage">
      go to about page
    </button>
  <router-view></router-view>

  </div>
</template>

<script>
export default {
  methods: {
    changeAboutPage() {
      this.$router.push('/about')
    }
  }
};
</script>
<style >
</style>