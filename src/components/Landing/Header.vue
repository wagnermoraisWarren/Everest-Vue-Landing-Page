<template>
    <header>
        <button class="logo">
            <a href="https://warren.com.br" target="_blank">
                <img src="https://warren.com.br/_nuxt/img/warren-logo-investimentos.462794d.svg" alt="Logo Warren">
            </a>
        </button>
        <nav id="nav">
            <ul>
                <li
                    v-for="item in items">
                    <a :href="item.url"
                       v-if="!item.children"
                       target="_blank">
                        {{ item.name }}
                    </a>
                    <span
                        v-else
                        v-on:mouseover="mouseover"
                        v-on:mouseleave="mouseleave">
                        {{ item.name }}
                        
                        <ul class=" dropdown"
                           :class="{ isOpen }">
                            <li
                                v-for="child in item.children">
                                <a :href="child.url" target="_blank">
                                    {{ child.name }}
                                </a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </nav>
        <router-link to="/register">
            <button class="register">
                Abra sua Conta
            </button>
        </router-link>
    </header>
</template>

<script>
    import BotaoPreto from './BotaoPreto.vue';
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
                            url: 'https://warren.com.br/home-broker/',
                            name: 'Investir',
                            children: [
                                {
                                    url: 'https://warren.com.br/carteiras/',
                                    name: 'Carteiras'
                                }
                            ]
                        },

                        {
                            url: 'https://warren.com.br/magazine/warren-edu/',
                            name: 'Aprender'
                        },

                        {
                            url: 'https://warren.com.br/magazine/',
                            name: 'Magazine'
                        },

                        {
                            url: 'https://warren.com.br/sobre/',
                            name: 'Sobre'
                        },
                    ]
            }
        },

        methods: {
            mouseover: function () {
                this.isOpen = true;
            },
            mouseleave: function () {
                this.isOpen = false;
            }
        },

        components: {
            BotaoPreto
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        padding: 2rem 1rem;
        background: var(--main-white);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }

    #nav > ul {
        display: flex;
        align-items: center;
        gap: 6rem;
    }

    #nav > ul > li > a {
        font-size: 1.1rem;
        font-weight: 500;
        padding: 1rem;
        color: var(--main-dark);
        border: none;
        border-radius: 5px;
        transition: 200ms;
    }

    #nav a:hover {
        background: #e3d6d5;
        transition: 200ms;
    }

    #nav > ul > li > span {
        position: relative;
        display: block;
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--main-dark);
        border: none;
        border-radius: 5px;
        transition: 200ms;
    }

    #nav span:hover {
        background: #e3d6d5;
        transition: 200ms;
    }

    #nav > ul > li > span:after {
        content: '▼';
        display: inline-block;
    }

    .dropdown {
        position: absolute;
        padding: .50rem 1rem;
        margin: .15rem 0;
        top: 100%;
        left: 0;
        display: none;
        background-color: #dfe6e9;
        border-radius: 6px;
    }

    .dropdown li a {
        display: block;
        padding: .80rem;
        color: rgb(25, 4, 4);
    }

    .isOpen {
        display: block;
    }

    .register  {
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 700;
        color: var(--main-white);
        background: var(--main-dark);
        border: none;
        border-radius: 8px;
        transition: 200ms;
        cursor: pointer;
    }
    
    .register:hover {
        background: var(--main-magenta);
        padding: 1rem 3rem;
        transition: 200ms;
    }

    .logo {
        background: transparent;
        border: none;
    }
</style>