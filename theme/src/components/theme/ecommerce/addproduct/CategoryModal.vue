<template>
    <div class="modal fade" id="category-pill-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5">Create new category</h3>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body custom-input">
                    <div class="create-category">
                        <div>
                            <label class="form-label" for="categoryName">Category Name <span class="text-danger">
                                    *</span></label>
                            <input class="form-control m-0" id="categoryName" type="text" required />
                            <div class="toolbar-box">
                                <quill-editor v-model:value="state.content" :options="state.editorOption"
                                    @change="onEditorChange($event)" />
                                <div id="editor3"></div>
                            </div>
                        </div>
                        <p>Improve product visibility by adding a compelling description.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light font-dark" type="button" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" type="button">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const state = reactive({
    content: '',
    _content: '',
    editorOption: {
        placeholder: 'Enter Your messages...',
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