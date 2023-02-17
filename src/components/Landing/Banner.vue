<template>
    <section class="banner">
        <div class="box">
            <h1>Invista em viver.</h1>
            <h3>Investir toma tempo, mas não precisa ser o seu. Conte com nossos especialistas.</h3>
            <BotaoPreto mensagem="Comece Agora" url="https://warren.com.br/app/#/signup" />
        </div>

    </section>
</template>

<script>
    import BotaoPreto from './BotaoPreto.vue';
    export default {
        name: 'Banner',

        components: {
            BotaoPreto
        }
    }
</script>

<style scoped>
    .banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
        height: 85vh;
        background-image: linear-gradient(to right, rgb(0, 0, 0, .4), rgba(0, 0, 0, 0.3)), url('../../assets/doors.jpg');
        background-size: cover;
        background-position: center;
    }

    h1 {
        font-size: 4rem;
        color: var(--main-white);
    }

    h3 {
        color: var(--main-white);
        font-size: 2.5rem;
        max-width: 1000px;
        margin: 1rem 0;
    }
    
    .box {
        margin: 0 5rem;
    }
</style>