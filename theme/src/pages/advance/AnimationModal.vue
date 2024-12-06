<template>
    <Breadcrumbs main="Bonus Ui" mains="Animated Modal" title="Animated Modal" />
    <div class="container-fluid">
        <div class="row">
            <AnimationBox />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const AnimationBox = defineAsyncComponent(() => import("@/components/theme/advance/animation/AnimationBox.vue"))

</script>