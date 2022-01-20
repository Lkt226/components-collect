<template>
    <div :class="`icon ${size}`"><i :class="`${type} fa-${name}`"></i></div>
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
        @apply flex;
        &.lg{ @apply w-10 h-10; }
        &.md{ @apply w-6.5 h-6.5; }
        &.sm{ @apply w-5 h-5; }

        >*{
            @apply w-full h-full;
        }
    }
</style>