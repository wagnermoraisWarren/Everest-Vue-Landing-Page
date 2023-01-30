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
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

  :root {
    --main-magenta: #EE2E5D;
    --main-dark: #0F0F0F;
    --main-white: #F5F6FA;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1400px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
  }
</style>