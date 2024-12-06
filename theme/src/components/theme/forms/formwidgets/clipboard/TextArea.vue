<template>
    <Card3 colClass="col-sm-12 col-md-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Clipboard on textarea">
        <div class="clipboaard-container">
            <p class="card-description mb-2">Cut/copy from textarea</p>
            <textarea class="form-control f-14" id="clipboardExample2" v-model="textArea" rows="3"
                spellcheck="false">They clash. Even if the argument appears to be different, it is actually always the same.</textarea>
            <div class="mt-3 text-end">
                <button class="btn btn-warning btn-clipboard mx-1" type="button" @click="copyTextareaInput"
                    data-clipboard-action="copy" data-clipboard-target="#clipboardExample2"><i class="fa fa-copy"></i>
                    Copy</button>
                <button class="btn btn-success btn-clipboard-cut" type="button" @click="cut" data-clipboard-action="cut"
                    data-clipboard-target="#clipboardExample2"><i class="fa fa-cut"></i>
                    Cut</button>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let textArea = ref<string>('They clash. Even if the argument appears to be different, it is actually always the same.')
function copyTextareaInput() {
    navigator.clipboard.writeText(textArea.value);
    alert('copied');
}
function cut() {
    navigator.clipboard.writeText(textArea.value);
    textArea.value = '';
    alert('cut');
}
</script>