<template>
    <div id="body">
        <MyAside/>
        <main>
            <section id="curriculum">
                <h1 id="title">{{title}}</h1>

                <box-info id="hard-skills" title="Hard Skills" :items="hard_skills"/>
                <box-info id="soft-skills" title="Soft Skills" :items="soft_skills"/>
                <box-info id="programming" title="Programação" :items="programming"/>
                <box-info id="experiences" title="Experiências profissionais" :items="experiences"/>
            </section>

            <section id="personal" class="box">
                <div id="information">
                    <img :src="img" alt="Victor Hugo Desenvolvedor FrontEnd">
                    <h2>{{name}}</h2>
                    <h3>{{locale}}</h3>
                </div>
                <div id="social-medias">
                    <a v-for="(item, index) in social_medias" :key="index"
                        class="box" :href="item.link" >
                        <icon type="fab" :name="item.icon" size="sm"/>
                    </a>
                </div>
            </section>

            <section id="resume" class="box">
                <h3>Resumo</h3>
                <p>{{resume}}</p>
            </section>

            <section id="contact" class="box">
                <h3>Contato</h3>
                <span v-for="(item, index) in contact" :key="index">
                    <h4>{{item.title}}:</h4>
                    <p>{{item.value}}</p>
                </span>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {
            img: 'https://i.imgur.com/3x08o8f.png',
            name: 'Victor Hugo de S. Pereira',
            locale: 'Manilha, Itaboraí - RJ',

            title: 'DESENVOLVEDOR FRONT-END',

            resume: `Desenvolvedor Front-end com conhecimento em HTML/CSS/JS, VueJs, Nuxt, 
                    Firebase e Elixir, venho da área de modelagem 3D (ArchViz) e busco fazer 
                    uma transição de Desenvolvimento.`,

            hard_skills: [
                { title: 'Figma' },
                { title: 'CMS (Wordpress/Elementor)' },
                { title: 'Postman' },
                { title: 'Swagger' },
                { title: 'Github' }
            ],

            soft_skills: [
                { title: 'Criatividade' },
                { title: 'Organização' },
                { title: 'Responsibilidade' },
                { title: 'Inteligência Emocianal' }
            ],

            programming: [
                { title: 'HTML/CSS/JS', lvl: 4 },
                { title: 'Vue/NuxtJS', lvl: 3 },
                { title: 'Quasar', lvl: 2 },
                { title: 'ReactJS', lvl: 2 },
                { title: 'Tailwind', lvl: 3 },
                { title: 'WindiCSS', lvl: 4 },
                { title: 'Elixir', lvl: 2 },
                { title: 'GraphQL', lvl: 2 },
                { title: 'Rest API', lvl: 3 },
                { title: 'Firebase', lvl: 4 },

            ],

            experiences:[
                {
                    title: 'WEB DESIGNER',
                    start: '01/2020',
                    end: 'hoje',
                    description: `Faço o processo completo da criação artística, como o tema, cores e logos, 
                                ao protótipo usando o Figma para aprovação e por fim a construção da aplicação, 
                                usando algum framework como Vue ou React, o conjunto CSS/HTML/JS ou algum CMS, 
                                normalmente dependendo da complexidade do projeto.`
                },
                {
                    title: 'ARCHVIZ',
                    start: '07/2016',
                    end: '12/2020',
                    description: `Fazia a modelagem 3D de normalmente residências a partir da planta baixa em DWG 
                                usando o SketchUp ou Blender, Texturizava e Renderizava usando o Vray e por fim 
                                fazia a pós-produção, usando o Photoshop.`
                },
            ],

            contact: [
                { title: 'Email', value: 'victorhugods.pereira@gmail.com' },
                { title: 'WhatsApp', value: '(21) 98930-6866' },
            ],

            social_medias: [
                { icon: 'github', link: 'github.com/lkt226' },
                { icon: 'linkedin', link: 'linkedin.com/in/victorhdsp'}
            ]
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
                @apply grid grid-cols-2 gap-4vw;
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

            #personal{
                @apply  w-75 p-4 flex flex-row justify-between;

                #information{
                    @apply h-60 flex flex-col items-center justify-center;

                    img{
                        @apply h-3/5 rounded-full;
                    }
                }
                #social-medias{
                    @apply flex flex-col gap-4;

                    >*{ @apply rounded-full; }
                }
            }

            #contact{
                @apply items-start;
                h3{ @apply text-center w-full; }
                h4{ @apply w-full cursor-pointer text-sm; }
                p{ @apply w-full mb-2; }
            }
            
            .box{
                @apply  bg-gray-200 rounded-lg p-2
                    flex flex-col items-center justify-center;

                box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.15),
                    -5px -5px 15px 0px rgba(255, 255, 255, 1),
                    -5px -5px 15px 0px rgba(255, 255, 255, 1);
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

            #personal{
                @apply flex-col;
                #social-medias{
                    @apply flex-row gap-4;
                }
            }

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

            #personal{
                @apply  w-full;
            }

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