<template>
    <section>
        <div class="box">
            <h2>Investir é sobre você</h2>
            <p>Comece a investir em poucos minutos. Descomplique.</p>
        </div>
        <BotaoPreto mensagem="Invista" url="https://warren.com.br/carteiras/"/>
    </section>
</template>

<script>
    import BotaoPreto from './BotaoPreto.vue';
    export default {
        name: 'Investir',

        components: {
            BotaoPreto
        }
    }
</script>

<style scoped>
    section {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: var(--main-magenta);
        padding: 5rem 0;
        margin-top: 1.5rem;
        gap: 15rem;
    }

    h2 {
        font-size: 2.5rem;
        color: var(--main-white);
    }

    p {
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--main-white);
    }
</style>