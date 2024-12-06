<template>
    <Breadcrumbs main="App" mains="Kanbar Board" title="Kanbar Board" />
    <div class="container-fluid jkanban-container">
        <div class="row">
            <DefaultDemo />
            <CustomDome />
            <ApiDome />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const DefaultDemo = defineAsyncComponent(() => import("@/components/theme/kanbanboard/DefaultDemo.vue"))
const CustomDome = defineAsyncComponent(() => import("@/components/theme/kanbanboard/CustomDome.vue"))
const ApiDome = defineAsyncComponent(() => import("@/components/theme/kanbanboard/ApiDome.vue"))
</script>