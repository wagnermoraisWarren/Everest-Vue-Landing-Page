<template>
    <header>
        <img src="https://warren.com.br/_nuxt/img/warren-logo-investimentos.462794d.svg" alt="Logo Warren">
        <nav>
            <ul>
                <li v-for="item in items">
                    <a :href="item.url" v-if="!item.children" target="_blank">
                        {{ item.name }}
                    </a>
                    <!-- <span 
                        v-else
                        :on-mouseover="mouseover"
                        :on-mouseleave="mouseleave">
                        {{ item.name }}

                        <ul class="dropdown" :class="{ isOpen }">
                            <li v-for="child in item.children">
                                <a  :href="child.url">
                                    {{ child.name }}
                                </a>
                            </li>
                        </ul>
                    </span> -->
                </li>
            </ul>
        </nav>
        <button>
            <a href="">Abra sua Conta</a>
        </button>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        
        data() {
            return {
                isOpen: false,
                items: [
                    {
                        url: 'https://warren.com.br/quanto-custa/',
                        name: 'Quanto Custa'
                    },

                    {
                        url: 'https://warren.com.br/quanto-custa/',
                        name: 'Investir'
                    },

                    {
                        url: 'https://warren.com.br/quanto-custa/',
                        name: 'Carteiras'
                    },

                    {
                        url: 'https://warren.com.br/quanto-custa/',
                        name: 'Aprender'
                    },

                    {
                        url: 'https://warren.com.br/quanto-custa/',
                        name: 'Magazine'
                    },

                    {
                        url: 'https://warren.com.br/quanto-custa/',
                        name: 'Sobre'
                    },
                ]
            };
        },
    };
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2rem 1rem;
        background: var(--main-white);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }

    ul {
        display: flex;
        align-items: center;
        gap: 5rem;
    }

    li a {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--main-magenta);
        transition: 200ms;
    }

    li a:hover {
        color: #6c0b23;
        transition: 200ms;
    }

    button {
        background: var(--main-dark);
        padding: 1rem;
        border: none;
        border-radius: 5px;
    }

    button:hover {
        background: linear-gradient(77deg, #2d2121, #412828);
    }

    button a {
        color: var(--main-white);
        font-size: 1rem;
        font-weight: 700;
    }
</style>