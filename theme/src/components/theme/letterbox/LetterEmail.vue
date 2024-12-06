<template>
    <div class="modal fade" id="compose_mail" tabindex="-1" aria-labelledby="compose_mailLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="compose_mailLabel">Compose Message</h1>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body compose-modal">
                    <form>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label" for="composeFrom">From :</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="composeFrom" type="email" v-model="name" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label" for="composeTo">To :</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="composeTo" type="email" />
                                <div class="add-bcc">
                                    <div class="d-flex gap-2"><a class="btn" data-bs-toggle="collapse" href="#collapseCc"
                                            role="button" aria-expanded="false" aria-controls="collapseCc">Cc </a><a
                                            class="btn" data-bs-toggle="collapse" href="#collapseBcc" role="button"
                                            aria-expanded="false" aria-controls="collapseBcc">Bcc</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse row mb-3" id="collapseCc">
                            <label class="col-sm-2 col-form-label" for="composeTo">Cc:</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="composeTo" type="email" />
                            </div>
                        </div>
                        <div class="collapse row mb-3" id="collapseBcc">
                            <label class="col-sm-2 col-form-label" for="composeTo">Bcc:</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="composeTo" type="email" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label" for="composeSubject">Subject :</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="composeSubject" type="email" />
                            </div>
                        </div>
                        <div class="toolbar-box">
                            <quill-editor v-model:value="state.content" :options="state.editorOption"
                                @change="onEditorChange($event)" />
                            <div id="editor1"></div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light" type="button">Save as draft</button>
                    <button class="btn btn-primary" type="button" data-bs-dismiss="modal"
                        @click="submitBookmark()">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, } from "vue"
import { reactive, } from 'vue'
import { inbox } from "@/core/data/letter-box"
let name = ref<string>('')
let formSubmitted = ref<boolean>(false)
let errors = ref<string | number[]>([])
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
function submitBookmark() {
    formSubmitted.value = true;
    errors.value = [];
    if (name.value.length < 5) {
        errors.value.push();
    } else {
        errors.value.push();
        const arr =
        {
            id: 1, badgeclass: "badge-light-primary",
            badge: "new", time: "2:30 PM",
            name: name.value, img: "user/6.jpg",
            desctitle: "New comments on MSR2024 draft presentation -", desc: "New Here's a list of all the topic challenges...",
        }
        inbox.push(arr);
    }
}
</script>