<template>
    <Breadcrumbs main="Bonus Ui" mains="Dragable card" title="Dragable card" />
    <div class="container-fluid dragable">
        <draggable class="row">
            <DraggableCard />
            <ShadowCard />
            <IconCard />
        </draggable>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
const draggable = VueDraggableNext
const DraggableCard = defineAsyncComponent(() => import("@/components/theme/advance/draggable/DraggableCard.vue"))
const ShadowCard = defineAsyncComponent(() => import("@/components/theme/advance/draggable/ShadowCard.vue"))
const IconCard = defineAsyncComponent(() => import("@/components/theme/advance/draggable/IconCard.vue"))
</script>