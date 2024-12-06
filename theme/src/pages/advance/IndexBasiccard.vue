<template>
    <Breadcrumbs main="Bonus Ui" mains="Basic Card" title="Basic Card" />
    <div class="container-fluid">
        <div class="row">
            <BasicFlat />
            <ShadowCard />
            <IconCard />
            <DarkCard />
            <FooterCard />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicFlat = defineAsyncComponent(() => import("@/components/theme/advance/basic/BasicFlat.vue"))
const ShadowCard = defineAsyncComponent(() => import("@/components/theme/advance/basic/ShadowCard.vue"))
const IconCard = defineAsyncComponent(() => import("@/components/theme/advance/basic/IconCard.vue"))
const DarkCard = defineAsyncComponent(() => import("@/components/theme/advance/basic/DarkCard.vue"))
const FooterCard = defineAsyncComponent(() => import("@/components/theme/advance/basic/FooterCard.vue"))
</script>