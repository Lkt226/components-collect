<template>
    <bg-box type="aside" id="aside" :class="menu">
        <icon name="ellipsis-h" id="menu-button" @click="toggleMenu()"/>      
        <ul id="aside-ul">
            <aside-item icon="home" @click="toggle(1)" :active="checkActive(1)" :paths="[home]"/>
            <aside-item icon="tablet-alt" @click="toggle(2)" :active="checkActive(2)" :paths="[pages]" v-if="false"/>
            <aside-item icon="user" @click="toggle(3)" :active="checkActive(3)" :paths="[about]"/>
        </ul>  
    </bg-box>
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
                link: '/sobre'
            },
            menu: 'desactived'
        }
    },
    methods: {
        toggle(id) {
            this.current = this.current === id ? 0 : id
        },
        checkActive(id) {
            return this.current === id ? true : false
        },
        toggleMenu() {
            this.menu === 'desactived' ? this.menu = 'actived' : this.menu = 'desactived'
        }
    }
})
</script>


<style lang="scss" scoped>
    #aside{
        @apply z-999 sticky top-2 p-2 m-2 text-gray-600
                flex flex-col items-center;
        height: calc(100vh - 1rem);

        #aside-ul{
            @apply  sticky top-2 left-0 
                    flex flex-col gap-4 items-center
                    p-2 w-10;
        }
        #menu-button{
            @apply hidden;
        }

    }
    @media (max-width: 670px){
        #aside{
            @apply absolute h-min;

            *{
                transition: all .15s ease-in-out;
            }

            #menu-button{
                @apply block;
            }
        }

        #aside.desactived{
            @apply rounded-full;

            #aside-ul{
                @apply relative -left-15 h-0
                        p-0;
            }
            #menu-button{
                @apply w-full z-999 my-2;
            }
        }
        #aside.actived{
            @apply rounded-full;

            #aside-ul{
                @apply relative -left-0 h-25;
            }
            #menu-button{
                @apply w-full z-999;
            }
        }
    }
</style>