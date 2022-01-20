<template>
    <div id="body">
        <MyAside/>
        <main id="page">
            <h1>Oops!! Ocorreu um erro</h1>
            <h4>Aparentemente estamos com um problema no momento, tente mais tarde, assim que possivel o problema deve ser solucionado.</h4>
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