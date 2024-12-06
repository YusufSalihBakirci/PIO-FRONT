<template>
    <Card3 colClass="col-lg-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Default File Upload" desc="We use the create method to turn a<code>[https://pqina.nl/filepond/]</code>">
        <DropZone :maxFileSize="Number(60000000)" class="show-preview" :uploadOnDrop="true" :multipleUpload="true"
            :parallelUpload="2" />
    </Card3>
</template>
<script lang="ts" setup>
import DropZone from "dropzone-vue";
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>