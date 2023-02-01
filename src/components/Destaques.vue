<template>
    <section class="wrapper">
        <div class="container">
            <div class="f-img-box"></div>
            <div class="text-box">
                <h2>Investimento e Educação</h2>
                <p>
                    Na <span>Warren</span>, o investimento e a educação andam lado a lado! Aqui, você além de investir seu dinheiro da melhor forma possível com os melhores profissionais da nossa equipe, você adquire conhecimento sobre o investimento, sobre taxas e como seu dinheiro está rendendo!
                </p>
                <p>
                    Você decide, nós resolvemos. Na <span>Warren</span>, você tem diversas opções para investir seu dinheiro da melhor forma que achar necessário. Poderá criar sua carteira para uma viagem no final de ano, para comprar um novo carro, para um planejamento de vida, o céu é o limite!
                </p>
                <BotaoVermelho mensagem="Conheça Mais" url="https://warren.com.br/sobre/" />
            </div>
        </div>
        <div class="container">
            <div class="text-box">
                <h2>Vivemos a Tecnologia</h2>
                <p>
                    A <span>Warren</span>, além de ser uma Administradora, Corretora e Gestora, também é uma FinTech. Ou seja, além do nosso foco em mercado de finanças, somos totalmente conectados com a tecnologia. Nas fintechs, a tecnologia é mais que um apoio para o contato entre o cliente e empresa. Nelas, trata-se da principal plataforma de atuação. Os serviços das fintech são majoritariamente digitais.
                </p>
                <div class="border">

                </div>
                <p>
                    O mercado financeiro é famoso pelos seus procedimentos burocráticos e complicados. Filas, telefonemas, entregas de pastas e mais pastas de documentos… O objetivo das fintechs é deixar tudo isso no passado. Como tudo é resolvido online, os processos para os clientes das fintechs são mais ágeis e menos burocráticos. Tudo é resolvido na hora — até mesmo a assinatura de contratos e entrega de documentos são digitalizados. 
                </p>
                <BotaoVermelho mensagem="Confira" url="https://warren.com.br/app/#/signup" />
            </div>
            <div class="s-img-box"></div>
        </div>
    </section>
</template>

<script>
    import BotaoVermelho from './BotaoVermelho.vue';
    export default {
        name: 'Destaques',

        components: {
            BotaoVermelho
        }
    }
</script>

<style scoped>
.wrapper {
    margin: 0 auto;
    max-width: 1800px;
}

.container {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;
}

.text-box h2 {
    margin: 1.5rem 0;
    text-align: center;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.8);
}

.text-box p {
    margin: 1rem 0;
    max-width: 650px;
    text-align: justify;
    font-size: 1.25rem;
}

.border {
    border: 1px solid var(--main-magenta);
}

.f-img-box {
    padding: 15rem;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .8);
    background-image: url('../assets/capa\ 2.png');
    background-size: cover;
    background-position: center;
}

.s-img-box {
    padding: 15rem;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, .8);
    background-image: url('../assets/mancoffe.jpg');
    background-size: cover;
    background-position: center;
}

span {
    color: var(--main-magenta);
    font-weight: 700;
}
</style>