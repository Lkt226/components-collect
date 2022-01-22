<template>
    <section id="slide-components">
        <div id="grid">
            <grid-box v-for="(value, index) in items" :key="index" :index="value" :dinamic="false" :scripts="false"/>
        </div>
        <span id="select-area">
            <div v-for="(value, index) in selects" :key="index"
                :class="`component-select ${checkActive(index)}`"
                @click="selectSize(index)"/>
        </span>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        components: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            current: 0,
            size: 3
        }
    },
    methods: {
        selectSize(index){
            this.current = index;
        },
        checkActive(index){
            return index === this.current ? 'active' : '';
        },
        getSize(){
             this.size = window.innerWidth < 670 ? this.size = 1 : this.size = 3;
        }
    },
    computed: {
        items(){
            const value = this.current * this.size;
            return this.components.slice(value , value + this.size);
        },
        selects(){
            const size = Math.ceil(this.components.length / this.size)

            if(size > 5) return 5;
            
            return size;
        }
    },
    mounted(){
        this.getSize();
        window.addEventListener('resize', this.getSize);
    },
})
</script>

<style lang="scss" scoped>
#slide-components{
    @apply w-80vw h-min ml-auto mr-0 my-10;

    #grid{
        @apply grid grid-rows-1 grid-cols-3 gap-3 
                p-3 relative h-50vh;

        >*{ @apply shadow-none; }
    }

    #select-area{
        @apply flex items-center justify-center gap-2;
    
        .component-select{
            @apply bg-light-300 relative
                    w-6 h-6 rounded-full cursor-pointer
                    flex items-center justify-center;

            box-shadow: inset 1px 1px 3px 0 rgba(0,0,0,0.3),
                        inset -1px -1px 3px 0 rgba(255, 255, 255, 0.3);

            &::before{
                content: "";
                @apply absolute
                        w-3/5 h-3/5 rounded-full
                        bg-light-600;
                        
                box-shadow: 2px 2px 3px 0 rgba(0,0,0,0.3),
                            -2px -2px 3px 0 rgba(255, 255, 255, 0.3);
            }

            &.active{
                @apply w-8;

                &::before{
                    @apply bg-purple-400;
                    box-shadow: 2px 2px 6px 0 rgba(0,0,0,0.3),
                                -2px -2px 3px 0 rgba(255, 255, 255, 0.3);
                }
            }
        }
    }
    *{
        transition: all 0.3s ease;
    }
}


@media (max-width: 670px) {
    #slide-components{
        @apply w-90vw;

        #grid{
            @apply grid-cols-1;
        }
    }
}
</style>
