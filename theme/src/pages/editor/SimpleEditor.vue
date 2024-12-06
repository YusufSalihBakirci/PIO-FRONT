<template>
    <Breadcrumbs main="Editor" mains="Simple Editor" title="Simple Editor" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-sm-12" title="Simple Editor" headerTitle="true" cardhaderClass="card-no-border pb-0">
                <quill-editor v-model:value="state.content" :options="state.editorOption"
                    @change="onEditorChange($event)" />
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent } from 'vue';

let Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const state = reactive({
    content: '<p>As a <strong>web designer</strong>, your role is crucial in creating visually appealing and user-friendly websites. You are responsible for designing the layout, selecting color schemes, and creating an intuitive user interface. You work closely with clients to understand their requirements and translate them into stunning website designs. Your expertise lies in using HTML, CSS, and JavaScript to bring these designs to life. You pay attention to detail, ensuring that every element is pixel-perfect and responsive across different devices.</p> <ol><li>Artist</li><li>Developer</li><li>Musician</li></ol> <ul><li>Web-designer</li><li>UI-UX designer</li><li>Software engineer</li></ul>',
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