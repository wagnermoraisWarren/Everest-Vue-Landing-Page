<template>
    <div class="contact-data">
        <div class="contact-title">
            <h2>Dados de contato</h2>
        </div>
        <div class="contact-columns">
            <div class="contact-column">
                <div class="contacts">
                    <h4>CPF</h4>
                    <p> {{ contatoData.cpf }} </p>
                </div>
                <div class="contacts">
                    <h4>Nome</h4>
                    <p class="name"> {{ contatoData.name }} </p>
                </div>
                <div class="contacts">
                    <h4>Nascimento</h4>
                    <p> {{ contatoData.birthDate }} </p>
                </div>
            </div>
            <div class="contact-column">
                <div class="contacts">
                    <h4>Celular</h4>
                    <p> {{ contatoData.phone }} </p>
                </div>
                <div class="contacts-icon">
                    <h4>Contato</h4>
                    <div class="icon-box">
                        <div v-if="contatoData.whatsApp" class="icon-container">
                            <font-awesome-icon class="fa-2x" icon="fa-brands fa-whatsapp"/>
                            <p>WhatsApp</p>
                        </div>
                        <div v-if="contatoData.emailSMS" class=icon-container>
                            <font-awesome-icon class="fa-2x" icon="fa-solid fa-envelope"/>
                            <p v-if="contatoData.emailSMS">Email-SMS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Contato',

        computed: {
            contatoData: {
                get() {
                    return JSON.parse(localStorage.getItem("contato"));
                }
            }
        },
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
    gap: 5rem;
}

.contacts {
    margin: 1rem 0;
}

.contacts h4,
.contacts-icon h4 {
    font-size: .90rem;
    color: rgba(0, 0, 0, .5);
}

.contacts p {
    font-weight: 700;
}

.contacts-icon p {
    font-weight: 700;
    font-size: 1rem;
}

.icon-box {
    display: flex;
    flex-direction: column;
    gap: .50rem;
}

.icon-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.name {
    text-transform: uppercase;
}
</style>