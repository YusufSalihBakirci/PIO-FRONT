<template>
    <Breadcrumbs main="Map" mains="Vue Leaflet" title="Vue Leaflet" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" title="Simple Map" headerTitle="true">
                <SimpleMap />
            </Card3>
            <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
                title="Multi-language support" headerTitle="true" desc="Display a map with labels in a foreign language">
                <MultiLanguage />
            </Card3>
            <Card3 colClass="col-xl-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
                title="Map With Marker" headerTitle="true" desc="Display a map with labels in a foreign language">
                <MultiLanguage2 />
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
let Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const SimpleMap = defineAsyncComponent(() => import("@/components/theme/maps/SimpleMap.vue"))
const MultiLanguage = defineAsyncComponent(() => import("@/components/theme/maps/MultiLanguage.vue"))
const MultiLanguage2 = defineAsyncComponent(() => import("@/components/theme/maps/MultiLanguage2.vue"))
let desc = ref<string>("Display a map with labels in a foreign language")
</script>