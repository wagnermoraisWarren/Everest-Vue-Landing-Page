<template>
    <main>
        <header>
            <h1>Formulário</h1>
            <button>
                <router-link to="/">
                    <img src="@/assets/arrow-left.svg" alt="Flecha Voltar">
                </router-link>
            </button>
        </header>
        <div class="box">
            <section>
                <div class="container">
                    <div class="form">
                        <div class="stepper-box">
                            <Wizard :steps="3" :currentStep="currentStep" />
                        </div>
                        <div v-if="currentStep === 1">
                            <Formulario @nextStep="nextStep" />
                        </div>
                        <div v-if="currentStep === 2">
                            <Local @nextStep="nextStep" />
                        </div>
                        <div v-if="currentStep === 3">
                            <CadastroFinalizado />
                        </div>
                    </div>
                </div>
            </section>
            <Background />
        </div>
    </main>
</template>

<script>
    import Formulario from '@/components/Formulários/Formulario.vue';
    import Local from '@/components/Formulários/Local.vue';
    import CadastroFinalizado from '@/components/Formulários/CadastroFinalizado.vue';
    import Background from '@/components/Formulários/Background.vue';
    import Wizard from '@/components/Formulários/Wizard.vue';
    export default {
        name: 'Cadastro',

        data() {
            return {
                currentStep: 1
            };
        },

        methods: {
            nextStep() {
                this.currentStep += 1;
            }
        },

        components: {
            Formulario,
            Local,
            CadastroFinalizado,
            Background,
            Wizard
        }
    }
</script>

<style scoped>
    .box {
        display: flex;
    }

    .stepper-box {
        margin: 2% 0 0 0;
    }

    section {
        width: 70%;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--main-magenta);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }

    header h1 {
        color: var(--main-white);
        font-size: 1rem;
        text-transform: uppercase;
        transition: 200ms;
    }

    header h1:hover {
        letter-spacing: 1px;
    }

    header button {
        position: absolute;
        left: 1rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    header img {
        width: 2rem;
    }

    header img:hover {
        width: 2.2rem;
        transition: 200ms;
    }
</style>