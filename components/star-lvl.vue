<template>
    <span>
        <icon name="star" size="sm" v-for="i in value" :key="i"/>
        <icon name="star" type="far" size="sm" v-for="i in extra" :key="i"/>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            extra: 4 - this.value,
        }
    },
})
</script>
