<template>
    <div id="body" v-if="id">
        <button class="go-back" @click="goHome()">Voltar ao inicio</button>
        <div>
            <component :is="id" class="grid-area"/>
        </div>
    </div>
    <h1 v-else>loading ...</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            id: this.$route.query.id as any
        }
    },
    methods:{
        goHome(){
            this.$router.push('/')
        }
    }
})
</script>

<style lang="scss" scoped>
    #body{
        @apply flex gap-8 p-12 min-h-100vh
                justify-center items-center;

        .grid-area{
            @apply bg-light-600 p-6 shadow-lg relative;
        }

        .go-back{
            @apply fixed top-4 left-4 bg-gray-200
                    p-3 mb-2 rounded-sm
                    font-bold font-mono text-center text-gray-500; 

            &:hover{
                @apply text-gray-200 bg-gray-500;
            }
        }
    }
</style>