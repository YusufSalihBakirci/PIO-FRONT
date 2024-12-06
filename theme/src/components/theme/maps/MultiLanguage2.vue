<template>
    <l-map :zoom="simplewithmarker.zoom" :center="simplewithmarker.center" style="height: 500px">
        <l-marker :lat-lng="simplewithmarker.marker" :title="simplewithmarker.title" :draggable="false">
            <l-popup :content="simplewithmarker.text" />
        </l-marker>
        <l-tile-layer :url="simplewithmarker.url" />
    </l-map>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LPopup, LMarker } from "@vue-leaflet/vue-leaflet";
interface SimpleWithMarker {
    zoom: number;
    center: [number, number];
    url: string;
    marker: [number, number];
    text: string;
    title: string;
}
let simplewithmarker = ref<SimpleWithMarker>({
    zoom: 13,
    center: [47.41322, -1.219482],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    marker: [47.41322, -1.219482],
    text: 'my marker popup text',
    title: 'My marker popup title',
})
</script>
