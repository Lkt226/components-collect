<template>
    <div id="body">
        <MyAside/>
        <main>
            <box-info title="Exp" :items="[items[0]]"/>
            <box-info title="Prog" :items="[items[1]]"/>
            <box-info title="Skill" :items="[items[2]]"/>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            current: -1 as any,
            size: false as any,
            items: [
                {title: 'Title1', description: 'Text', start: '12/2020', end: '12/2022'},
                {title: 'Title2', lvl: 2},
                {title: 'Title3'},
            ]
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
        @apply flex bg-light-600;
        main{
            @apply pl-1 w-full gap-2 flex items-center justify-center;
        }
    }
</style>