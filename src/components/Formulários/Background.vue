<template>
    <main>
        <div class="background"></div>
    </main>
</template>

<script>
    export default {
        name: 'Background'
    }
</script>

<style scoped>
    .background {
        height: 95vh;
        width: 30vw;
        background-image: url('@/assets/fernanda-background.jpg');
        background-position: center;
        background-size: cover;
    }
</style>