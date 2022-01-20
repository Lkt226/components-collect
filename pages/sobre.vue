<template>
    <div id="body">
        <MyAside/>
        <main>
            <section id="curriculum">
                <h1 id="title">{{text.title}}</h1>

                <box-info id="hard-skills" title="Hard Skills" :items="text.hard_skills"/>
                <box-info id="soft-skills" title="Soft Skills" :items="text.soft_skills"/>
                <box-info id="programming" title="Programação" :items="text.programming"/>
                <box-info id="experiences" title="Experiências profissionais" :items="text.experiences"/>
            </section>

            <personal-box :personal="text.personal" :social_medias="text.social_medias"/>

            <noum-box :item="{title: 'Resumo', description: text.resume}"/>

            <noum-box :item="{title: 'Contato', list: text.contact}"/>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    async setup(){
        const text = (await import('@/assets/services/text_content.json')).default.about;

        return {
            text,
        }
    }
})
</script>

<style lang="scss" scoped>
    #body{
        @apply flex bg-light-600;

        main{
            @apply w-full relative p-4;

            #curriculum{
                @apply grid grid-cols-2 gap-3vw;
                grid-template-areas: 'title title'
                                    'prog experiences'
                                    'soft experiences'
                                    'hard experiences';
                grid-template-rows: repeat(4, min-content);
                grid-template-columns: 1fr 2fr;

                #title{
                    @apply text-2xl font-bold text-center;
                }
            }
        }
    }

    @media (max-width: 900px){
         #body main{
            @apply h-100vh overflow-y-scroll;
            grid-template-columns: min-content 1fr;
            grid-template-rows: min-content min-content 1fr;
            grid-template-areas:
            "personal resume"
            "personal contact"
            "curriculum curriculum";

            #curriculum{
                @apply grid gap-4 gap-x-16;
                grid-template-areas: 'title title'
                                    'prog experiences'
                                    'soft experiences'
                                    'hard experiences';
                grid-template-rows: repeat(3, min-content);
                grid-template-columns: 1fr 2fr;
            }
         }
    }

    @media (max-width: 768px){
         #body main{
            #curriculum{
                @apply grid gap-4 gap-x-16;
                grid-template-areas: 'title title'
                                    'prog soft'
                                    'prog hard'
                                    'experiences experiences';
                grid-template-rows: repeat(3, min-content);
                grid-template-columns: 1fr 2fr;
            }
         }
    }

    @media (max-width: 670px){
         #body main{
            @apply grid-cols-1;
            grid-template-rows: repeat(4, min-content);
            grid-template-areas:
            "personal "
            "resume "
            "contact "
            "curriculum";

            #curriculum{
                @apply grid-cols-1 gap-6 gap-x-0;
                grid-template-areas: 'title '
                                    'prog '
                                    'soft '
                                    'hard '
                                    'experiences';
                grid-template-rows: repeat(5, min-content);
            }
         }
    }

    //GRID
    #body main{
        @apply grid gap-4 h-100vh;

        grid-template-areas:
            "curriculum personal"
            "curriculum resume"
            "curriculum contact";

        grid-template-columns: 1fr min-content;
        grid-template-rows: repeat(3, 1fr);

        //Grid area
        #title{ grid-area: title; }
        #personal{ grid-area: personal; }
        #curriculum{ grid-area: curriculum; }
        #resume{ grid-area: resume; }
        #contact{ grid-area: contact; }
        #social-medias{ grid-area: social-medias; }
        #hard-skills{ grid-area: hard; }
        #soft-skills{ grid-area: soft; }
        #programming{ grid-area: prog; }
        #experiences{ grid-area: experiences; }
    }  
</style>