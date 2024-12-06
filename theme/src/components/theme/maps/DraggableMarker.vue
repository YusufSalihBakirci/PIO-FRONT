<template>
    <GoogleMap api-key="AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw" :center="center" :zoom="12"
        style="width: 100%; height: 500px">
        <Marker v-for="(location, index) in positions.lists" :key="index"
            :options="{ position: { lat: location.lat, lng: location.lng } }" />
    </GoogleMap>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
interface cent {
    lat: number,
    lng: number
}
let center = ref<cent>({ lat: 42.35805, lng: -71.0636 });
let positions = reactive({
    lists: ref<cent[]>([{ lat: 42.35805, lng: -71.0636 }]),
});
</script>