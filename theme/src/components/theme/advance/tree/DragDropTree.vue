<template>
    <Card3 colClass="col-sm-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Draggable Tree" desc="Use the dynamic tree view with checkboxes. ">
        <div class="disabled-container">
            <treeview :nodes="nodes2" :config="config2"></treeview>


        </div>
    </Card3>
</template>
<script lang="ts" setup>
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";
import { defineAsyncComponent, ref } from 'vue'
import { nodes2, config2 } from "@/composables/common/treeView"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>