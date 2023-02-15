<template>
    <div class="modal">
        <div class="title">
            <h3>Confirmar informações de cadastro</h3>
            <div class="close-icon">
                <font-awesome-icon class="fa-2x" icon="fa-solid fa-xmark" @click="closeModal()" />
            </div>
        </div>
        <div class="button-box">
            <p class="main-p">Analise e confirme os dados preenchidos no cadastro.</p>
            <button class="contact-button" @click="contactModal()">Contato</button>
            <button class="self-button" @click="pessoalModal()">Pessoal</button>
            <Pessoal :userData="userData" v-if="isPessoal"/>
            <Contato  v-else/>
        </div>
        <div class="button-area">
            <button class="cancel-button" @click="closeModal()">Cancelar</button>
            <button class="confirm-button" @click="nextStep()">Confirmar</button>
        </div>
    </div>
</template>

<script>
    import Contato from './Contato.vue';
    import Pessoal from './Pessoal.vue';
    export default {
        name: 'Modal',
        
        data() {
            return {
                isPessoal: false,
            };
        },

        methods: {
            contactModal() {
                this.isPessoal = false;
            },

            pessoalModal() {
                this.isPessoal = true;
            },

            closeModal() {
                this.$emit("closeModal");
            },

            nextStep() {
                this.$emit("nextStep");
            }
        },

        props: {
            userData: {
                type: Object,
                required: true
            }
        },

        components: {
            Contato,
            Pessoal
        }
    }
</script>

<style scoped>
    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: 0px 0px 1px 1100px #433d3d87;
        width: 50%;
        padding: 1rem;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        border-bottom: 2px solid #d1ebe6;
        padding: 1rem;
        font-size: .90rem;
    }

    .close-icon {
        position: absolute;
        right: 2rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .button-box {
        padding: 0 2rem;
        font-size: .90rem;
    }

    .contact-button {
        padding: .50rem 1rem;
        margin: .65rem .50rem 0 0;
        background: #2F2F33;
        color: #fff;
        border: none;
        border-radius: 50px;
        font-weight: 500;
        cursor: pointer;
        transition: 200ms;
    }

    .self-button {
        padding: .50rem 1rem;
        margin: .65rem .50rem 0 0;
        background: #FFD9E2;
        color: black;
        border: none;
        border-radius: 50px;
        font-weight: 500;
        cursor: pointer;
        transition: 200ms;
    }

    .contact-button:hover {
        background: #3d3d42;
        padding: .50rem 1.1rem;
    }

    .self-button:hover {
        background: #e8c1ca;
        padding: .50rem 1.1rem;
    }

    .button-area {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        gap: 2rem;
    }

    .button-area button {
        padding: 1rem 2rem;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .4);
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: 100ms;
    }

    .cancel-button {
        background: #FFD9E2;
        color: var(--main-magenta);
    }

    .confirm-button {
        background: var(--main-magenta);
        color: var(--main-white);
    }

    .cancel-button:hover {
        background: #e8c1ca;
        padding: 1rem 2.5rem;
    }

    .confirm-button:hover {
        background: #d72350;
        padding: 1rem 2.5rem;
    }
</style>