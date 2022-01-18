<template>
    <component :is="type" class="bg-box">
        <slot/>
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'div'
        }
    },
})
</script>


<style>
    .bg-box{
        @apply bg-gray-200 rounded-lg
                p-4;
        box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.15),
                    -5px -5px 15px 0px rgba(255, 255, 255, 1),
                    -5px -5px 15px 0px rgba(255, 255, 255, 1),
                    inset 5px 5px 25px 0px rgba(0, 0, 0, 0.01),
                    inset -5px -5px 25px 0px rgba(255, 255, 255, 0.1);
    }
</style>