<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="Arrows & Direction Icons"
        titleClass="m-b-0 f-w-700" headerTitle="true">
        <div class="row icon-lists">

            <div class="col-12 col-xxl-2 col-lg-4 col-md-6 icons-item" v-for="(di, index) in directional" :key="index"
                v-on:click="icon_bar(di.name)">
                <i :class="di.name"></i>
                <h5 class="mt-0">{{ di.name }}</h5>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

let emit = defineEmits(['selected'])

let directional = ref([{ name: 'icon-arrow-up' }, { name: 'icon-arrow-right' }, { name: 'icon-arrow-left' }, { name: 'icon-arrow-down' }, { name: 'icon-arrows-vertical' }, { name: 'icon-arrows-horizontal' }, { name: 'icon-angle-up' }, { name: 'icon-angle-right' }, { name: 'icon-angle-left' }, { name: 'icon-angle-down' }, { name: 'icon-angle-double-up' }, { name: 'icon-angle-double-right' }, { name: 'icon-angle-double-left' }, { name: 'icon-angle-double-down' }, { name: 'icon-move' }, { name: 'icon-fullscreen' }, { name: 'icon-arrow-top-right' }, { name: 'icon-arrow-top-left' }, { name: 'icon-arrow-circle-up' }, { name: 'icon-arrow-circle-right' }, { name: 'icon-arrow-circle-left' }, { name: 'icon-arrow-circle-down' }, { name: 'icon-arrows-corner' }, { name: 'icon-split-v' }, { name: 'icon-split-v-alt' }, { name: 'icon-split-h' }, { name: 'icon-hand-point-up' }, { name: 'icon-hand-point-right' }, { name: 'icon-hand-point-left' }, { name: 'icon-hand-point-down' }, { name: 'icon-back-right' }, { name: 'icon-back-left' }, { name: 'icon-exchange-vertical' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/animate.scss"
</style>