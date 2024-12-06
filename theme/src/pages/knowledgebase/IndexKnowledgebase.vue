<template>
    <Breadcrumbs main="Knowledgebase" mains="Knowledgebase" title="Knowledgebase" />
    <div class="container-fluid">
        <div class="row">
            <KnowledgebaseSearch />
            <FaqWidgets />
            <BrowseArticles />
            <FeaturesFaq />
            <LatestArticles />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const KnowledgebaseSearch = defineAsyncComponent(() => import("@/components/theme/knowledgebase/KnowledgebaseSearch.vue"))
const FaqWidgets = defineAsyncComponent(() => import("@/components/theme/knowledgebase/FaqWidgets.vue"))
const BrowseArticles = defineAsyncComponent(() => import("@/components/theme/knowledgebase/BrowseArticles.vue"))
const FeaturesFaq = defineAsyncComponent(() => import("@/components/theme/knowledgebase/FeaturesFaq.vue"))
const LatestArticles = defineAsyncComponent(() => import("@/components/theme/knowledgebase/LatestArticles.vue"))
</script>