<template>
    <Breadcrumbs main="Pages" mains="Internationalization" title="Internationalization" />
    <div class="container-fluid">
        <div class="row">
            <LanguageInternationa />
            <LanguagePicker />
            <LanguageView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const LanguageInternationa = defineAsyncComponent(() => import("@/components/theme/internationalization/LanguageInternationa.vue"))
const LanguagePicker = defineAsyncComponent(() => import("@/components/theme/internationalization/LanguagePicker.vue"))
const LanguageView = defineAsyncComponent(() => import("@/components/theme/internationalization/LanguageView.vue"))
</script>