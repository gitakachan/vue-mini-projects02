<template>
  <div id="app">
    <h1>progress steps</h1>
    <main-progress-bar></main-progress-bar>
  </div>
</template>

<script>
import MainProgressBar from "@/components/content/MainProgressBar.vue";
export default {
  name: "App",
  components: {
    MainProgressBar,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
body {
  background-color: #f6f7fb;

  h1 {
    text-align: center;
    width: 400px;
    padding: 30px;
  }
}
</style>
