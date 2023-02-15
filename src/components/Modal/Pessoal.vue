<template>
    <div class="contact-data">
        <div class="contact-title">
            <h2>Dados de contato</h2>
        </div>
        <div class="contact-columns">
            <div class="contact-column">
                <div class="contacts">
                    <h4>País</h4>
                    <p> {{ userData.country }} </p>
                </div>
                <div class="contacts">
                    <h4>Cidade</h4>
                    <p> {{ userData.city }} </p>
                </div>
                <div class="contacts">
                    <h4>CEP</h4>
                    <p> {{ userData.zip }} </p>
                </div>
            </div>
            <div class="contact-column">
                <div class="contacts">
                    <h4>Endereço</h4>
                    <p> {{ userData.address }} </p>
                </div>
                <div class="contacts">
                    <h4>Número</h4>
                    <p> {{ userData.number }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pessoal',

        data() {
            return {
                localData: []
            }
        },

        props: {
            userData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
.contact-data {
    margin-top: 1rem;
    padding: 1rem 2rem;
    border: 2px solid #d1ebe6;
    border-radius: 5px;
}

.contact-title {
    border-bottom: 2px solid #d1ebe6;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, .8);
}

.contact-columns {
    display: flex;
    gap: 10rem;
}

.contacts {
    margin: .85rem 0;
}

.contacts h4 {
    font-size: 1rem;
    color: rgba(0, 0, 0, .5);
}

.contacts p {
    font-size: 1rem;
    font-weight: 700;
}
</style>