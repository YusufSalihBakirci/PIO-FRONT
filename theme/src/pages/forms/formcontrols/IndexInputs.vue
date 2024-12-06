<template>
    <Breadcrumbs main="Form Controls" mains="Base Inputs" title="Base Inputs" />
    <div class="container-fluid">
        <div class="row">
            <SimpleInput />
            <SizingInput />
            <BasicInput />
            <FlatStyle />
            <EdgesStyle />
            <RaiseStyle />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const SimpleInput = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/input/SimpleInput.vue"))
const SizingInput = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/input/SizingInput.vue"))
const BasicInput = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/input/BasicInput.vue"))
const FlatStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/input/FlatStyle.vue"))
const EdgesStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/input/EdgesStyle.vue"))
const RaiseStyle = defineAsyncComponent(() => import("@/components/theme/forms/formcontrol/input/RaiseStyle.vue"))
</script>