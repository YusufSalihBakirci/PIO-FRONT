<template>
    <GoogleMap api-key="AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw" :center="center" :zoom="4"
        style="width: 100%; height: 500px">
        <Marker v-for="(location, index) in positions.lists" :key="index"
            :options="{ position: { lat: location.lat, lng: location.lng } }" />
    </GoogleMap>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
interface item {
    lat: number,
    lng: number
}
let center = ref<item>({ lat: 50, lng: 5 });
let positions = reactive({
    lists: ref<item[]>([
        { lat: 48.8567, lng: 2.3508 },
        { lat: 41.9, lng: 12.5 },
        { lat: 52.5166, lng: 13.3833 },
        { lat: 40.4, lng: -3.6833 },
        { lat: 51.5008, lng: -0.1224 },
    ]),
})
</script>