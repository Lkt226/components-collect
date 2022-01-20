<template>
    <div id="body">
        <MyAside/>
        <main id="page">
            <h1>Obrigado por entrar em contato!</h1>
            <h4>Sua mensagem foi enviada para meu e-mail, entrarei em contato o mais breve possivel.</h4>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>

<style lang="scss" scoped>
    #body{
        @apply flex bg-light-700;
        
        main{
            @apply flex flex-col items-center justify-center gap-10
                     overflow-hidden h-100vh max-w-100 m-auto text-center;

            >h1{
                @apply text-4xl;
            }
            >h4{
                @apply row-span-2
            }
        }
    }
</style>