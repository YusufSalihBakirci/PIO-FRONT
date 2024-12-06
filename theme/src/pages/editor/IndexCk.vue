<template>
    <Breadcrumbs main="Editor" mains="Ck Editor" title="Ck Editor" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="Ck Editor" headerTitle="true">
                <ckeditor :editor="editor" v-model="editorData">

                </ckeditor>
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
let Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const ckeditor = CKEditor.component
const editor = ClassicEditor
const editorData = ref<string>('<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>')
</script>