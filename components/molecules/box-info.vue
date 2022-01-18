<template>
    <section class="box-info">
        <h3>{{title}}</h3>
        <span v-for="(item, index) in items" :key="index" class="list">
            <div class="text">
                <h4 v-if="!item.start">{{item.title}}</h4>
                <h4 v-else>{{item.title}} - <u>{{item.start}} até {{item.end}}</u></h4>

                <p v-if="item.description">{{item.description}}</p>
            </div>

            <div class="star">
                <star-lvl v-if="item.lvl" :value="item.lvl"/>
            </div>
        </span>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        items: {
            type: Array,
            default: ()=>[
                {title: 'Title', description: 'Text', lvl: 2, start: '12/2020', end: '12/2022'},
            ]
        },
        star: {
            type: Boolean,
            default: false
        },
        description: {
            type: Boolean,
            default: false
        }
    }
})
</script>


<style lang="scss" scoped>
    .box-info{
        @apply flex flex-col;

        >h3{
            @apply w-full border-b border-t border-light-800 mb-1vw;
        }

        .list{
            @apply flex justify-between;
        } 
        .list:not(:last-child) .text{
            p{
                @apply mb-10;
            }
        }
    }
</style>