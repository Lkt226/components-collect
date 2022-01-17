<template>
  <div id="body">
    <Aside/>
    <main>
        <grid-box v-for="(value, index) in size" :key="index" :index="index"/>
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
    }
})
</script>



<style lang="scss" scoped>
  #body{
    @apply flex bg-light-700;
    main{
      @apply grid grid-cols-3 grid-flow-row-dense
              gap-3 p-3 w-full;

      grid-auto-columns: 10vw;
      grid-auto-rows: 10vw;
    }
  }
</style>