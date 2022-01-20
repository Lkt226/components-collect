<template>
    <bg-box type="li" class="item-classes">
        <span class="title">
            <h4>{{`p${index} - ${item.name}`}}</h4>
            <icon name="chevron-right"/>
        </span>
    </bg-box>
</template>

<script lang="ts">  
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        index: {
            type: Number,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },
    },
})
</script>

<style lang="scss" scoped>
    .item-classes{
        @apply cursor-pointer;
        .title{
            @apply flex justify-between;
        }

    }
</style>