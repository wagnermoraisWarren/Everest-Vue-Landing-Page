<template>
    <div class="contact-data">
        <div class="contact-title">
            <h2>Dados de contato</h2>
        </div>
        <div class="contact-columns">
            <div class="contact-column">
                <div class="contacts">
                    <h4>CPF</h4>
                    <p>880.402.240-04</p>
                </div>
                <div class="contacts">
                    <h4>Nome</h4>
                    <p class="name">Wagner Luiz Marques de Morais</p>
                </div>
                <div class="contacts">
                    <h4>Nascimento</h4>
                    <p>12/ABR/2000</p>
                </div>
            </div>
            <div class="contact-column">
                <div class="contacts">
                    <h4>Celular</h4>
                    <p>(51) 9.9594-3232</p>
                </div>
                <div class="contacts-icon">
                    <h4>Contato</h4>
                    <div class="icon-box">
                        <font-awesome-icon class="fa-2x" icon="fa-brands fa-whatsapp" v-if="isWhatsapp"/>
                        <font-awesome-icon class="fa-2x" icon="fa-solid fa-envelope" v-else/>
                        <span>WhatsApp</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Contato',

        data() {
            return {
                isWhatsapp: true,
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
    gap: 3rem;
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

.contacts-icon span {
    font-weight: 700;
    font-size: 1rem;
}

.icon-box {
    display: flex;
    align-items: center;
    gap: .50rem;
}

.name {
    text-transform: uppercase;
}
</style>