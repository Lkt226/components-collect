<template>
    <div :class="`icon-table-3d ${actived}`">
        <div @click="activeChange()">
            <icon name="chess-knight" size="custom"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            actived: false
        }
    },
    methods: {
        activeChange() {
            this.actived === 'actived'? this.actived = '' : this.actived = 'actived'
        }
    },
})
</script>


<style lang="scss" scoped>
    .icon-table-3d{
        @apply flex flex-col justify-center items-center h-50;
        >div{
            @apply bg-red-200 rounded-lg m-4 relative cursor-pointer
                preserve-3d transform rotate-y-15 rotate-x-45 -rotate-z-45 -translate-z-0;
            >*{
                @apply m-8 w-20 h-20;
            }

            box-shadow: -5px 5px 0 0px rgb(253, 179, 179),
                        -10px 10px 0 0px rgb(248, 170, 170),
                        -15px 15px 0 0px rgb(252, 165, 165),
                        -35px -10px 20px 0px rgb(255, 255, 255,1),
                        10px 35px 50px 0px rgb(0,0,0,0.2),
                        inset 10px 10px 1000px 0px rgb(255, 255, 255,0.3),
                        inset -10px -10px 1000px 0px rgb(0,0,0,0.1);

            &:hover{
                @apply preserve-3d transform rotate-y-15 rotate-x-45 -rotate-z-45 translate-y-2;
                box-shadow: 0px 0px 0 0px rgb(253, 179, 179),
                        0px 0px 0 0px rgb(248, 170, 170),
                        -5px 5px 0 0px rgb(252, 165, 165),
                        -35px -10px 20px 0px rgb(255, 255, 255,1),
                        10px 35px 50px 0px rgb(0,0,0,0.2),
                        inset 10px 10px 1000px 0px rgb(255, 255, 255,0.3),
                        inset -10px -10px 1000px 0px rgb(0,0,0,0.1);
            }
        }
        &.actived{
            @apply text-white;
        }
        *{
            transition: all 0.3s ease, color 0s;
        }
    }
</style>