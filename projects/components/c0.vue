<template>
    <div class="claymorphism" style="background-color: rgb(191, 219, 254)">
        <div class="clay">
            <p class="text">Este efeito se chama claymorphism, é uma forma meio cartunizada de criar volume, com bordas arredondas em uma simulação de 3D.</p>
            <button class="clay buttom" @click="click()"><h3>Saiba mais</h3></button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        click(){
            window.open('https://hype4.academy/articles/design/claymorphism-in-user-interfaces', '_blank')
        }
    }
}
</script>

<style lang="scss" scoped>
    .claymorphism{
        @apply grid gap-2 min-w-70 max-w-75;

        .clay{
            @apply bg-gray-200
                    py-4 px-8 rounded-1/6;

            box-shadow: inset 8px 8px 16px 0 rgb(243, 244, 246),
                        inset -8px -8px 16px 0 rgb(209, 213, 219, 0.7),
                        1px 10px 20px 0 rgba(107, 103, 103, 0.25);
        }
        .buttom{
            @apply  font-sans font-bold text-1xl text-center text-gray-700
                    text-shadow rounded-3xl w-full mt-6 mb-2 bg-blue-200
                    select-none cursor-pointer;

            box-shadow: inset 8px 8px 16px 0 rgb(219, 234, 254),
                        inset -8px -8px 16px 0 rgb(147, 197, 253, 0.7),
                        1px 10px 20px 0 rgba(107, 103, 103, 0.25);

            &:hover{
                @apply text-shadow-md underline; 
            }
        }
        .text{
            @apply font-bold text-gray-700;
        }

        //Transition
        *{
            transition: all 0.15s ease-in-out;
        }
    }
</style>