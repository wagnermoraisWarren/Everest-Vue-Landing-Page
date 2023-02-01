<template>
    <header>
        <img src="https://warren.com.br/_nuxt/img/warren-logo-investimentos.462794d.svg" alt="Logo Warren">
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
        <button>
            <a href="https://warren.com.br/app/#/signup" target="_blank">
                Abra sua Conta
            </a>
        </button>
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

    button {
        padding: 1rem 2rem;
        width: 13rem;
        background: var(--main-dark);
        border: none;
        border-radius: 8px;
        transition: 200ms;
    }

    button a {
        color: var(--main-white);
        font-size: 1rem;
        font-weight: 700;
    }

    button:hover {
        background: var(--main-magenta);
        width: 14rem;
        transition: 200ms;
    }
</style>