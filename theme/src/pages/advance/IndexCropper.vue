<template>
    <Breadcrumbs main="Bonus Ui" mains="Image Cropper" title="Image Cropper" />
    <div class="container-fluid">
        <div class="img-cropper">
            <ImageCropper />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const ImageCropper = defineAsyncComponent(() => import("@/components/theme/advance/cropper/ImageCropper.vue"))
</script>