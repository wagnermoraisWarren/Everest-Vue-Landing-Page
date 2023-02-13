<template>
    <div class="contact-data">
        <div class="contact-title">
            <h2>Dados de contato</h2>
        </div>
        <div class="contact-columns">
            <div class="contact-column">
                <div class="contacts">
                    <h4>País</h4>
                    <p>Brasil</p>
                </div>
                <div class="contacts">
                    <h4>Cidade</h4>
                    <p>Porto Alegre</p>
                </div>
                <div class="contacts">
                    <h4>CEP</h4>
                    <p>91.755-220</p>
                </div>
            </div>
            <div class="contact-column">
                <div class="contacts">
                    <h4>Endereço</h4>
                    <p>Rua Nova Ipanema</p>
                </div>
                <div class="contacts">
                    <h4>Número</h4>
                    <p>64</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pessoal',
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