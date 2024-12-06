<template>
    <l-map :zoom="simple.zoom" :center="simple.center" style="height: 500px">
        <l-tile-layer :url="simple.url"></l-tile-layer>
    </l-map>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
interface SimpleMap {
    zoom: number;
    center: [number, number];
    url: string;
}
let simple = ref<SimpleMap>({
    zoom: 5,
    center: [49.439557, 234.558105],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
})
</script>
<style scoped>
@import "leaflet/dist/leaflet.css";
</style>