<template>
    <Card3 colClass="col-md-12" cardbodyClass=" overflow-hidden" cardhaderClass="card-no-border pb-0" cardheaderClass="pb-0"
        headerTitle="true" title="Select-2">
        <div class="mb-2">
            <div class="col-form-label">Default Placeholder</div>
            <multiselect v-model="multiValue" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                label="name" track-by="code" :options="options" :multiple="true" :taggable="true"></multiselect>
        </div>
        <div class="mb-2">
            <div class="col-form-label">Select2 single select</div>
            <multiselect v-model="Value" :options="options1" :searchable="false" group-values="libs" group-label="language"
                :group-select="true" :close-on-select="false" track-by="name" label="name" placeholder="Pick a value">
            </multiselect>
        </div>
        <div class="mb-2">
            <label class="col-form-label">Select2 multi select</label>
            <multiselect v-model="multiValue3" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                label="name" track-by="code" :options="options" :multiple="true" :taggable="true"></multiselect>
        </div>
        <div class="mb-2">
            <label class="col-form-label">RTL support</label>
            <multiselect v-model="multiValue2" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                label="name" track-by="code" :options="options" :multiple="true" dir="rtl" :taggable="true">
            </multiselect>
        </div>
        <div class="mb-2">
            <label class="col-form-label">Limiting The Number Of Selections</label>
            <multiselect v-model="multiValue1" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                label="name" track-by="code" :options="options" :multiple="true" :taggable="true"></multiselect>
        </div>
        <div class="mb-2">
            <label class="col-form-label">Disabled Results</label>
            <multiselect v-model="value" :options="options4" :searchable="false" :group-select="true"
                :close-on-select="false" track-by="name" label="name" placeholder="Pick a value"></multiselect>
        </div>
        <SearchBox />
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const SearchBox = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/select2/SearchBox.vue"))
interface multi {
    code: number,
    name: string,
}
interface open {
    language: string,
    libs: lib[]
}
interface lib {
    name: string, category: string
}
let multiValue = ref<number[]>([])
let multiValue1 = ref<number[]>([])
let multiValue2 = ref<number[]>([])
let multiValue3 = ref<number[]>([])
let Value = ref<number[]>([])
let value = ref<number[]>([])
let options = ref<multi[]>([
    { code: 1, name: 'Alabama' },
    { code: 2, name: 'Wyoming' },
    { code: 3, name: 'Coming' },
    { code: 4, name: 'Hanry Die' },
    { code: 5, name: 'John Doe' }
])
let options1 = ref<open[]>([
    {
        language: 'Developer',
        libs: [
            { name: 'Alabama', category: 'Front-end' },
            { name: 'Wyoming', category: 'Backend' }
        ]
    },
    {
        language: 'Designer',
        libs: [
            { name: 'Peter', category: 'Backend' },
            { name: 'Hanry Die', category: 'Backend' },
            { name: 'John Doe', category: 'Backend' }
        ]
    },
])
let options4 = ref<multi[]>([{ code: 1, name: 'First' }, { code: 2, name: "second(disable)" }, { code: 3, name: "Third" }])
</script>