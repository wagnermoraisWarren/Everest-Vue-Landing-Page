<template>
    <header>
        <h1>Formulário</h1>
        <button>
            <img src="@/assets/arrow-left.svg" alt="Flecha Voltar">
        </button>
    </header>
</template>

<script>
    export default {
        name: 'HeaderForm'
    }
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--main-magenta);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: var(--main-white);
        font-size: 1rem;
        text-transform: uppercase;
        transition: 200ms;
    }

    h1:hover {
        letter-spacing: 1px;
    }

    button {
        position: absolute;
        left: 1rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    img {
        width: 2rem;
    }

    img:hover {
        width: 2.2rem;
        transition: 200ms;
    }
</style>