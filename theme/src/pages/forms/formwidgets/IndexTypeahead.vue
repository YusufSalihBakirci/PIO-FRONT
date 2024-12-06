<template>
    <Breadcrumbs main="Form Controls" mains="Typeahead" title="Typeahead" />
    <div class="container-fluid typeahead-page">
        <div class="typeahead">
            <div class="row">
                <BasicTypeahead />
                <PrefetchTypeahead />
                <BloodhoundTyeahead />
                <RemoteTypeahead />
                <CustomTemplates />
                <MultipleSections />
                <ScrollableMenu />
                <RtlSupport />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const BasicTypeahead = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/BasicTypeahead.vue"))
const PrefetchTypeahead = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/PrefetchTypeahead.vue"))
const BloodhoundTyeahead = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/BloodhoundTyeahead.vue"))
const RemoteTypeahead = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/RemoteTypeahead.vue"))
const CustomTemplates = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/CustomTemplates.vue"))
const MultipleSections = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/MultipleSections.vue"))
const ScrollableMenu = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/ScrollableMenu.vue"))
const RtlSupport = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/typeahead/RtlSupport.vue"))
</script>