<template>
    <div class="teste">
        <section>
            <div class="welcome">
                <h2>Dados pessoais</h2>
                <p>Você está quase se tornando um <span>Warrior</span>, porém, precisamos saber um pouquinho mais sobre você... Por gentileza, preencha o formulário de acordo com onde você reside atualmente</p>
            </div>
            <div class="form">
                <form>
                    <div class="column">
                        <div class="input-box">
                            <label for="country">Estado</label>
                            <input type="text" v-model="user.country">
                        </div>
                        <div class="input-box">
                            <label for="city">Cidade</label>
                            <input type="text" v-model="user.city">
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <label for="zipCode">CEP</label>
                            <input type="text" v-model="user.zip">
                        </div>
                        <div class="input-box">
                            <label for="address">Endereço</label>
                            <input type="text" v-model="user.address">
                        </div>
                    </div>
                    <div class="input-box">
                        <label for="number">Número</label>
                        <input type="text" v-model="user.number">
                    </div>
                </form>
            </div>
            <button type="button" @click="nextForm()">Continuar</button>
        </section>
    </div>

</template>

<script>
    export default {
        name: 'Local',

        data() {
            return {
                user: {
                    country: "",
                    city: "",
                    zip: "",
                    address: "",
                    number: ""
                }
            };
        },
    }
</script>

<style scoped>
    .teste {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90vh;
    }

    .welcome {
        margin: 3rem auto;
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
        margin-bottom: 2rem;
    }
    
    p {
        text-align: justify;
        max-width: 500px;
    }

    span {
        font-weight: 700;
        color: var(--main-magenta);
    }
    
    button {
        margin-top: 5%;
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