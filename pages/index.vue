<template>
  <div id="body">
    <MyAside/>
    <main>
      <div class="landing-page">
        <h1>Victor Hugo</h1>
        <p class="banner">{{text.home.banner}}</p>
      </div>
      
      <bg-box id="last-components">
        <h2>Ultimos componentes <icon name="angle-double-right"/> </h2>
        <div id="grid">
          <ClientOnly>
          <grid-box v-for="(value, index) in size" :key="index" :index="value" :dinamic="false"/>
          </ClientOnly>
        </div>
      </bg-box>

      <div class="landing-page">
        <h2>Porque eu faço?</h2>
        <p>{{text.home.why}}</p>
      </div>

      <bg-box class="landing-page">
        <h2 class="text-center">Envie um e-mail</h2>
        <form @submit="(e)=>handleSubmit(e)">
          <form-item v-for="(input, index) in inputs" :key="index"
              :type="input.type" :id="input.id" :title="input.title"/>

          <button id="submit" type="submit">Enviar</button>
        </form>
      </bg-box>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    async setup(){
        let size = [];
        const text = (await import('@/assets/services/text_content.json')).default;

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
          size,
          text
        }
    },
    data(){
        return{
          inputs: [
            {type: 'text', id: 'name', title: 'Seu nome'},
            {type: 'email', id: 'email', title: 'Seu E-mail'},
            {type: 'textarea', id: 'message', title: 'Digite uma mensagem'},
          ],
          message: {
            show: 'desactived',
            
          },
        }
    },
    methods: {
      handleSubmit(e){
        e.preventDefault();
        console.log('enviou')

        const form = e.target;

        const formdata = new FormData();
        const header = new Headers();

        formdata.append("_replyto", form.elements.email.value);
        formdata.append("message", [form.elements.name.value, form.elements.message.value].join('/-/'));
        
        header.append("Cookie", "fs_ab1=control");
         
        useFetch('https://formspree.io/f/mqkneyzg', {
          method: 'POST',
          headers: header,
          body: formdata
        }).then(response => {
          this.$router.push('/sucesso');
        }).catch(error => {
          this.$router.push('/error');
        })
      }
    }
})
</script>



<style lang="scss" scoped>
  #body{
    @apply flex bg-light-700;
    
    main{
      @apply block overflow-y-auto overflow-x-hidden h-100vh;

      #last-components{
        @apply w-80vw h-min ml-auto mr-0 my-10;

        >h2{
          @apply text-2xl px-4 flex items-center gap-4;
        }

        #grid{
          @apply grid grid-rows-1 grid-flow-col-dense gap-3 
                  p-3 relative overflow-x-auto;
          >*{
            @apply shadow-none;
          }

          grid-auto-columns: 25vw;
          grid-auto-rows: 25vw;
        }
      }

      .landing-page{
        @apply mt-8 mx-15vw mb-14;
        .banner{
          @apply text-3xl px-3;
        }
        h2{
          @apply text-4xl px-3 mb-4;
        }
        p{
          @apply text-xl px-3;
        }
      }

      form{
        @apply relative flex flex-col items-end;
        #submit{
          @apply bg-gray-700 text-white px-20 py-3 rounded-lg;

          &:hover{
            @apply bg-gray-500;
          }
        }
      }

    }
  }

  @media (max-width: 670px) {
    #body{
      main{
        .landing-page{
          @apply px-4 py-8 m-2 pt-20;

          .banner{
            @apply text-xl;
          }

          >h1{
            @apply text-5xl mb-4;
          }

          >h2{
            @apply text-3xl;
          }

          >p{
            @apply text-base;
          }
        }

        #last-components{
          @apply w-90vw;

          >h2{
            @apply text-3xl gap-0;
          }

          #grid{
            grid-auto-columns: 100%;
          }
        }

        form{
          @apply items-center;

          #submit{
            @apply w-full;
          }
        }
      }
    }
  }
</style>