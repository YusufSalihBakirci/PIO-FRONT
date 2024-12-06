<template>
    <div class="row">
        <label class="form-label">Birth Date</label>
        <div class="col-sm-4">
            <div class="mb-3">
                <multiselect v-model="multiValue" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                    label="name" track-by="code" :options="options" :multiple="false" :taggable="true">
                </multiselect>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3">
                <multiselect v-model="Value" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                    label="name" track-by="code" :options="options1" :multiple="false" :taggable="true">
                </multiselect>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="mb-3">
                <multiselect v-model="Value1" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                    label="name" track-by="code" :options="options2" :multiple="false" :taggable="true">
                </multiselect>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { options, options1, options2 } from "@/core/data/job"
interface multi {
    code: number,
    name: string
}
const multiValue = ref<multi[]>([{ code: 1, name: 'January' }])
const Value = ref<multi[]>([{ code: 1, name: '1' }])
const Value1 = ref<multi[]>([{ code: 1, name: '1985' }])

</script>