<!-- <template>
    <section>
        <ul class="step-wizard-list">
            <li class="step-wizard-item current-item">
                <span class="progress-count"></span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count"></span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count"></span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Wizard',
    }
</script>

<style scoped>
    .step-wizard-list {
        display: flex;
        padding: 20px 10px;
        z-index: 10;
        position: relative;
    }

    .step-wizard-item {
        min-width: 250px;
        position: relative;
    }

    .step-wizard-item + .step-wizard-item:after {  /* LINHA */
        content: "";
        left: 0;
        top: 8px;
        width: 100%;
        height: 5px;
        background: var(--main-magenta);
        transform: translateX(-50%);
        position: absolute;
        z-index: -10;
    }

    .progress-count {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        height: 20px;
        width: 20px;
        border: 2px solid var(--main-magenta);
        background-color: #fff;
        border-radius: 50%;
        position: relative;
        z-index:10;
    }
    .progress-count:after {
        content: "";
        height: 10px;
        width: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: -10;
    }

    .current-item .progress-count:after {
        background: var(--main-magenta);
        border: 3px solid #fff;
    }
</style> -->

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
  
  <style>
  .progress-bar {
    display: flex;
    height: fit-content;
  }
  
  .dot-active {
    width: 1rem;
    height: 1rem;
    background-color: var(--brand-magenta);
    border-radius: 100%;
    border: 2px solid white;
    outline: 1px solid var(--brand-magenta);
  }
  .dot-inactive {
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid white;
    outline: 1px solid var(--brand-magenta);
  }
  .line {
    height: 1px;
    width: 14rem;
    background-color: var(--brand-magenta);
    align-self: center;
  }
  
  .bar {
      display: flex;
  }
  </style>
  