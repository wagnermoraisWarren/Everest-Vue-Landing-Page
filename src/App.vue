<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue';
export default {
  name:'App',
  
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
</style>