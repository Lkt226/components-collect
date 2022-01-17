<template>
    <aside>
        <ul id="aside">
            <aside-item icon="home" @click="toggle(1)" :active="checkActive(1)" :paths="[home]"/>
            <aside-item icon="tablet-alt" @click="toggle(2)" :active="checkActive(2)" :paths="[pages]" v-if="false"/>
            <aside-item icon="user" @click="toggle(3)" :active="checkActive(3)" :paths="[about]" v-if="false"/>
        </ul>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            current: 0,
            home: {
                title: 'Home',
                link: '/'
            },
            pages: {
                title: 'Paginas',
                link: '/pages'
            },
            about: {
                title: 'Sobre',
                link: '/about'
            }
        }
    },
    methods: {
        toggle(id) {
            this.current = this.current === id ? 0 : id
        },
        checkActive(id) {
            return this.current === id ? true : false
        }
    }
})
</script>


<style lang="scss" scoped>
    aside{
        @apply z-999 sticky top-2 m-2 text-gray-600
                bg-gray-200 rounded-lg;
        height: calc(100vh - 1rem);
        box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.15),
                    -5px -5px 15px 0px rgba(255, 255, 255, 1),
                    -5px -5px 15px 0px rgba(255, 255, 255, 1),
                    inset 5px 5px 25px 0px rgba(0, 0, 0, 0.1),
                    inset -5px -5px 25px 0px rgba(255, 255, 255, 0.5);

        #aside{
            @apply  sticky top-2 left-0 
                    flex flex-col gap-4 items-center
                    p-2 w-10;
        }
    }
</style>