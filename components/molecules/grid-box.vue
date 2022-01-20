<template>
    <div :id="'c'+index" :ref="'c'+index" :class="`grid-box ${getDinamic()}`" :style="`${bg_color} ${size}`">
        <button class="up-box c-info" @click="goToCode(index)">Ver o codigo</button>
        <component :is="'c'+index" class="grid-area"/>
        <div class="up-box id"> c{{index}} </div>
        {{getColor()}} {{getSize()}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ 
    props: {
        index: {
            type: Number,
            required: true
        },
        dinamic: {
            type: Boolean,
            default: true
        },
    },
    data(){
        return {
            bg_color: false as any,
            size: false as any
        }
    },
    methods:{
        goToCode(id){
            window.open(`https://github.com/Lkt226/components-collect/tree/main/projects/components/c${id}.vue`, '_blank')
        },
        getColor(){
            const component = this.$refs['c'+this.index] as any;
            if (typeof component !== 'undefined') {
                if (component.querySelector('.grid-area')?.style.backgroundColor) {
                    this.bg_color = `background-color: ${component.querySelector('.grid-area').style.backgroundColor};`
                }
                else if (typeof component.querySelector('.grid-area')?.style.backgroundColor === 'undefined'){
                    setTimeout(() => { this.getColor(); }, 100);
                }
                else {
                    this.bg_color = ''
                }
            }else{
                setTimeout(() => { this.getColor(); }, 100);
            }
        },
        getSize(){
            const component = this.$refs['c'+this.index] as any;
            if (typeof component !== 'undefined') {
                if (component.querySelector('.grid-area')) {
                    const size = {
                        width: Math.round(component.clientWidth/100),
                        height: Math.round(component.clientHeight/50),
                    
                        width_filho: Math.round(component.querySelector('.grid-area').clientWidth/100),
                        height_filho: Math.round(component.querySelector('.grid-area').clientHeight/50)
                    }
                    
                    const pro_size = {
                        width: size.width_filho - size.width,
                        height: size.height_filho - size.height
                    }

                    let col = pro_size.width+1, row = pro_size.height+1;

                    if(pro_size.width > 0){
                        col;
                    }

                    if(pro_size.height > 2){
                        row +=1;
                    }

                    this.size = `--col: ${col}; --row: ${row};`
                }
                else{
                    setTimeout(() => { this.getSize(); }, 100);
                }
            }else{
                setTimeout(() => { this.getColor(); }, 100);
            }
        },
        getDinamic(){
            return this.dinamic ? 'dinamic': '';
        }
    },
})
</script>

<style lang="scss" scoped>
    .grid-box{
        @apply relative overflow-hidden
                shadow-lg rounded-lg bg-light-600
                flex items-center justify-center
                col-span-1 row-span-1;
        &.dinamic{
            @apply col-span-$col row-span-$row;
        }
        &:hover {
          .c-info{
            @apply opacity-100 left-0;
          }
          .id{
            @apply opacity-100 right-0 rounded-lg;
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

    @media (max-width: 900px){
        .up-box.c-info{
            @apply top-0;
        }
    }
</style>