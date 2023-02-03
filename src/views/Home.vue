<template>
  <div>
    <HeaderForm />
    <Formulario />
  </div>
</template>

<script>
  import Header from '@/components/Landing/Header.vue';
  import Banner from '@/components/Landing/Banner.vue';
  import Destaques from '@/components/Landing/Destaques.vue';
  import Investir from '@/components/Landing/Investir.vue';
  import Footer from '@/components/Landing/Footer.vue'
  import HeaderForm from '@/components/Formulários/HeaderForm.vue';
  import Formulario from './Formulario.vue';
  export default {
    name: 'Home',

    data() {
      return {

      };
    },

    components: {
      Header,
      Banner,
      Destaques,
      Investir,
      Footer,
      HeaderForm,
      Formulario
    }
  };
</script>
