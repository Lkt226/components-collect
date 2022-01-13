<template>
    <div id="body" v-if="id">
        <button class="go-back" @click="goHome()">Voltar ao inicio</button>
        <div>
            <component :is="id" class="grid-area"/>
        </div>
        <button class="c-info" @click="goToCode(id)" :style="`--i: ${id.replace('c', '')};`">Ver o codigo</button>
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
        },
        goToCode(id){
            window.open(`https://github.com/Lkt226/components/blob/master/projects/${id}.vue`, '_blank')
        }
    }
})
</script>

<style lang="scss" scoped>
    #body{
        @apply flex flex-col gap-8 p-12 min-h-100vh
                justify-center items-center;

        .grid-area{
            @apply bg-light-600 p-6 shadow-lg relative;
        }
        .go-back{
            @apply fixed top-4 left-4;
        }

        .c-info{
            &::before{
                counter-reset: i var(--i);
                content: 'id:c'counter(i);
                @apply pr-4;
            }
        }

        button{
            @apply  bg-gray-200
                    p-3 mb-2 rounded-sm
                    font-bold font-mono text-center text-gray-500; 

            &:hover{
                @apply text-gray-200 bg-gray-500;
            }
        }
    }
</style>