<template>
    <div class="glassmorphism" style="background-color: rgba(90, 25, 188)">
        <div class="text">
            Glassmorphism é um efeito que feito para parecer com vidro como o nome sugere.
        </div>
        <button @click="click()">
            Saiba mais
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods:{
        click(){
            window.open('https://hype4.academy/articles/design/glassmorphism-in-user-interfaces', '_blank')
        }
    }
})
</script>


<style lang="scss">
    .glassmorphism{
        @apply flex bg-contain bg-no-repeat;
        background-image: url(https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80) !important;

        .text{
            @apply max-w-55 p-8 rounded-l-2xl
                    border border-r-0 border-gray-50 border-opacity-40    
                    bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-sm
                    font-bold text-gray-900;
        }
        
        button{
            @apply w-min p-4 rounded-r-2xl
                    bg-blue-400 bg-opacity-80 backdrop-filter backdrop-blur-sm
                    font-bold text-gray-700;
        }
    }
</style>