<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="Text Editor" titleClass="m-b-0 f-w-700"
        headerTitle="true">
        <div class="row icon-lists">

            <div class="col-12 col-xxl-2 col-lg-4 col-md-6 icons-item" v-for="(texte, index) in texteditor" :key="index"
                v-on:click="icon_bar(texte.name)">
                <i class="" :class="texte.name"></i>
                <h5 class="mt-0"> {{ texte.name }}</h5>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

let emit = defineEmits(['selected'])

let texteditor = ref([{ name: 'icon-paragraph' }, { name: 'icon-uppercase' }, { name: 'icon-underline' }, { name: 'icon-text' }, { name: 'icon-Italic' }, { name: 'icon-smallcap' }, { name: 'icon-list' }, { name: 'icon-list-ol' }, { name: 'icon-align-right' }, { name: 'icon-align-left' }, { name: 'icon-align-justify' }, { name: 'icon-align-center' }, { name: 'icon-quote-right' }, { name: 'icon-quote-left' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/animate.scss"
</style>