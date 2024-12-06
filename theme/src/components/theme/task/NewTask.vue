<template>
    <div class="modal fade modal-bookmark" id="taskmodel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">Add Task</h3>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"> </button>
                </div>
                <div class="modal-body">
                    <form class="form-bookmark needs-validation" id="bookmark-form" novalidate
                        @submit.prevent="onCustomStyleSubmit">
                        <div class="row">
                            <div class="mb-3 mt-0 col-md-12">
                                <label for="task-title">Task Title</label>
                                <input class="form-control" id="task-title" type="text" required autocomplete="off"
                                    :class="formSubmitted ? titleError ? 'is-invalid' : 'is-valid' : ''" v-model="title">
                            </div>
                            <div class="mb-3 mt-0 col-md-12">
                                <label for="sub-task">Sub task</label>
                                <input class="form-control" id="sub-task" type="text" required autocomplete="off"
                                    v-bind:class="formSubmitted ? inputs.sub.errorMessage.length ? 'is-invalid' : 'is-valid' : ''"
                                    v-model="inputs.sub.data">
                            </div>
                            <div class="mb-3 mt-0 col-md-12">
                                <div class="d-flex date-details">
                                    <div class="d-inline-block">
                                        <label class="d-block mb-0">
                                            <input class="checkbox_animated" type="checkbox">Remind on
                                        </label>
                                    </div>
                                    <div class="d-inline-block">
                                        <input class="datepicker-here form-control digits" type="text" data-language="en"
                                            placeholder="Date"
                                            v-bind:class="formSubmitted ? dateError ? 'is-invalid' : 'is-valid' : ''">
                                    </div>
                                    <div class="d-inline-block">
                                        <select class="form-control"
                                            v-bind:class="formSubmitted ? selectError ? 'is-invalid' : 'is-valid' : ''">
                                            <option v-for="(value, index) in optionValues" :value="value"
                                                :key="value + index">{{ value }} am</option>
                                        </select>
                                    </div>
                                    <div class="d-inline-block">
                                        <label class="d-block mb-0">
                                            <input class="checkbox_animated" type="checkbox">Notification
                                        </label>
                                    </div>
                                    <div class="d-inline-block">
                                        <label class="d-block mb-0">
                                            <input class="checkbox_animated" type="checkbox">Mail
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3 mt-0 col-md-6">
                                <select class="js-example-basic-single form-control">
                                    <option value="task">My Task</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-0 col-md-6">
                                <select class="js-example-disabled-results form-control" id="bm-collection">
                                    <option value="general">General</option>
                                </select>
                            </div>

                            <div class="mb-3 col-md-12 my-0">
                                <textarea class="form-control" required autocomplete="off"
                                    v-bind:class="formSubmitted ? descError ? 'is-invalid' : 'is-valid' : ''"
                                    v-model="desc">  </textarea>
                            </div>
                        </div>
                        <input id="index_var" type="hidden" value="6">
                        <button class="btn btn-secondary" id="Bookmark" type="submit" @click="save()"
                            data-bs-dismiss="modal">Save</button>
                        <button class="btn btn-primary ms-1" type="button" data-bs-dismiss="modal">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onCustomStyleSubmit, inputs, optionValues } from "@/composables/taskvalidation"
import { ref } from "vue";
import { useTaskStore } from "@/store/task"
const store = useTaskStore()
let task = store.task
let add = ref<boolean>(false)
let title = ref<string>('')
let desc = ref<string>('')
let titleError = ref<boolean>(false)
let descError = ref<boolean>(false)
let formSubmitted = ref<boolean>(false)
let errors = ref<string | number[]>([])
function save() {
    formSubmitted.value = true;
    errors.value = [];
    if (title.value.length < 5 || desc.value.length < 5) {
        titleError.value = true; descError.value = true;
        errors.value.push();
    } else {
        titleError.value = false; descError.value = false;
        errors.value.push();
        const arr = {
            title: title.value,
            desc: desc.value
        }
        task.push(arr)
        add.value = false
    }
}
</script>