<template>
    <li class="aside-item" v-if="paths.length > 1">
        <icon :name="icon"/>
        <ul :class="`integred-menu ${activeClass}`">
            <li v-for="(path, index) in paths" :key="index"
                @click="goTo(path.link)">{{path.title}}</li>
        </ul>
    </li>
    <li class="aside-item" v-else>
        <icon :name="icon" @click="goTo(paths[0].link)"/>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        icon: {
            type: String,
            default: 'home'
        },
        active: {
            type: Boolean,
            default: false
        },
        paths: {
            type: Array,
            default: () => [
                {
                    title: 'Home',
                    link: '/'
                }
            ]
        }
    },
    computed:{
        activeClass(){
            return this.active ? 'active' : ''
        }
    },
    methods:{
        goTo(link){
            this.$router.push(link)
        }
    }
})
</script>

<style lang="scss" scoped>
    .aside-item{
        @apply relative;
        .integred-menu{
            @apply absolute top-0 -left-200px 
                    w-auto h-auto p-2
                    bg-gray-200 font-bold text-gray-700
                    rounded-md 
                    shadow-lg;

            li{
                @apply cursor-pointer px-2 py-1;

                &:hover{
                    @apply bg-gray-100 rounded-md;
                }
            }

            &.active{
                @apply left-52px
            }
        }
        .icon{
            @apply cursor-pointer;
        }

        *{
            transition: all .1s ease;
        }
    }
</style>