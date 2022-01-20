<template>
    <bg-box type="section" class="noum-box" v-if="item.description">
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>
    </bg-box>

    <bg-box type="section" class="noum-box" v-else>
        <h3>{{item.title}}</h3>
        <span v-for="(sub_item, index) in item.list" :key="index">
            <h4>{{sub_item.title}}:</h4>
            <p>{{sub_item.value}}</p>
        </span>
    </bg-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true
        }
    },
})
</script>

<style lang="scss" scoped>
    .noum-box{
        @apply flex flex-col items-start justify-evenly;
        h4{ @apply text-sm;}
    }
</style>