<template>
    <div class="cartoonized">
        <button @click="goToGit()" class="b1">
            <icon name="github" type="fab"/>
            Github
        </button>
        <button @click="goToLinkedin()" class="b1">
            <icon name="linkedin" type="fab"/>
            Linkedin
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        goToGit(){
            window.open('https://github.com/Lkt226', '_blank')
        },
        goToLinkedin(){
            window.open('https://www.linkedin.com/in/victorhdsp/', '_blank')
        }

    }
})
</script>


<style lang="scss" scoped>
    .cartoonized{

        button{
            @apply bg-gray-100 text-gray-700 font-bold
                    py-4 px-6 w-full mb-4
                    flex items-center justify-center
                    border-3 rounded-lg border-gray-500;
            box-shadow: 0px 5px 0px rgb(107, 114, 128);

            .icon{
                @apply mr-2;
            }

            &:hover{
                @apply bg-gray-200;
                box-shadow: 0px 2px 0px rgb(107, 114, 128);
            }
        }

        *{
            transition: all .3s ease-in-out;
        }
    }
</style>