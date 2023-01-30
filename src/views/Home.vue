<template>
  <div>
    <Header />
    <Banner />
    <Destaques />
    <Investir />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Banner from '@/components/Banner.vue';
  import Destaques from '@/components/Destaques.vue';
  import Investir from '@/components/Investir.vue';
  import Footer from '@/components/Footer.vue'
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
      Footer
    }
  };
</script>
