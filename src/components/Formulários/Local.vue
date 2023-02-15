<template>
    <div class="container">
        <section>
            <div class="welcome">
                <h2>Dados pessoais</h2>
                <p>Você está quase se tornando um <span>Warrior</span>, porém, precisamos saber um pouquinho mais sobre você... Por gentileza, preencha o formulário de acordo com onde você reside atualmente</p>
            </div>
            <div class="form">
                <form>
                    <div class="column">
                        <div class="input-box">
                            <label for="country">País</label>
                            <input type="text" v-model="country">
                        </div>
                        <div class="input-box">
                            <label for="city">Cidade</label>
                            <input type="text" v-model="city">
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label for="zipCode">CEP</label>
                            <input type="text" v-model="zip" v-mask="'#####-###'">
                        </div>
                        <div class="input-box">
                            <label for="address">Endereço</label>
                            <input type="text" v-model="address">
                        </div>
                    </div>
                    <div class="input-box">
                        <label for="number">Número</label>
                        <input type="text" v-model="number">
                    </div>
                </form>
            </div>
            <button type="button" @click="nextForm()">Continuar</button>
            <Modal
                v-show="isModal"
                @closeModal="isModal = false"
                @nextStep="nextStep"
                :userData="userData"
            />
        </section>
    </div>

</template>

<script>
    import Modal from '../Modal/Modal.vue';
    export default {
        name: 'Local',

        data() {
            return {
                isModal: false,
                country: "",
                city: "",
                zip: "",
                address: "",
                number: "",
                localData: [],
            }
        },

        computed: {
            userData: {
                get() {
                    return {
                        country: this.country || "",
                        city: this.city || "",
                        zip: this.zip || "",
                        address: this.address || "",
                        number: this.number || ""
                    }
                }
            }
        },

        methods: {            
            nextForm() {
                if (this.country.length < 3) {
                    this.$toast.error("Estado informado não é válido. Por gentileza, verifique e tente novamente!", {
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
                } else if (this.city.length < 3) {
                    this.$toast.error("Cidade informada não é válida. Por gentileza, verifique e tente novamente!", {
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
                } else if (this.zip.length < 9) {
                    this.$toast.error("Cep informado não é válido. Por gentileza, verifique e tente novamente!", {
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
                } else if (this.address.length < 5) {
                    this.$toast.error("Endereço informado não é válido. Por gentileza, verifique e tente novamente!", {
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
                } else if (this.number.length == "") {
                    this.$toast.error("Número do local precisa ser preenchido. Por gentileza, verifique e tente novamente!", {
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
                    this.localData.country = this.country
                    this.localData.city = this.city
                    this.localData.zip = this.zip
                    this.localData.address = this.address
                    this.localData.number = this.number
                    console.log(this.localData)
                    this.openModal();
                }
            },

            openModal() {
                this.isModal = true;
            },

            nextStep() {
                this.$emit("nextStep");
            }
        },

        components: {
            Modal
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90vh;
    }

    .welcome {
        margin: 1rem auto;
    }

    .column {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
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
        padding: 1rem .50rem;
        letter-spacing: 1px;
        border: 1px solid #555c6d;
        border-radius: 5px;
        outline: none;
        transition: 200ms;
    }

    input:hover {
        background: #d7dede;
        transition: 200ms;
    }

    h2 {
        font-size: 2.2rem;
        color: var(--main-dark-opacity-08);
        margin-bottom: 1rem;
    }
    
    p {
        text-align: justify;
        max-width: 570px;
    }

    span {
        font-weight: 700;
        color: var(--main-magenta);
    }
    
    button {
        margin: 1rem 0;
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