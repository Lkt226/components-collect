<template>
    <div class="input">
        <label :for="id">{{title}}:</label>

        <textarea cols="30" rows="5" v-if="type === 'textarea'"
                :name="id" id="id" :placeholder="title"/>

        <input :type="type" :name="id" :id="id" :placeholder="title" v-else>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
    },
})
</script>

<style lang="scss">
    .input{
        @apply w-full rounded-lg mb-2;

        >input, >textarea{
            @apply p-2 w-full bg-light-600 rounded-lg;

            box-shadow:  inset 5px 5px 10px 0px rgba(0, 0, 0, 0.15),
                        inset -5px -5px 10px 0px rgba(255, 255, 255, 0.3);
        }
    }
</style>