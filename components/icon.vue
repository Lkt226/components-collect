<template>
    <i :class="`icon ${size} ${type} fa-${name}`"></i>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'fas'
        },
        size: {
            type: String,
            default: 'md'
        }
    },
}
</script>

<style lang="scss" scoped>
    .icon{
        &.lg{ @apply w-10 h-10; }
        &.md{ @apply w-5 h-5; }
        &.sm{ @apply w-4 h-4; }
    }
</style>