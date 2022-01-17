<template>
    <div class="select-icon">
        <span>
            <div :class="`box ${isActive(0)}`" @click="activeChange(0)">
                <icon type="fab" name="js" size="lg"/>
            </div>
            <div :class="`box ${isActive(1)}`" @click="activeChange(1)">
                <icon type="fab" name="java" size="lg"/>
            </div>
            <div :class="`box ${isActive(2)}`" @click="activeChange(2)">
                <icon type="fab" name="python" size="lg"/>
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
    .select-icon{
        span{
            @apply grid grid-cols-3 justify-items-center 
                    w-full p-2 bg-gray-200 rounded-md;

            .box{
                @apply p-2 mx-2 cursor-pointer;

                &:hover{
                    @apply bg-gray-100 rounded-md shadow-md;
                }

                &.active{
                    @apply bg-gray-100 rounded-md shadow-inner;
                    box-shadow: inset 2px 4px 3px rgba(0, 0, 0, 0.1),
                                inset -2px -4px 3px rgba(255, 255, 255, 0.4);
                }
            }
        }

        *{
            transition: all .3s ease;
        }
    }
</style>