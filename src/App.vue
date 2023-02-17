<template>
  <div id="app">
    <transition name="fade" mode="out-in"> <!-- COMPONENTE DE TRANSIÇÃO DE ROUTER -->
      <router-view />
    </transition>

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

  html,
  body {
    scroll-behavior: smooth;
    height: 100%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
  }
/*
  Estilização da Transição do router
*/
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-2em);       
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 200ms ease;
  }
</style>