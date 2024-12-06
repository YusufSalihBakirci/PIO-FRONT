<template>
    <div class="tab-pane fade" id="additional-option" role="tabpanel" aria-labelledby="additional-option-tab">
        <div class="meta-body">
            <form>
                <div class="row g-3">
                    <div class="col-12">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="row custom-input">
                                    <div class="col-12">
                                        <label class="form-label" for="validationServer01">Additional Tag Title</label>
                                    </div>
                                    <div class="col-12">
                                        <input class="form-control" id="validationServer01" type="text">
                                        <p class="f-light">Add a new tag title. Keywords should be simple and accurate.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row product-tag">
                                    <label class="form-label col-12" for="validationServer01">Specific Tags</label>
                                    <div class="col-12">
                                        <vue3-tags-input :tags="options" placeholder="input tags" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <label class="form-label col-12" for="validationServer01">Additional
                                            Description</label>
                                        <div class="toolbar-box">
                                            <quill-editor v-model:value="state.content" :options="state.editorOption"
                                                @change="onEditorChange($event)" />
                                        </div>
                                        <p class="f-light">Enhance your SEO ranking with an added tag description for the
                                            product.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <use href="@/assets/svg/icon-sprite.svg#front-arrow"></use>
                            </svg>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, } from 'vue'
import Vue3TagsInput from 'vue3-tags-input';
let options = ['watches', 'sports', 'clothes', 'bottles']
const state = reactive({
    content: '',
    _content: '',
    editorOption: {
        placeholder: 'core',
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