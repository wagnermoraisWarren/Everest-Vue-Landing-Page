<template>
    <footer>
        <div class="footer-box">
            <h3>Sobre</h3>
            <ul>
                <li>
                    <a href="https://warren.com.br/sobre/" target="_blank">Sobre a Warren</a>
                </li>
                <li>
                    <a href="https://warren.com.br/quanto-custa/" target="_blank">Quanto Custa</a>
                </li>
                <li>
                    <a href="https://warren.com.br/magazine/" target="_blank">Warren Magazine</a>
                </li>
                <li>
                    <a href="https://shop.warren.com.br/" target="_blank">Warren Shop</a>
                </li>
                <li>
                    <a href="https://lp.warren.com.br/convide-amigos-e-ganhe-premios" target="_blank">Programa de Indicações</a>
                </li>
                <li>
                    <a href="https://carreiras.warren.com.br/?_gl=1*1ulvhc4*_ga*MTg1MTIzMDg4OC4xNjY5ODM1OTE0*_ga_DJ7ETNN20S*MTY3MDQzMTkyNi4yLjEuMTY3MDQzMjM4My40Mi4wLjA.&_ga=2.57930921.201949527.1670431927-1851230888.1669835914" target="_blank">Trabalhe Conosco</a>
                </li>
            </ul>
        </div>
        <div class="footer-box">
            <h3>Investir</h3>
                <li>
                    <a href="https://warren.com.br/app/#/signup" target="_blank">Abra sua Conta</a>
                </li>
                <li>
                    <a href="https://warren.com.br/app/#/signup" target="_blank">Planejamento de Vida</a>
                </li>
                <li>
                    <a href="https://warren.com.br/app/#/signup" target="_blank">Produtos de Investimento</a>
                </li>
                <li>
                    <a href="https://warren.com.br/carteiras/"  target="_blank">Carteira</a>
                </li>
                <li>
                    <a href="https://warren.com.br/bolsa/" target="_blank">Bolsa</a>
                </li>
                <li>
                    <a href="https://warren.com.br/magazine/categoria/a-warren/warren-pro/" target="_blank">Warren Pro</a>
                </li>
            </ul>
        </div>
        <div class="footer-box">
            <h3>Aprender</h3>
            <ul>
                <li>
                    <a href="https://educacao.warren.com.br/" target="_blank">Warren Edu</a>
                </li>
                <li>
                    <a href="https://warren.com.br/magazine/perfil-de-investidor/" target="_blank">Perfil de Investidor</a>
                </li>
                <li>
                    <a href="https://warren.com.br/magazine/warren-edu/" target="_blank">Warren Desenrola</a>
                </li>
                <li>
                    <a href="https://faq.warren.com.br/hc/pt-br/articles/360003347314-Resgate-passo-a-passo-" target="_blank">Passo a Passo</a>
                </li>
                <li>
                    <a href="https://warren.com.br/magazine/categoria/insights-de-mercado/mercado-de-a-a-z/" target="_blank">Insights</a>
                </li>
                <li>
                    <a href="https://warren.com.br/magazine/jornada-da-warren-capitulo-11/" target="_blank">Jornada</a>
                    </li>
            </ul>
        </div>
        <div class="footer-box">
            <h3>Fale Conosco</h3>
            <ul>
                <li>
                    <a href="https://faq.warren.com.br/hc/pt-br" target="_blank">Dúvidas</a>
                </li>
                <li>
                    <a href="mailto:ouvidoria@warren.com.br" target="_blank">Ajuda</a>
                </li>
                <li>
                    <a href="mailto:meajuda@warren.com.br" target="_blank">Acesse o chat</a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=555140420024" target="_blank">Acesse o WhatsApp</a>
                </li>
                <li>
                    <a href="mailto:ouvidoria@warren.com.br" target="_blank">Ouvidoria</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1VSf247AGCJKzsHL05s4qmvedyF4nfLyq/view" target="_blank">Transparência</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background: var(--main-white);
}

.footer-box {
    width: 21%;
}

h3 {
    font-size: 1.65rem;
    color: rgba(0, 0, 0, 0.8);
    margin: 1rem 0;
}

a {
    font-size: 1.1rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);
    transition: 200ms;
}

a:hover {
    color: var(--main-dark);
    letter-spacing: 1px;
    transition: 200ms;
}

li {
    margin: .50rem 0;
}
</style>