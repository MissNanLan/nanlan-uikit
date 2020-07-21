<template>
  <div id="app">
     <btn></btn>

  </div>
</template>

<script>
import btn from "@/components/button/src/button";
export default {
  name: 'App',
  components: {
   btn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
