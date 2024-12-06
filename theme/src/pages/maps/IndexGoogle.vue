<template>
    <Breadcrumbs main="Map" mains="Google Map" title="Google Map" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-sm-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
                title="Map at a specified location" headerTitle="true"
                desc="Display a map at a specified location and zoom level.">
                <GoogleMap api-key="AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw" :center="{ lat: 20.5937, lng: 78.9629 }"
                    :zoom="12" style="width: auto; height: 500px">
                </GoogleMap>
            </Card3>
            <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" title="Multi-language support" pre="true"
                preClass="mt-1 mb-0" headerTitle="true" desc="Display a map with labels in a foreign language">
                <GoogleMap api-key="AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw" :center="{ lat: 20.5937, lng: 78.9629 }"
                    :zoom="6" style="width: auto; height: 500px" :options="{
                        region: 'VI',
                        language: 'vi',
                    }">
                </GoogleMap>
            </Card3>
            <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" title="Marker on the Map" pre="true"
                preClass="mt-1 mb-0" headerTitle="true" desc="Display a map highlighting points of interest">
                <Markers></Markers>
            </Card3>
            <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" title="Draggable Marker" pre="true"
                preClass="mt-1 mb-0" headerTitle="true" desc="Display a map highlighting points of interest">
                <DraggableMarker></DraggableMarker>
            </Card3>
            <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" title="Polyline on the Map" pre="true"
                preClass="mt-1 mb-0" headerTitle="true" desc="Display a map with a line showing a known route">
                <GooglePolyline></GooglePolyline>
            </Card3>
            <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" title="Polygon on the Map" pre="true"
                preClass="mt-1 mb-0" headerTitle="true" desc="Display a map highlighting a region or area">
                <TrianglePolygon></TrianglePolygon>
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
import { GoogleMap, } from "vue3-google-map";
let Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const Markers = defineAsyncComponent(() => import("@/components/theme/maps/MarkersMap.vue"))
const DraggableMarker = defineAsyncComponent(() => import("@/components/theme/maps/DraggableMarker.vue"))
const GooglePolyline = defineAsyncComponent(() => import("@/components/theme/maps/GooglePolyline.vue"))
const TrianglePolygon = defineAsyncComponent(() => import("@/components/theme/maps/TrianglePolygon.vue"))
</script>