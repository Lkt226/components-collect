<template>
  <div id="body">
    <MyAside/>
    <main>
        <ClientOnly>
            <grid-box v-for="(value, index) in size" :key="index" :index="value"/>
        </ClientOnly>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    async setup(){
        let size = [];

        while (true) {
            try {
                const check = (await import(`../projects/components/c${size.length}.vue`))
                size.push(size.length);  

            } catch (error) {
                console.log('acabou em '+size.length)
                break;
            }
        }

        size = size.reverse()

        return {
            size
        }
    }
})
</script>



<style lang="scss" scoped>
  #body{
    @apply flex bg-light-700;
    main{
      @apply grid grid-cols-3 grid-flow-row-dense
              gap-3 p-3 w-full;

      grid-auto-columns: 5vw;
      grid-auto-rows: 5vw;
    }

    @media (max-width: 900px) {
      main{
        @apply flex flex-wrap justify-center;
      }
    }
  }

  #body{
    main{
      @apply relative h-100vh overflow-y-scroll;
    }
  }
</style>