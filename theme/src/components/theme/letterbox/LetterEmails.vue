<template>
    <div class="mail-body-wrapper">
        <div class="user-mail-wrapper">
            <div class="user-title">
                <div>
                    <div class="rounded-border"> <img class="img-fluid" src="@/assets/images/user/12.png" alt="user" />
                    </div>
                    <div class="dropdown-subtitle">
                        <p>Jacob Jones</p>
                        <div class="onhover-dropdown">
                            <button class="btn p-0 dropdown-button">To me <vue-feather type="chevron-down"></vue-feather>
                            </button>
                            <div class="inbox-security onhover-show-div">
                                <p>From : <span>jones &lt;jacobjones3@gmail.com&gt;</span></p>
                                <p>to : <span>donut.horry@gmail.com</span></p>
                                <p>reply-to :<span>&lt;jacobjones3@gmail.com&gt;</span></p>
                                <p>date : <span>Jul 13, 2024, 7:10 AM</span></p>
                                <p>subject : <span>Important Account Security Update</span></p>
                                <p>security : <span>standard encryption (TLS)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inbox-options"> <span>Friday 07 Apr (4 hours ago)</span>
                    <div class="light-square">
                        <svg class="important-mail" :class="[{ active: activeStars }]" @click=toggleStar()>
                            <use href="@/assets/svg/icon-sprite.svg#mail-star"></use>
                        </svg>
                    </div>
                    <div class="light-square" onclick="window.print();">
                        <svg>
                            <use href="@/assets/svg/icon-sprite.svg#print"></use>
                        </svg>
                    </div>
                    <div class="light-square btn-group">
                        <svg class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <use href="@/assets/svg/icon-sprite.svg#menubar"></use>
                        </svg>
                        <div class="dropdown-menu dropdown-block"><a class="dropdown-item" href="#!"><i
                                    class="fa fa-mail-reply"></i>Reply</a><a class="dropdown-item" href="#!"> <i
                                    class="fa fa-mail-forward"></i>Forward</a></div>
                    </div>
                </div>
            </div>
            <div class="user-body">
                <p v-for="(item, index) in user" :key="index">{{ item.title }}</p>
                <div class="mail-subcontent">
                    <p>Yours faithfully,</p>
                    <p>Account Security Team</p>
                </div>
            </div>
            <div class="user-footer">
                <div>
                    <svg>
                        <use href="@/assets/svg/icon-sprite.svg#attchment"></use>
                    </svg><span class="f-light">Attachments</span>
                </div>
                <div class="d-inline-block">
                    <div class="attchment-file common-flex">
                        <div class="common-flex align-items-center"><img src="@/assets/images/email-template/pdfs.png"
                                alt="pdf" />
                            <div class="d-block">
                                <p>Offer_Letter.pdf</p>
                                <p>200KB</p>
                            </div>
                        </div><a href="assets/pug/pages/theme/text_file.txt" download="download"> <i
                                class="fa fa-download f-light"></i></a>
                    </div>
                </div>
                <div class="toolbar-box">
                    <quill-editor v-model:value="state.content" :options="state.editorOption"
                        @change="onEditorChange($event)" />
                    <div id="editor"></div>
                </div>
            </div>
            <div class="send-btn">
                <button class="btn btn-primary">Send<i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { user } from "@/core/data/letter-box"
let activeStars = ref<boolean>(false)
const state = reactive({
    content: '', _content: '',
    editorOption: {
        placeholder: 'core',
    }, disabled: false
})
const onEditorChange = (html: string) => {
    state._content = html
}
setTimeout(() => {
    state.disabled = true
}, 2000)
function toggleStar() {
    activeStars.value = !activeStars.value;
}
</script>