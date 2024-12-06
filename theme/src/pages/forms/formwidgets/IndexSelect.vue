<template>
    <Breadcrumbs main="Form Controls" mains="Select2" title="Select2" />
    <div class="container-fluid">
        <div class="select2-drpdwn">
            <div class="row">
                <SelectView />
                <OutlineColor />
                <FullColored />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const SelectView = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/select2/SelectView.vue"))
const OutlineColor = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/select2/OutlineColor.vue"))
const FullColored = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/select2/FullColored.vue"))
</script>