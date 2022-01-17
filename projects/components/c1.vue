<template>
    <div class="neumorphism" style="background-color: rgba(253, 230, 138)">
        <div> <h3>Avançar</h3> </div>
        <div> <h3>Voltar</h3> </div>
        <div> <h3>Saiba mais</h3> </div>
    </div>
</template>

<style lang="scss" scoped>
    .neumorphism{
        @apply gap-8 grid;

        div{
            @apply py-3 px-6 rounded-3xl max-h-15
                    font-sans font-bold text-center text-2xl;
            color: #f5da80;
            text-shadow: 1px 1px #f5ee9b, -1px -1px rgb(255, 226, 129);

            &:hover{
                @apply text-shadow-md;   
            }
        }

        //Efeito Claymorphism
        div{
            @apply bg-yellow-200
                    select-none cursor-pointer;

            box-shadow: 0px -4px 7px 0 rgb(254, 243, 199),
                        0px 4px 7px 0 rgba(107, 103, 103, 0.25);

        }

        //Transition
        *{
            transition: all 0.15s ease-in-out;
        }
    }
</style>