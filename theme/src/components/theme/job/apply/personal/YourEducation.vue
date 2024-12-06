<template>
    <h3 class="mb-0">Your Education</h3>
    <form class="form theme-form">
        <div class="row">
            <div class="col-xl-6 xl-100">
                <div class="mb-3">
                    <label class="form-label" for="exampleFormControlInput5">College Name:<span
                            class="font-danger">*</span></label>
                    <input class="form-control" id="exampleFormControlInput5" type="text" placeholder="Enter college name">
                </div>
            </div>
            <DateView />
            <div class="col-xl-6 xl-100">
                <div class="mb-3">
                    <label class="form-label">Degree Level:<span class="font-danger">*</span></label>
                    <multiselect v-model="multiValue1" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                        label="name" track-by="code" :options="options1" :multiple="false" :taggable="true"></multiselect>
                </div>
            </div>
            <div class="col-xl-6 xl-100">
                <div class="mb-3">
                    <label class="form-label" for="exampleFormControlInput6">Specialization:<span
                            class="font-danger">*</span></label>
                    <input class="form-control" id="exampleFormControlInput6" type="text"
                        placeholder="Enter specialization">
                </div>
            </div>
        </div>
    </form>
    <h3 class="mb-0">Your Experience</h3>
    <form class="form theme-form">
        <div class="row">
            <div class="col-xl-6 xl-100">
                <div class="mb-3">
                    <label class="form-label" for="exampleFormControlInput7">Location:<span
                            class="font-danger">*</span></label>
                    <input class="form-control" id="exampleFormControlInput7" type="text" placeholder="Enter Location">
                </div>
            </div>
            <div class="col-xl-6 xl-100 xl-mt-job">
                <label class="col-form-label text-end pt-0">Period:<span class="font-danger">*</span></label>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="input-group">
                            <Datepicker class="" v-model="date" />
                        </div>
                    </div>
                    <div class="col-sm-6 xs-mt-period">
                        <div class="input-group">
                            <Datepicker class="" v-model="date1" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 xl-100">
                <div class="mb-3">
                    <label class="form-label">Position:<span class="font-danger">*</span></label>
                    <multiselect v-model="multiValue" tag-placeholder="Add this as new tag" placeholder="Select Your Name"
                        label="name" track-by="code" :options="options" :multiple="false" :taggable="true"></multiselect>
                </div>
            </div>
            <div class="col-xl-6 xl-100">
                <div class="mb-3">
                    <label class="form-label" for="exampleFormControlInput8">Company Name:<span
                            class="font-danger">*</span></label>
                    <input class="form-control" id="exampleFormControlInput8" type="text" placeholder="Enter Company Name">
                </div>
            </div>
        </div>
    </form>
</template>
<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent } from "vue"
const DateView = defineAsyncComponent(() => import("@/components/theme/job/apply/personal/DateView.vue"))
interface multi {
    code: number,
    name: string
}
let date = ref<Date | null>(null);
let date1 = ref<Date | null>(null);
let multiValue = ref<multi[]>([{ code: 1, name: 'Choose a option' },])
let multiValue1 = ref<multi[]>([{ code: 1, name: 'Student' },])
let options = ref<multi[]>([
    { code: 1, name: 'Choose a option' },
    { code: 2, name: 'Web Designer' },
    { code: 3, name: 'Graphic Designer' },
    { code: 4, name: 'UI Designer' },
    { code: 5, name: 'UI/UX Designer' },
])
let options1 = ref<multi[]>([
    { code: 1, name: 'Student' },
    { code: 2, name: 'Bachelor' },
    { code: 3, name: 'Master' },
    { code: 4, name: 'Associate' },
])
</script>