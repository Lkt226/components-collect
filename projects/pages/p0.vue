<template>
    <div id="p-body">
        <label for="username">Nome de usuario:</label>
        <input type="text" name="username" id="username">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'p-body',
})
</script>
