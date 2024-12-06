<template>
    <Breadcrumbs main="Data Tables" mains="Basic DataTables" title="Basic DataTables" />
    <div class="container-fluid">
        <div class="row">
            <ZeroConfiguration />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const ZeroConfiguration = defineAsyncComponent(() => import("@/components/theme/table/basicinit/ZeroConfiguration.vue"))
</script>