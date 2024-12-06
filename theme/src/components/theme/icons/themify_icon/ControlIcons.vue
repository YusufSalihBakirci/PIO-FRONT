<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="Control Icons" titleClass="m-b-0 f-w-700"
        headerTitle="true">
        <div class="row icon-lists">

            <div class="col-12 col-xxl-2 col-lg-4 col-md-6 icons-item" v-for="(con, index) in control" :key="index"
                v-on:click="icon_bar(con.name)">
                <i class="" :class="con.name"></i>
                <h5 class="mt-0">{{ con.name }}</h5>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

let emit = defineEmits(['selected'])

let control = ref([{ name: 'icon-control-stop' }, { name: 'icon-control-shuffle' }, { name: 'icon-control-play' }, { name: 'icon-control-pause' }, { name: 'icon-control-forward' }, { name: 'icon-control-backward' }, { name: 'icon-volume' }, { name: 'icon-control-skip-forward' }, { name: 'icon-control-skip-backward' }, { name: 'icon-control-record' }, { name: 'icon-control-eject' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/animate.scss"
</style>