<script setup>

import {ref} from 'vue';

const anualText = ref("Anual");
const mensalText = ref("Mensal");
const assinaturaAno = ref("R$39,90");
const assinaturaMensal = ref("R$49,90");

const assinaturaMesVisible = ref(true);

function selecionarAnual() {
  anualText.value = "Anual";
  mensalText.value = "Mensal";
  assinaturaAno.value = "R$39,90";
  assinaturaMensal.value = "R$49,90";
  assinaturaMesVisible.value = true;
}

function selecionarMensal() {
  anualText.value = "Anual";
  mensalText.value = "Mensal";
  assinaturaAno.value = "R$49,90";
  assinaturaMesVisible.value = false;
}

</script>

<template>

    <div>
        <div class="flex justify-center items-center text-3xl text-primary font-bold">
            <div class="pl-2 border-b-4 border-secondary">Planos</div>
        </div>




        <div ref="btn" class="flex justify-center items-center gap-4 mt-12">
            <button @click="selecionarAnual" :class="{'selected': mensalText === 'Mensal'}" class="w-24 h-12 border bg-primary-alt rounded-lg">
                <div ref="anual_text" class="text-white font-bold text-center" style="font-size:17px">{{ anualText }}</div>
            </button>

            <button @click="selecionarMensal" :class="{'selected': mensalText === 'Mensal'}">
                <div class="text-primary font-bold text-center" style="font-size:17px">{{ mensalText }}</div>
            </button>
        </div>




        <div class="container mx-auto flex pt-12 w-5/6 gap-10">
            <div class="flex flex-1 flex-col justify-start gap-4 ">
                <div class="flex flex-col font-bold text-primary-alt text-3xl">
                    Assinatura
                </div>
                <div class="mb-8">Confira nossos planos com grandes descontos</div>
                <div >Números de pesquisas:</div>
                <div class="border-b-2 mb-4"></div>
                <div>Número de questões:</div>
                <div class="border-b-2 mb-4"></div>
                <div>Disparos por e-mail / mês:</div>
            </div>
            
            <div class="flex flex-1 flex-col items-center gap-4 border-2 rounded-xl border-primary-alt">
                <div class="flex text-xl text-white bg-primary-alt rounded-t-xl w-full h-20 justify-center items-center mb-4">Básico</div>
                <div class="flex flex-col mx-auto w-3/4 items-center gap-2 font-bold text-sm mb-20">
                    <div>Ilimitado</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>Ilimitado</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>1.000</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>N/A</div>
                </div>




                <div ref="planos" class="flex flex-col items-center text-primary-alt">
                    <div v-show="assinaturaMesVisible" class="line-through">{{ assinaturaAno }}</div>
                    <div v-show="assinaturaMesVisible" style="font-size:32px">{{ assinaturaMensal }}/mês</div>

                    <div class="flex text-primary-alt items-center">
                        <div v-show="!assinaturaMesVisible" style="font-size:32px">{{ assinaturaAno }}/mês</div>
                    </div>
                </div>



                <div>
                    <div class="mt-8  ">
                        <button class="flex w-28 h-12 border bg-primary-alt rounded-2xl justify-center items-center ">
                            <div class="text-white font-bold" style="font-size:15px">Selecionar</div>
                        </button>
                    </div>
                </div>

            </div>

            <div class="flex flex-1 flex-col items-center gap-4 border-2 rounded-xl bg-border">
                <div class="flex text-xl font-bold text-primary-alt rounded-t-xl w-full h-20 justify-center items-center mb-4" style="filter:blur(0.5px)">Essencial</div>
                <div class="flex flex-col mx-auto w-3/4 items-center gap-2 font-bold text-sm mb-20" style="filter:blur(2px)">
                    <div>Ilimitado</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>Ilimitado</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>10.000</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>1000</div>
                </div>
                <div class="flex flex-col  text-primary-alt mt-32 mb-10" style="filter:blur(0.5px)">
                    <div style="font-size:22px">Em breve</div>
                </div>
            </div>

            <div class="flex flex-1 flex-col items-center gap-4 border-2 rounded-xl bg-border">
                <div class="flex text-xl font-bold text-primary-alt rounded-t-xl w-full h-20 justify-center items-center mb-4" style="filter:blur(0.5px)">Avançado</div>
                <div class="flex flex-col mx-auto w-3/4 items-center gap-2 font-bold text-sm mb-20" style="filter:blur(2px)">
                    <div>Ilimitado</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>Ilimitado</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>50.000</div>
                    <div class="w-full border-b-2 mb-4"></div>
                    <div>50.000</div>
                </div>
                <div class="flex flex-col  text-primary-alt mt-32 mb-10" style="filter:blur(0.5px)">
                    <div style="font-size:22px">Em breve</div>
                </div>
            </div>

        </div>
    </div>
</template>