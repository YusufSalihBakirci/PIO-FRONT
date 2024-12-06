<template>
    <Breadcrumbs main="Form Controls" mains="Clipboard" title="Clipboard" />
    <div class="container-fluid">
        <div class="row">
            <TextInput />
            <TextArea />
            <ParaGraph />
            <CopyPortion />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const TextInput = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/clipboard/TextInput.vue"))
const TextArea = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/clipboard/TextArea.vue"))
const ParaGraph = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/clipboard/ParaGraph.vue"))
const CopyPortion = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/clipboard/CopyPortion.vue"))
</script>