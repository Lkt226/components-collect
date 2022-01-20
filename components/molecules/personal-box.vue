<template>
    <bg-box type="section" id="personal">
        <div id="information">
            <img :src="personal.img" alt="Victor Hugo Desenvolvedor FrontEnd">
            <h2>{{personal.name}}</h2>
            <h3>{{personal.locale}}</h3>
        </div>
        <div id="social-medias">
            <bg-box type="a" v-for="(item, index) in social_medias" :key="index"
                class="box" :href="item.link" >
                <icon type="fab" :name="item.icon" size="sm"/>
            </bg-box>
        </div>
    </bg-box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        personal: {
            type: Object,
            required: true
        },
        social_medias: {
            type: Array,
            required: true
        }
    },
})
</script>

<style lang="scss" scoped>
    #personal{
        @apply  p-4 flex flex-row justify-between items-center;

        #information{
            @apply h-60 flex flex-col items-center justify-center;

            img{
                @apply h-3/5 rounded-full;
            }
        }
        #social-medias{
            @apply flex flex-col gap-4;

            >*{ @apply rounded-full; }
        }
    }

    @media (max-width: 900px){
         #personal{
            @apply flex-col;
            
            #social-medias{
                @apply flex-row gap-4;
            }
        }
    }

    @media (max-width: 670px){
        #personal{
            @apply  w-full;
        }
    }
</style>
