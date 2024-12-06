<template>
    <Breadcrumbs main="Apps" mains="Calender Basic" title="Calender Basic" />
    <Card3 colClass="container-fluid calendar-basic">
        <div class="row" id="wrap">
            <CalenderView />
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const CalenderView = defineAsyncComponent(() => import("@/components/theme/calender/CalenderView.vue"))
</script>