<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Planos from "@/Components/Planos.vue"

</script>

<template>
    
    <div>
        <img src="/img/comp.png" alt="" class=" absolute -z-30" style="transform: translateY(-60%)">
        <div class="flex mx-auto pt-8">  
            <div class="flex-1 flex justify-center"><img src="/img/logo.png" alt=""></div>
            <div class="flex flex-1 gap-8 justify-center text-lg text-primary  ">
                <a href="#"><div>Benefícios</div></a>
                <a href="#"><div>Planos</div></a>
                <a href="#"><div>Contato</div></a>
            </div>

            <div class="flex-1 flex gap-4 text-lg text-primary justify-center items-center mr-12 ">
                <a href="" class="flex w-20 h-12 border border-primary-alt rounded-lg items-center justify-center hover:text-white hover:bg-primary-alt">
                   <div class="">Entrar</div> 
                </a>
                
                <a href="" class="flex w-28 h-12 border border-primary-alt rounded-lg items-center justify-center hover:text-white hover:bg-primary-alt">
                    <div class="">Cadastrar</div> 
                 </a>

            </div>

        </div>



        <div class="flex py-48 gap-32 justify-center items-center">
            <div class="flex-initial">
                <div class="font-bold font-lg text-primary" style="font-size:40px">
                    <div class="">
                        <div class="pl-4">Resultados brilhantes </div>
                        <div class="border-b-4 border-secondary "></div>
                        <div class="pl-4">precisam de</div>
                        <div class="pl-4">feedbacks inteligentes</div>
                        <div class="border-b-4 border-secondary"></div>
                    </div>

                </div>
                <div class="mt-12 ">
                    <div class="font-medium text-primary" style="font-size:22px">Crie pesquisas para medir a satisfação <br> dos seus clientes e/ou produtos</div>
                </div>

                <div class="mt-12 w-36 h-12 border bg-primary-alt rounded-lg ">
                <a href="#"><div class="text-white font-medium text-center pt-2" style="font-size:17px">Testar Grátis</div></a>
                </div>    

            </div>

            <div class=" justify-center">
                <img src="/img/layout.png" alt="">
            </div> 

        </div>
        
        <div class="flex justify-center text-primary-alt font-bold text-2xl mb-24"> 
            <div class="pl-2 border-b-4 border-secondary w-64">Principais benefícios</div>
        </div>
        
        <div class="container mx-auto w-8/12 flex-1 mb-24">
            <div class="flex flex-wrap gap-12 justify-center ">
                <div class="flex flex-col px-3 w-64 bg-gray-200 rounded-3xl justify-center mb-4">
                    <div class="relative -top-12"><img src="/img/ico-layout1.svg" alt=""></div>
                    <div class="text-primary-alt font-bold text-xl">Melhoria contínua</div>
                    <div class="justify-center items-center text-primary pt-4 pb-6">
                    Receba feedbacks e identifique oportunidades 
                    para atender melhor às expectativas dos seus clientes.
                    </div>
                </div>

                <div class="flex flex-col px-3 w-64 bg-gray-200 rounded-3xl justify-center mb-4">
                    <div class="relative -top-12"><img src="/img/ico-layout2.svg" alt=""></div>
                    <div class="text-primary-alt font-bold text-xl">Forças e fraquezas</div>
                    <div class="justify-center items-center text-primary pt-4 pb-6">
                        Identifique pontos fortes e fracos, fortaleça o que 
                        funciona bem e corrija o que precisa ser aprimorado.
                    </div>
                </div>

                <div class="flex flex-col px-3 w-64 bg-gray-200 rounded-3xl justify-center mb-4">
                    <div class="relative -top-12"><img src="/img/ico-layout3.svg" alt=""></div>
                    <div class="text-primary-alt font-bold text-xl">Decisões estratégicas</div>
                    <div class="justify-center items-center text-primary pt-4 pb-6">
                        A partir da análise de dados concretos, tome decisões estratégicas conscientes e assertivas.
                    </div>
                </div>

                <div class="flex flex-col px-3 w-64 bg-gray-200 rounded-3xl justify-center mb-4">
                    <div class="relative -top-12"><img src="/img/ico-layout4.svg" alt=""></div>
                    <div class="text-primary-alt font-bold text-xl">Valorização de clientes</div>
                    <div class="justify-center items-center text-primary pt-4 pb-6">
                        Mostre que a sua empresa está atenta às necessidades dos clientes e disposta a ouvir suas sugestões.
                    </div>
                </div>

                <div class="flex flex-col px-3 w-64 bg-gray-200 rounded-3xl justify-center mb-4">
                    <div class="relative -top-12"><img src="/img/ico-layout5.svg" alt=""></div>
                    <div class="text-primary-alt font-bold text-xl">Prevenção de crises</div>
                    <div class="justify-center items-center text-primary pt-4 pb-6">
                        Identifique problemas e insatisfações antes que se tornem crises e aja para evitar danos à sua reputação.
                    </div>
                </div>

                <div class="flex flex-col px-3 w-64 bg-gray-200 rounded-3xl justify-center mb-4">
                    <div class="relative -top-12"><img src="/img/ico-layout6.svg" alt=""></div>
                    <div class="text-primary-alt font-bold text-xl">Relação cliente-empresa</div>
                    <div class="justify-center items-center text-primary pt-4 pb-6">
                        Interaja com seus clientes e demonstre interesse genuíno em estabelecer uma relação de confiança e lealdade.
                    </div>
                </div>

            </div>
        </div>
        
        <div class="relative flex mb-24">
            <img src="/img/banner.png" alt="">
            <div class="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex gap-52">
                <div class="flex flex-col">
                    <div class=" text-banner font-medium text-7xl">114+</div>
                    <div class="text-2xl text-white">pesquisas criadas</div>
                </div>
                <div class="flex flex-col">
                    <div class=" text-banner font-medium text-7xl">579+</div>
                    <div class="text-2xl text-white">pesquisas respondidas</div>
                </div>
            </div>
        
        </div>

        <div class="container mx-auto">
            <div class="relative flex ">
                <img src="/img/search.png" alt="">
                <div class="flex flex-col items-start justify-center">
                    <img src="/img/ico-sec.svg" alt="">
                    <div class="flex flex-col gap-4 text-primary-alt text-3xl text font-bold " style="font-size:38px">
                        <div>Crie inúmeras</div>
                        <div>pesquisas  </div>
                    </div>                
                </div>
            </div>

            <div class="relative flex justify-end ">
                <div class="flex flex-col items-end justify-center">
                    <img src="/img/ico-sec3.svg" alt="">
                    <div class="flex flex-col gap-4 text-primary-alt text-3xl text font-bold " style="font-size:38px">
                        <div>Monitore</div>
                        <div>os feedbacks</div>
                    </div>
                </div>
                <img src="/img/search2.png" alt="">
            </div>

            <div class="relative flex ">
                <img src="/img/search3.png" alt="">
                <div class="flex flex-col items-start justify-center">
                    <img src="/img/ico-sec2.svg" alt="">
                    <div class="flex flex-col gap-4 text-primary-alt text-3xl text font-bold " style="font-size:38px">
                        <div>Evolua</div>
                        <div>constantemente</div>
                    </div>               
                 </div>
            </div>
        </div>

        <div class="flex justify-center text-primary-alt font-bold text-2xl mb-32"> 
            <div class="pl-2 border-b-4 border-secondary">O que falam do Indexflow?</div>
        </div>

        <div class="flex flex-wrap gap-12 justify-center mb-28">
            <div class="flex flex-col px-3 w-80 bg-gray-200 rounded-3xl justify-center">
                <div class="relative -top-12"><img src="/img/ico-thumb.svg" alt=""></div>
                <div class="text-primary-alt font-bold">Melhoria contínua</div>
                <div class="justify-center items-center text-primary pt-4">
                    Survio é simples, intuitivo e vai de encontro à todas as minhas expectativas 
                    de como software de solução de feedbacks deveria funcionar. Administrar preparação,
                    distribuição e avaliação de mais de 1.400 pesquisas de todas as filiais 
                    se tornou muito mais fácil e os.
                </div>

                <div class="flex gap-32 mb-8 mt-20">
                    <div class="text-primary font-medium justify-start" style="font-size:17px">-Paulo Pereira</div>
                    <img src="/img/ico-tre.svg" alt="" class="text-end">
                </div>

            </div>

            <div class="flex flex-col px-3 w-80 bg-gray-200 rounded-3xl justify-center">
                <div class="relative -top-12"><img src="/img/ico-thumb.svg" alt=""></div>
                <div class="text-primary-alt font-bold">Forças e fraquezas</div>
                <div class="justify-center items-center text-primary pt-4">
                    Survio é simples, intuitivo e vai de encontro à todas as minhas expectativas 
                    de como software de solução de feedbacks deveria funcionar. Administrar preparação,
                    distribuição e avaliação de mais de 1.400 pesquisas de todas as filiais 
                    se tornou muito mais fácil e os.
                </div>

                <div class="flex gap-32 mb-8 mt-20">
                    <div class="text-primary font-medium justify-start" style="font-size:17px">-Rafael Carvalho</div>
                    <img src="/img/ico-carvalho.svg" alt="" class="text-end">
                </div>

            </div>

            <div class="flex flex-col px-3 w-80 bg-gray-200 rounded-3xl justify-center">
                <div class="relative -top-12"><img src="/img/ico-thumb.svg" alt=""></div>
                <div class="text-primary-alt font-bold">Decisões estratégicas</div>
                <div class="justify-center items-center text-primary pt-4">
                    Survio é simples, intuitivo e vai de encontro à todas as minhas expectativas 
                    de como software de solução de feedbacks deveria funcionar. Administrar preparação,
                    distribuição e avaliação de mais de 1.400 pesquisas de todas as filiais 
                    se tornou muito mais fácil e os.
                </div>

                <div class="flex gap-32 mb-8 mt-20">
                    <div class="text-primary font-medium justify-start" style="font-size:17px">-Nome</div>
                    <img src="/img/ico-telhas.svg" alt="" class="text-end">
                </div>

            </div>
        </div>

       
        <Planos />



        

        <div class="flex mx-auto w-4/6 gap-8 py-28 justify-center ">
            <div class="flex"><img src="/img/banner2.png"></div>
            <div class=" flex flex-col justify-center">
                <div class="font-bold text-primary" style="font-size:31px">Ficou alguma dúvida?</div>
                <div class="text-primary" style="font-size:31px">Entre em contato conosco,<br> será um prazer atende-lô(a).</div>
                
                <div class="mt-8">
                    <a href="" class="border-2 rounded-2xl w-64 h-14 flex justify-center items-center ">
                        <img src="/img/ico-whats.svg" alt="" class="pl-4">
                        <div class="font-medium text-primary text-lg px-4">chamar no whatsapp</div>         
                    </a>
                </div>

            </div>
        </div>
        
        <div class="flex bg-primary h-64 justify-center items-center gap-16">

            <div class="flex flex-1 flex-col justify-center items-end gap-8">
                <img src="/img/ico-logo.svg" alt="">
                <div class="flex gap-4">
                    <img src="/img/ico-insta.svg" alt="">
                    <img src="/img/ico-face.svg" alt="">
                    <img src="/img/ico-you.svg" alt="">
                </div>
            </div>

            <div class="flex-1 text-white gap-8 justify-center items-center">
                <div class="flex justify-center gap-16 text-lg font-medium">
                    <div>Beneficios</div>
                    <div>Planos</div>
                    <div>Contato</div>
                </div>
                <div class="flex justify-center items-center mt-12" style="font-size:15px">
                    <div class="text-white">Indexflow by Recro &copy 2023. Todos os direitos reservados. </div>
                </div>
            </div>

            <div class="flex flex-1 justify-star items-center pl-8">
                <button>
                    <img src="/img/ico-up.svg" alt="">
                </button>
            </div>
        </div>
   
    </div>


</template>

