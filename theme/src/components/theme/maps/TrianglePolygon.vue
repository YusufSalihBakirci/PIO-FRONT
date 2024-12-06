<template>
    <GoogleMap api-key="AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw" style="width: 100%; height: 500px" :center="center"
        :zoom="5">
        <Polyline :options="flightPath" />
    </GoogleMap>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { GoogleMap, Polyline } from 'vue3-google-map'
interface cent {
    lat: number,
    lng: number
}
let center = ref<cent>({ lat: 52, lng: 5 })
let flightPlanCoordinates = ref<cent[]>([
    { lat: 46.2276, lng: 2.2137 },
    { lat: 51.81925, lng: 12.35031 },
    { lat: 48.2082, lng: 16.54958 },
])
let flightPath = {
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: 'black',
    strokeOpacity: 1.0,
    strokeWeight: 2,
}
</script>