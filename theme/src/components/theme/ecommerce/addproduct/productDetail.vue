<template>
    <div class="tab-pane fade show active" id="detail-product" role="tabpanel" aria-labelledby="detail-product-tab">
        <div class="sidebar-body">
            <form class="row g-2">
                <label class="form-label col-12 m-0" for="validationServer01">Product Title <span class="txt-danger">
                        *</span></label>
                <div class="col-12 custom-input">
                    <input class="form-control is-invalid" id="validationServer01" type="text" required>
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">A product name is required and recommended to be unique.</div>
                </div>
                <div class="col-12">
                    <div class="toolbar-box">
                        <quill-editor v-model:value="state.content" :options="state.editorOption"
                            @change="onEditorChange($event)" />
                    </div>
                    <p class="f-light">Improve product visibility by adding a compelling description.</p>
                </div>
            </form>
            <div class="product-buttons">
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
import { reactive} from 'vue'
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