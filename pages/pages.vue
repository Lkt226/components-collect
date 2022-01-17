<template>
    <div id="body">
        <Aside/>
        <main>
            <section class="list-side">
                <ul>
                    <li v-for="(value, index) in size" :key="index" 
                        class="list-item" @click="setPage(index)">p{{index}}: {{value}}</li>
                </ul>
            </section>
            <section class="page-side">
                <component :is="'p'+current" class="grid-area"/>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            current: -1 as any,
            size: false as any
        }
    },
    methods:{
        setPage(id){
            this.current = id;
        }
    },
    async beforeCreate(){
        let counter = [];

        while (true) {
            try {
                const check = (await import(`../projects/pages/p${counter.length}.vue`))
                counter.push(check.default.name);  

            } catch (error) {
                console.log('acabou em '+counter.length)
                break;
            }
        }

        this.size = counter;
    },
})
</script>


<style lang="scss" scoped>
    #body{
        @apply flex;
        main{
            @apply pl-1 w-full gap-2 flex;

            .list-side{
                @apply p-2;
                .list-item{
                    @apply bg-gray-200 p-3 mb-2 w-60
                            rounded-sm
                            cursor-pointer;
                }
            }
            .page-side{
                @apply w-full flex justify-center;
            }
        }
    }
</style>