<template>
    <div>
        <section>
            <Sucess />
            <div class="box">
                <h2>Cadastro Finalizado</h2>
                <p>Caso deseja retornar à página inicial clique no botão abaixo.</p>
            </div>
            <router-link to="/">
                <button>Continuar</button>
            </router-link>
        </section>
    </div>
</template>

<script>
    import Sucess from './Sucess.vue';
    export default {
        name: 'CadastroFinalizado',

        components: {
            Sucess
        }
    }
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }

    .box {
        text-align: center;
        max-width: 300px;
    }

    h2 {
        font-size: 1.9rem;
        color: var(--main-dark-opacity-08);
    }

    p {
        opacity: .7;
    }

    button {
        padding: .50rem 1rem;
        margin-top: 2rem;
        border: none;
        border-radius: 5px;
        background: rgba(0, 0, 0, .8);
        color: var(--main-white);
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
    }

    button:hover {
        padding: .50rem 1.5rem;
        background: rgba(0, 0, 0, .9);
        transition: 200ms;
    }
</style>