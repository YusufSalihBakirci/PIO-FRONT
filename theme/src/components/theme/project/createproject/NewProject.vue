<template>
    <div class="form theme-form basic-form">
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <h5 class="f-w-600 mb-2">Project Title</h5>
                    <input class="form-control" type="text" :class="inputclasses" placeholder="Project name *"
                        v-model="title" @input="validated($event.target.value)">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <h5 class="f-w-600 mb-2">Client name</h5>
                    <input class="form-control" v-model="sites" @input="validated($event.target.value)"
                        :class="inputclasses" type="text" placeholder="Name client or company name">
                </div>
            </div>
        </div>
        <projectRate />
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <h5 class="f-w-600 mb-2">Enter some Details</h5>
                    <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" v-model="desc"
                        @input="update($event.target.value)"></textarea>
                </div>
            </div>
        </div>
        <uploadProject />
        <div class="row">
            <div class="col">
                <div class="text-end"><a class="btn btn-success me-3" target="_blank" @click="add()">Add</a><a
                        class="btn btn-danger" href="#">Cancel</a></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { all } from "@/core/data/project"
import { inputclasses, itemclasses } from "@/composables/createProject"
import { useRouter } from 'vue-router'
const projectRate = defineAsyncComponent(() => import("@/components/theme/project/createproject/ProjectRate.vue"))
const uploadProject = defineAsyncComponent(() => import("@/components/theme/project/createproject/UploadProject.vue"))
let formSubmitted = ref<boolean>(false)
let titleError = ref<boolean>(false)
let descError = ref<boolean>(false)
let errors = ref<string | number[]>([])
let title = ref<string>("")
let desc = ref<string>("")
let sites = ref<string>("")
let allprojects = ref()
let router = useRouter()
function add() {
    formSubmitted.value = true;
    errors.value = [];
    if (title.value.length < 5 || desc.value.length < 5) {
        titleError.value = true; descError.value = true;
        errors.value.push();
    } else {
        titleError.value = false; descError.value = false;
        errors.value.push();
        const arr = {
            id: 1,
            title: title.value, badge: "Doing", box: "bg-light-danger",
            type: "danger progress-bar-striped", font: "danger",
            img: "user/3.jpg", sites: sites.value,
            desc: desc.value, issue: "12", resolved: "5",
            comment: "7", like: "+10",
            progress: "70", customers_img1: "user/3.jpg",
            customers_img2: "user/5.jpg", customers_img3: "user/1.jpg"
        }
        allprojects.value.push(arr)
        router.replace('/project/project_list');
    }
}
function validated() {
    if (title.value.length < 5) {
        inputclasses.value = 'is-invalid'
    }
    else {
        inputclasses.value = 'is-valid'
    }
}
function update() {
    if (desc.value.length < 4) {
        itemclasses.value = 'is-invalid'
    }
    else {
        itemclasses.value = 'is-valid'
    }
}
onMounted(() => {
    try {
        allprojects.value = all;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});
</script>