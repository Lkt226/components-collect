<template>
    <section id="wireframe">
        <div id="banner">
            <div class="text-box">
                <h2>EDIFIER H840</h2>
                <p>Som puro, natural e real, com almofadas de alta qualidade, para você que tambem acredita que não se pode viver sem música.</p>
                <button>Ver produto</button>
            </div>
        </div>

        <div id="products">
            <div class="text">
                <h2>Um texto a respeito de fones</h2>
            </div>
            <div v-for="a in 3" :key="a" class="product">
                <div class="mockups"/>
                <span>
                    <h3>Item</h3>
                    <p>R$ 300,00</p>
                </span>
            </div> 
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'banner',
})
</script>

<style lang="scss" scoped>
    #wireframe{
        @apply flex flex-col gap-1 overflow-y-auto h-full;
        #banner{
            @apply flex flex-col items-start justify-center
                    bg-center bg-cover bg-no-repeat
                    text-white
                    w-full h-50vh pl-15;
            background-image: url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
            background-color: #FEC501;
            .text-box{
                @apply flex flex-col items-start w-2/6;
                h2{
                    @apply text-3xl text-center mb-2;
                }

                button{
                    @apply bg-blue-300 text-white font-bold
                            px-8 py-3 rounded-full mt-10;
                }
            }
        }
        #products{
            @apply grid grid-cols-4 gap-1 mx-1 relative items-center;

            .text{
                @apply text-center;
            }
            .product{
                @apply relative;
                span{
                    @apply flex justify-between absolute 
                            w-full bottom-0 left-0 px-2;
                }
            }
        }

        .mockups{
            @apply bg-gray-300 h-50;
        }
    }

    @media (max-width: 670px){
         #wireframe {
             #banner {
                 @apply p-5;
                 .text-box{
                    @apply w-1/1 m-auto text-shadow-sm text-light-100;
                }
             }

              #products{
                  @apply grid-cols-3;

                .product span{
                    @apply flex-col;
                }
                .product:last-of-type{
                    @apply hidden;
                }
              }
         }
    }
</style>