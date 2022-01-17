<template>
  <div id="body">
    <Aside/>
    <main>
        <div class="grid-box" v-for="(value, index) in size" :key="index">
          <button class="up-box c-info" @click="goToCode(index)">Ver o codigo</button>
          <component :is="'c'+index" class="grid-area"/>
          <div class="up-box id"> c{{index}} </div>
        </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            size: false as any
        }
    },
    async beforeCreate(){
        let counter = 0;

        while (true) {
            try {
                const check = (await import(`../projects/components/c${counter}.vue`))
                counter++;  

            } catch (error) {
                console.log('acabou em '+counter)
                break;
            }
        }

        this.size = counter;
    },
    methods:{
        goToCode(id){
            window.open(`https://github.com/Lkt226/components/blob/master/projects/components/c${id}.vue`, '_blank')
        }
    }
})
</script>



<style lang="scss" scoped>
  #body{
    @apply flex bg-light-700;
    main{
      @apply flex flex-wrap gap-4 p-4;

      .grid-box{
        @apply relative overflow-hidden h-min
                shadow-lg rounded-lg;

        &:hover {
          .c-info{
            @apply opacity-100 left-0;
          }
          .id{
            @apply opacity-100 right-0;
          }
        }

        *{
          transition: all .3s ease;
        }
      }
      .grid-area{
        @apply bg-light-600 p-6 relative;
      }

      .up-box{
         @apply bg-gray-200
                shadow-md
                font-bold font-mono text-center text-gray-500
                absolute z-50
                opacity-0;

          &.id{
            @apply -top-0 -right-100 select-none py-1 px-2 mb-2;
          }

          &.c-info{
            @apply  -top-8 -left-100 p-3 mb-2; 

            &:hover{
              @apply text-gray-200 bg-gray-500 top-0;
            }
          }
      }
    }
  }
</style>