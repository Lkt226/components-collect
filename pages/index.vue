<template>
  <div id="body">
      <div v-for="(value, index) in size" :key="index" :style="`--i: ${index};`">
        <button class="c-info" @click="goToCode(index)">Ver o codigo</button>
        <component :is="'c'+index" class="grid-area"/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed:{
        component_controller(){
            return ['c0', 'c1']
        }
    },
    data(){
        return {
            size: false as any
        }
    },
    async beforeCreate(){
        let counter = 0;

        while (true) {
            try {
                const check = (await import(`../projects/c${counter}.vue`))
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
            window.open(`https://github.com/Lkt226/components/blob/master/projects/c${id}.vue`, '_blank')
        }
    }
})
</script>



<style lang="scss" scoped>
  #body{
    @apply grid grid-flow-col-dense 
            auto-cols-max auto-rows-min
            gap-2 p-12;

    .grid-area{
      @apply bg-light-600 p-6 shadow-lg relative;
    }

    .c-info{
      @apply relative bg-gray-200
              p-3 mb-2 rounded-sm
              font-bold font-mono text-center text-gray-500; 

      &:hover{
        @apply text-gray-200 bg-gray-500;
      }

      &::before{
        counter-reset: i var(--i);
        content: 'id:c'counter(i);
        @apply pr-4;
      }
    }
  }
</style>