<template>
    <Card3 colClass="col-sm-12 col-md-6" headerTitle="true" cardhaderClass="card-no-border pb-0"
        title="Clipboard on text input">
        <div class="clipboaard-container">
            <p class="card-description mb-2">Cut/copy from text input</p>
            <input class="form-control" id="clipboardExample1" v-model="textInput" type="text"
                placeholder="type some text to copy / cut">
            <div class="mt-3 text-end">
                <button class="btn btn-primary btn-clipboard mx-1" type="button" data-clipboard-action="copy"
                    data-clipboard-target="#clipboardExample1" @click="copyTextInput"><i class="fa fa-copy"></i>
                    Copy</button>
                <button class="btn btn-secondary btn-clipboard-cut" type="button" data-clipboard-action="cut"
                    data-clipboard-target="#clipboardExample1" @click="cut"><i class="fa fa-cut"></i> Cut</button>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let textInput = ref<string>('')
function copyTextInput() {
    navigator.clipboard.writeText(textInput.value);
    alert('copied');
}
function cut() {
    navigator.clipboard.writeText(textInput.value);
    textInput.value = '';
    alert('cut');
}
</script>