<template>
    <div class="tab-pane fade" id="gallery-product" role="tabpanel" aria-labelledby="gallery-product-tab">
        <div class="sidebar-body">
            <div class="product-upload">
                <p>Product Image </p>
                <form class="dropzone dropzone-light " id="multiFileUpload" action="/upload.php">
                    <div class="dz-message needsclick">
                        <DropZone :maxFileSize="Number(60000000)" :uploadOnDrop="true">
                        </DropZone>

                    </div>
                </form>
            </div>
            <div class="product-upload">
                <p>Product Gallery</p>
                <form class="dropzone dropzone-light " id="multiFileUpload" action="/upload.php">
                    <div class="dz-message needsclick">
                        <DropZone :maxFileSize="Number(60000000)" :uploadOnDrop="true">
                        </DropZone>
                    </div>
                </form>
            </div>
            <div class="product-buttons">
                <button class="btn me-1">
                    <div class="d-flex align-items-center gap-sm-2 gap-1">
                        <svg>
                            <use href="@/assets/svg/icon-sprite.svg#back-arrow"></use>
                        </svg>Previous
                    </div>
                </button>
                <button class="btn">
                    <div class="d-flex align-items-center gap-sm-2 gap-1">Next
                        <svg>
                            <use href="@/assets/svg/icon-sprite.svg#front-arrow"> </use>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import DropZone from "dropzone-vue";
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>