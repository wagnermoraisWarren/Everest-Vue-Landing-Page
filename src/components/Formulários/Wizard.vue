<template>
    <div class="progress-bar">
      <div v-for="index in steps" :key="index" class="bar">
        <div :class="index <= currentStep ? 'dot-active' : 'dot-inactive'"></div>
        <div v-if="index !== steps" class="line"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Wizard",
  
    props: {
      steps: {
        type: Number,
        required: true,
      },
      currentStep: {
        type: Number,
        required: false,
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .dot-active {
    width: 1rem;
    height: 1rem;
    background-color: var(--main-magenta);
    border-radius: 100%;
    border: 2px solid #fff;
    outline: 1px solid var(--main-magenta);
  }
  .dot-inactive {
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid white;
    outline: 1px solid var(--main-magenta);
  }
  .line {
    height: 2px;
    width: 14rem;
    background-color: var(--main-magenta);
    align-self: center;
  }
  
  .bar {
      display: flex;
  }
  </style>
  