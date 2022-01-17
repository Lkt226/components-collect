<template>
    <div class="gloss-button">
        <button @click="goToGit()" class="b1">
            <icon name="github" type="fab" size="sm"/>
            Passe o mouse
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
    .gloss-button{

        button{
            @apply bg-gray-100 text-gray-700 font-bold
                    py-4 px-6 w-full relative
                    flex items-center justify-center
                    border-1 border-blue-300;

            .icon{
                @apply mr-2;
            }

            &:hover{
                @apply bg-blue-300 text-gray-200 border-transparent;
                box-shadow: 0px 0px 5px rgba(147, 197, 253),
                            0px 0px 15px rgba(147, 197, 253),
                            0px 0px 25px rgba(147, 197, 253),
                            0px 0px 50px rgba(147, 197, 253);
            }
        }

        *{
            transition: all .3s ease-in-out;
        }
    }
</style>