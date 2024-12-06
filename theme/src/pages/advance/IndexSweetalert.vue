<template>
    <Breadcrumbs main="Bonus Ui" mains="Sweetalert2" title="Sweetalert2" />
    <div class="container-fluid">
        <div class="row">
            <BasicAlert />
            <AdvanceAlert />
            <UniqueAlert />
            <DirectionAlert />
            <InputAlert />
            <GithubRTLAlert />
            <SuccessMessage />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const BasicAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/BasicAlert.vue"))
const AdvanceAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/AdvanceAlert.vue"))
const UniqueAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/UniqueAlert.vue"))
const DirectionAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/DirectionAlert.vue"))
const InputAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/InputAlert.vue"))
const GithubRTLAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/GithubRTLAlert.vue"))
const SuccessMessage = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/SuccessMessage.vue"))
</script>