<template>
    <div>
        <button>
            <a :href="{link}" target="_blank">
                {{ mensagem }}
            </a>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'BotaoVermelho',

        props: {
            mensagem: String,
            link: String
        }
    }
</script>

<style scoped>
    button {
        padding: 1rem;
        width: 30%;
        border: none;
        background-color: var(--main-magenta);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, .6);
        border: none;
        border-radius: 5px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transition: 200ms;
    }

    button:hover {
        background: #c80c3b;
        transition: 200ms;
    }

    a {
        color: var(--main-white);
    }
</style>