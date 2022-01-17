<template>
    <div class="select-icon-rounded">
        <span>
            <div :class="`box ${isActive(0)}`" @click="activeChange(0)">
                <div class="ico"><icon type="fab" name="js" size="md"/></div>
                <h3>Javascript</h3>
            </div>
            <div :class="`box ${isActive(1)}`" @click="activeChange(1)">
                <div class="ico"><icon type="fab" name="java" size="md"/></div>
                <h3>Java</h3>
            </div>
            <div :class="`box ${isActive(2)}`" @click="activeChange(2)">
                <div class="ico"><icon type="fab" name="python" size="md"/></div>
                <h3>Python</h3>
            </div>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            active: 0
        }
    },
    methods: {
        isActive(id) {
            return this.active === id ? 'active' : ''
        },
        activeChange(id) {
            this.active = id
        }
    },
})
</script>

<style lang="scss" scoped>
    .select-icon-rounded{
        @apply flex justify-center items-center;
        span{
            @apply p-4;

            .box{
                @apply cursor-pointer mb-2 p-2
                    rounded-md relative
                    flex items-center justify-start
                    bg-gray-200 shadow-sm;

                h3{
                    @apply ml-4 font-bold;
                }
                .ico{
                    @apply relative
                        w-auto h-10 left-0 p-2
                        flex items-center justify-center
                        rounded-full;
                }
                 &.active{
                     &::before{
                         content: '';
                         @apply absolute left-0 top-0
                                w-1/5 h-full
                                bg-light-600 ;
                     }
                    .ico{
                        @apply w-10 bg-blue-300 text-white;
                        box-shadow: 0px 0px 0px 5px rgb(147, 197, 253),
                                    0px 0px 0px 9px rgb(241, 243, 245);

                        &::before, &::after{
                            content: '';
                            @apply absolute w-1/4 h-1/4 rounded-full
                                bg-gray-200;
                        }
                        &::before{ 
                            @apply -right-1/4 -top-1/5; 
                            box-shadow: -9px -5px 0px 2px rgb(241, 243, 245);
                        }
                        &::after{ 
                            @apply -right-1/4 -bottom-1/5; 
                            box-shadow: -9px 5px 0px 2px rgb(241, 243, 245);
                        }
                    }
                }
            }
        }
        *{
            transition: all .3s ease;
        }
    }
</style>