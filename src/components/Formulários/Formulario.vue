<template>
    <div class="main">
        <section>
            <div class="welcome">
                <h1>Seja bem-vindo.</h1>
                <p>
                    Para abrir sua conta na <span>Warren</span>, basta você preencher um pequeno cadastro com suas informações. Solicitamos que preencha suas credenciais com atenção.
                </p>
            </div>
            <div class="form">
                <form>
                    <div class="input-box">
                        <label for="name">Nome Completo</label>
                        <input type="text" id="name" v-model="user.name">
                    </div>
                    <div class="input-columns">
                        <div class="input-box email-area">
                            <label for="email">Email</label>
                            <input type="text" id="email" v-model="user.email">
                            <img class="email-icon" src="@/assets/email.svg" alt="Email Icon">
                        </div>
                        <div class="input-box email-area">
                            <label for="confirmEmail">Confirmar Email</label>
                            <input type="text" id="confirmEmail" v-model="user.confirmEmail">
                            <img class="email-icon" src="@/assets/email.svg" alt="Email Icon">
                        </div>
                    </div>
                    <div class="input-columns">
                        <div class="input-box">
                            <label for="cpf">Cpf</label>
                            <input type="text" id="cpf" v-model="user.cpf" v-mask="'###.###.###-##'">
                        </div>
                        <div class="input-box">
                            <label for="phone">Celular</label>
                            <input type="text" id="phone" v-model="user.phone" v-mask="'(##) #.####-####'">
                        </div>
                    </div>
                    <div class="input-date">
                        <label for="date">Data de Nascimento</label>
                        <input type="date" id="date" v-model="user.birthDate">
                    </div>
                </form>
            </div>
            <div class="welcome">
                <p>
                    Seu cadastro está quase finalizado! Agora, por onde você gostaria que entrassemos em contato para trazer novidades sobre seus investimentos?
                </p>
                <div class="checkbox-area">
                    <input type="checkbox" name="checkEmail" v-model="user.emailSMS">
                    <label for="checkEmail"> Email e SMS </label>
                  </div>
          
                  <div class="checkbox-area">
                    <input type="checkbox" name="checkWhats" v-model="user.whatsApp">
                    <label for="checkWhats"> WhatsApp </label>
                  </div>
                  <p>
                    Ao clicar em <strong>continuar</strong> você concorda com a <strong>Politica de Privacidade</strong> e as <strong>Condições de Uso</strong> da <span>Warren</span>. Também que seus dados possam ser utilizados para cadastro, pesquisas e afins.
                  </p>
                  <button type="button" @click="nextForm()">Continuar</button>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name: 'Formulario',

        data() {
            return {
                user: {
                    name: "",
                    email: "",
                    confirmEmail: "",
                    cpf: "",
                    phone: "",
                    date: "",
                    emailSMS: false,
                    whatsApp: false
                }

            }
        },

        methods: {
            nextStep() {
                this.$emit("nextStep");
            },

            nextForm() {
                if (this.user.name.length < 7) {
                    this.$toast.error("Nome informado não é válido. Por gentileza, verifique e tente novamente!", {
                        position: "top-center",
                        timeout: 2952,
                        closeOnClick: true,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        draggable: false,
                        draggablePercent: 0.38,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                } else if (this.user.email.length < 5) {
                    this.$toast.error("E-mail inserido inválido! Por gentileza, verifique e tente novamente!", {
                        position: "top-center",
                        timeout: 2952,
                        closeOnClick: true,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        draggable: false,
                        draggablePercent: 0.38,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                } else if (this.user.confirmEmail !== this.user.email) {
                    this.$toast.error("E-mail inserido não coincide. Por gentileza, verifique e tente novamente!", {
                        position: "top-center",
                        timeout: 2952,
                        closeOnClick: true,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        draggable: false,
                        draggablePercent: 0.38,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                } else if (this.user.cpf.length < 14) {
                    this.$toast.error("CPF inserido inválido! Por gentileza, verifique e tente novamente!", {
                        position: "top-center",
                        timeout: 2952,
                        closeOnClick: true,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        draggable: false,
                        draggablePercent: 0.38,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                } else if (this.user.phone.length < 16) {
                    this.$toast.error("Número de celular inserido inválido! Por gentileza, verifique e tente novamente!", {
                        position: "top-center",
                        timeout: 2952,
                        closeOnClick: true,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        draggable: false,
                        draggablePercent: 0.38,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                } else if (this.user.birthDate.length < 8) {
                    this.$toast.error("Data de nascimento inserida inválida! Por gentileza, verifique e tente novamente!", {
                        position: "top-center",
                        timeout: 2952,
                        closeOnClick: true,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        draggable: false,
                        draggablePercent: 0.38,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                } else if (!this.user.emailSMS && !this.user.whatsApp) {
                    this.$toast.error("Selecione no mínimo um meio de contato!", {
                        position: "top-center",
                        timeout: 2952,
                        closeOnClick: true,
                        pauseOnFocusLoss: false,
                        pauseOnHover: false,
                        draggable: false,
                        draggablePercent: 0.38,
                        showCloseButtonOnHover: true,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                } else {
                    this.nextStep();
                }
            }
        },
    }
</script>

<style scoped>
    .form {
        display: flex;
        justify-content: center;
    }

    form {
        width: 60%;
    }

    .welcome {
        display: flex;
        flex-direction: column;
        width: 60%;
        margin: 0 auto;
    }

    .input-box {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
    }

    .input-box label {
        padding: 0 .35rem;
        margin-bottom: .45rem;
        font-size: .80rem;
        font-weight: 700;
        background-color: #f5f5f5;
        color: rgba(0, 0, 0, .7);
        top: -.50em;
        left: 2em;
        z-index: 1;
        text-transform: uppercase;
        position: absolute;
    }

    .input-box input {
        padding: .50rem .5rem;
        background-color: #f5f5f5;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 5px;
        outline: none;
        letter-spacing: 1px;
        line-height: 6ex;
        position: relative;
    }

    input:hover {
        background: #e2eeee;
        transition: 200ms;
    }

    .input-columns {
        display: flex;
        gap: 1rem;
        margin: .80rem 0;
    }

    .email-area,
    .input-date {
        position: relative;
    }

    .email-area input {
        padding: .50rem 2.5rem;
        
    }

    .email-icon {
        position: absolute;
        top: 1.1rem;
        left: .70rem;
        width: 1.5rem;
    }

    .input-date label {
        padding: 0 .35rem;
        font-size: .70rem;
        top: -.50em;
        left: 1em;
        z-index: 1;
        background-color: #f5f5f5;
        position: absolute;
    }

    .input-date input {
        display: flex;
        padding: 0 .50rem;
        width: 49%;
        border-radius: 5px;
        outline: none;
        position: relative;
        line-height: 6ex;
        background-color: #f5f5f5;
        border: 1px solid rgba(0, 0, 0, 0.7);
        position: relative;
    }

    .checkbox-area {
        display: flex;
        gap: 2rem;
        width: 37%;
    }

    h1 {
        font-size: 2.8rem;
        color: var(--main-dark-opacity-08);
        transition: 200ms;
    }

    h1:hover {
        color: #221e1ecc;
        transition: 200ms;
    }

    p {
        max-width: 500px;
        font-size: 1rem;
        font-weight: 500;
        text-align: justify;
        margin: 1rem 0;
        color: var(--main-dark-opacity-08);
    }

    span {
        font-weight: 700;
        color: var(--main-magenta);
    }

    button {
        margin-bottom: 1rem;
        align-self: flex-start;
        padding: 1rem 3rem;
        background: var(--main-magenta);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
        border: none;
        border-radius: 5px;
        font-weight: 700;
        color: var(--main-white);
        cursor: pointer;
        transition: 200ms;
    }

    button:hover {
        padding: 1rem 4.5rem;
        background: var(--main-white);
        color: var(--main-magenta);
        transition: 200ms;
    }
</style>