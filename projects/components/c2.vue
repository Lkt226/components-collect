<template>
    <div class="hover-effects">
        <button class="b1"> Passe o mause </button>
        <button class="b2"> Passe o mause </button>
        <button class="b3"> Passe o mause </button>
        <button class="b4"> Passe o mause </button>
    </div>
</template>

<style lang="scss" scoped>
    .hover-effects{
        @apply grid gap-2;

        button{
            @apply bg-gray-50
                    py-4 px-8 h-15 rounded-sm
                    flex justify-center items-center
                    font-light text-2xl
                    relative overflow-hidden;

            &::after{
                content: 'Retire o mouse';
                @apply bg-gray-600 text-gray-50
                        flex items-center justify-center
                        absolute w-full h-full top-0 left-0;
                 transition: all 0.5s ease-in-out;
            }
        }

        //Hover
        .b1{
            &::after{ @apply opacity-0; }
            &:hover::after{ @apply opacity-100; }
        }
        .b2{
            &::after{ @apply -left-100; }
            &:hover::after{ @apply left-0; }
        }
        .b3{
            &::after{ @apply opacity-0; }
            &:hover::after{ @apply opacity-100; }
            &:hover{ @apply transform scale-110; }
        }
        .b4{
            &::after{ @apply -top-20; }
            &:hover::after{ @apply top-0; }
        }


        *{
            transition: all 0.5s ease-in-out;
        }
    }
</style>