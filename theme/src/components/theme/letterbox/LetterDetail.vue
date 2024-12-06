<template>
    <div class="card email-body email-read">
        <div class="mail-header-wrapper header-wrapper1">
            <div class="mail-header1">
                <div class="light-square">
                    <svg class="btn-email" @click="toogleClick()">
                        <use href="@/assets/svg/icon-sprite.svg#back-arrow"></use>
                    </svg>
                </div><span>Interview Mail</span>
            </div>
            <div class="mail-body1">
                <div class="light-square" v-for="(item, index) in mail" :key="index" data-bs-toggle="tooltip"
                    data-bs-placement="top" data-bs-title="Achieve">
                    <svg :class="item.svgclass">
                        <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`"></use>
                    </svg>
                </div>
            </div>
        </div>
        <LetterEmails />
    </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineAsyncComponent } from 'vue'
import { mail, } from "@/core/data/letter-box"
const LetterEmails = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterEmails.vue"))
let emit = defineEmits(['selected'])
function toogleClick() {
    emit('selected');
}
</script>