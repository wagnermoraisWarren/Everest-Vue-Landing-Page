<template>
    <section>
        <div class="wrapper">
            <Wizard />
            <div class="welcome">
                <h1>Seja bem-vindo.</h1>
                <p>
                    Para abrir sua conta na <span>Warren</span>, basta você preencher um pequeno cadastro com suas informações. Solicitamos que preencha suas credenciais com atenção.
                </p>
            </div>
            <div class="form">
                <form action="#">
                    <div class="input-box">
                        <label for="name">Nome Completo</label>
                        <input type="text" id="name">
                    </div>
                    <div class="input-columns">
                        <div class="input-box">
                            <label for="email">Email</label>
                            <input type="text" id="email">
                        </div>
                        <div class="input-box">
                            <label for="confirmEmail">Confirmar Email</label>
                            <input type="text" id="confirmEmail">
                        </div>
                    </div>
                    <div class="input-columns">
                        <div class="input-box">
                            <label for="cpf">Cpf</label>
                            <input type="text" id="cpf" v-model="cpf">
                        </div>
                        <div class="input-box">
                            <label for="phone">Celular</label>
                            <input type="text" id="phone" v-model="phone">
                        </div>
                    </div>
                    <div class="input-date">
                        <label for="date">Data de Nascimento</label>
                        <input type="text" id="date" v-model="date">
                    </div>
                </form>
            </div>
            <p>
                Seu cadastro está quase finalizado! Agora, por onde você gostaria que entrassemos em contato para trazer novidades sobre seus investimentos?
            </p>
            <div class="checkbox-area">
                <input type="checkbox" name="checkEmail">
                <label for="checkEmail"> Email e SMS </label>
              </div>
      
              <div class="checkbox-area">
                <input type="checkbox" name="checkWhats">
                <label for="checkWhats"> WhatsApp </label>
              </div>
              <p>
                Ao clicar em <strong>continuar</strong> você concorda com a <strong>Politica de Privacidade</strong> e as <strong>Condições de Uso</strong> da <span>Warren</span>. Também que seus dados possam ser utilizados para cadastro, pesquisas e afins.
              </p>
              <BotaoVermelho mensagem="PRÓXIMO"/>
        </div>
        <Background />
    </section>
</template>

<script>
    import Wizard from '@/components/Formulários/Wizard.vue';
    import BotaoVermelho from '@/components/Landing/BotaoVermelho.vue';
    import Background from '@/components/Formulários/Background.vue';
    export default {
        name: 'Formulario',

        data() {
            return {
                cpf: "",
                phone: "",
                date: ""
            }
        },

        methods: {

        },

        components: {
            Background,
            BotaoVermelho,
            Wizard
        }
    }
</script>

<style scoped>
    section {
        display: flex;
        width: 100%;
    }

    .wrapper {
        margin: 0 auto;
        max-width: 800px;
    }

    .form {
        height: 45%;
        margin-bottom: 2rem;
    }

    .input-box {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .input-box label {
        font-size: .80rem;
        font-weight: 700;
        color: rgba(0, 0, 0, .7);
        text-transform: uppercase;
        margin-bottom: .45rem;
    }

    .input-box input {
        padding: 2rem .50rem;
        border: 1px solid #555c6d;
        border-radius: 10px;
        outline: none;
    }

    .input-columns {
        display: flex;
        gap: 1rem;
        margin: .80rem 0;
    }

    .input-date label {
        font-size: .80rem;
        margin-bottom: .45rem;
    }

    .input-date input {
        display: flex;
        padding: .50rem 1rem;
        border: 1px solid #8c99b8;
        border-radius: 5px;
        outline: none;
    }

    h1 {
        font-size: 3.3rem;
        color: var(--main-dark-opacity-08);
    }

    p {
        margin: 1.5rem 0;
        font-size: 1rem;
        font-weight: 500;
        text-align: justify;
        color: var(--main-dark-opacity-08);
    }

    span {
        font-weight: 700;
        color: var(--main-magenta);
    }
</style>