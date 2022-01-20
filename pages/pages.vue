<template>
    <div id="body">
        <MyAside/>
        <main>
            <ul id="menu-pages">
                <item-pages v-for="(item, index) in size" :key="index" 
                    :index="index" :item="item" @prop ="(e)=> getInput(e)"/>
            </ul>
            <component :is="'p'+current" class="pages"/>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    async setup(){
        let size = [];
        let current = 0

        while (true) {
            try {
                const check = (await import(`../projects/pages/p${size.length}.vue`)).default
                size.push(check);
                console.log(check)

            } catch (error) {
                console.log('acabou em '+size.length)
                break;
            }
        }

        return {
            size,
            current
        }
    },
    methods: {
        getInput(e){
            console.log(e);
        }
    },
})
</script>


<style lang="scss" scoped>
    #body{
        @apply flex bg-light-600 h-100vh overflow-y-auto;
        main{
            @apply pl-1 w-full gap-2 grid grid-cols-3;

            .pages{
                @apply col-span-2;
            }
        }
    }

    @media (max-width: 900px){
         #body main{
             @apply grid-cols-1;
         }
    }

    @media (max-width: 670px){
         #body main{
             @apply mt-20;
         }
    }
</style>