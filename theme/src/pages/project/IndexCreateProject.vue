<template>
    <Breadcrumbs main="Project" mains="Project Create" title="Project Create" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-sm-12">
                <NewProject />
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const NewProject = defineAsyncComponent(() => import("@/components/theme/project/createproject/NewProject.vue"))
</script>