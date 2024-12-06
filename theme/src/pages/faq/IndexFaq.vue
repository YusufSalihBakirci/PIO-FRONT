<template>
    <Breadcrumbs main="FAQ" mains="FAQ" title="FAQ" />
    <div class="container-fluid">
        <div class="faq-wrap">
            <div class="row">
                <FaqWidgets />
                <FaqAccordion />
                <FeaturedTutorial />
                <FaqArticles />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const FaqWidgets = defineAsyncComponent(() => import("@/components/theme/faq/FaqWidgets.vue"))
const FaqAccordion = defineAsyncComponent(() => import("@/components/theme/faq/FaqAccordion.vue"))
const FeaturedTutorial = defineAsyncComponent(() => import("@/components/theme/faq/FeaturedTutorial.vue"))
const FaqArticles = defineAsyncComponent(() => import("@/components/theme/faq/FaqArticles.vue"))
</script>