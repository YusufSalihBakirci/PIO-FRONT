<template>
    <Card3 colClass="col-sm-12 " cardbodyClass="add-post" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Post Edit">
        <form class="row needs-validation" novalidate>
            <div class="col-sm-12">
                <div class="mb-3">
                    <label class="mb-2" for="validationCustom01">Title:</label>
                    <input class="form-control" id="validationCustom01" type="text" placeholder="Post Title" required>
                    <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="mb-3">
                    <label class="mb-2">Type:</label>
                    <div class="m-checkbox-inline">
                        <label for="edo-ani">
                            <input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked>Text
                        </label>
                        <label for="edo-ani1">
                            <input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani">Image
                        </label>
                        <label for="edo-ani2">
                            <input class="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" checked>Audio
                        </label>
                        <label for="edo-ani3">
                            <input class="radio_animated" id="edo-ani3" type="radio" name="rdo-ani">Video
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="col-form-label mb-2">Category:</div>
                    <multiselect class="col-sm-12" v-model="multiValue" tag-placeholder="Add this as new tag"
                            placeholder="Select Your Name" label="name" track-by="code" :options="options" :multiple="true"
                            :taggable="true"></multiselect>
                </div>
                <div class="email-wrapper">
                    <div class="theme-form">
                        <div class="mb-3">
                            <label class="mb-2">Content:</label>
                            <quill-editor v-model:value="state.content" :options="state.editorOption"
                                @change="onEditorChange($event)" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <form class="dropzone " id="singleFileUpload" action="/upload.php">
            <DropZone :maxFileSize="Number(60000000)" :uploadOnDrop="true">
            </DropZone>
        </form>
        <div class="btn-showcase text-end blog-btn">
            <button class="btn btn-primary" type="submit">Post</button>
            <input class="btn btn-light font-dark" type="reset" value="Discard">
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"
import { defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
import DropZone from "dropzone-vue";
interface multi {
    code: number,
    name: string
}

const multiValue = ref<object[]>([])
const options = ref<multi[]>([
    { code: 1, name: 'Lifestyle' },
    { code: 2, name: 'Travel' },
    { code: 3, name: 'Food' },
    { code: 4, name: 'Beauty' },
])
const state = reactive({
    content: '',
    _content: '',
    editorOption: {
        placeholder: '',
    },
    disabled: false
})
const onEditorChange = (html: string) => {

    state._content = html
}
setTimeout(() => {
    state.disabled = true
}, 2000)
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>