<template>
    <Breadcrumbs main="Search Pages" mains="Search Website" title="Search Website" />
    <div class="container-fluid search-page">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <SearchBar />
                    <SearchTab />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const SearchBar = defineAsyncComponent(() => import("@/components/theme/search/SearchBar.vue"))
const SearchTab = defineAsyncComponent(() => import("@/components/theme/search/SearchTab.vue"))
</script>