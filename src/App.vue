<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name:'App',
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

  :root {
    --main-magenta: #EE2E5D;
    --main-dark: #0F0F0F;
    --main-white: #F5F6FA;
    --main-dark-opacity-08: #000000cc;
  }

  html {
    scroll-behavior: smooth;
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