<template>
    <div>
        <label for="">
            <div class="check-icon"></div>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'Sucess'
    }
</script>

<style scoped>
    label {
        height: 65px;
        width: 65px;
        display: inline-block;
        background: #a0f4e0;
        border: 2px solid #c7f0e1;
        border-radius: 50%;
        animation: rotate 1s linear;
    }

    .check-icon {
        position: relative;
    }

    .check-icon::after {
        content: "";
        position: absolute;
        left: 30px;
        top: 25px;
        transform: translate(-50%, -50%) scaleX(-1) rotate(135deg);
        height: 28px;
        width: 14px;
        border-top: 4px solid #004c3a;
        border-right: 4px solid #004c3a;
    }

    @keyframes rotate {
        50% {
            border-left-color: #0a6e57;
            border-top-color: #3d9480;
        }

        75% {
            border-right-color: #08362c;
            border-bottom-color: #1fd4aa;
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>