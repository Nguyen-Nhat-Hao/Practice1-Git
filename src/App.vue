<template>
  <div id="app">
      <CompHeader class="header-position"></CompHeader>
      <CompContents></CompContents>
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import CompContents from './components/CompContents.vue'
export default {
  name: "App",
  components: {
    CompHeader,
    CompContents,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.header-position {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
CompContents {
  margin-top: 70px;
}
</style>
