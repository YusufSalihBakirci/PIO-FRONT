<template>
    <div class="fade tab-pane" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab">
        <div class="card mb-0">
            <div class="card-header d-flex  card-no-border pb-0">
                <h3 class="mb-0">My tasks</h3><a @click="printWindow()"><vue-feather class="me-2"
                        type="printer"></vue-feather>Print</a>
            </div>
            <div class="card-body p-0">
                <div class="taskadd">
                    <div class="table-responsive theme-scrollbar">
                        <table class="table">
                            <tbody>
                                <tr v-for="(row, index) in task" :key="index">
                                    <td>
                                        <h5 class="f-w-700 task_title_0">{{ row.title }}</h5>
                                        <p class="project_name_0">General</p>
                                    </td>
                                    <td>
                                        <p class="task_desc_0">{{ row.desc }}</p>
                                    </td>
                                    <td><a class="me-2" href="javascript:void(0)"><vue-feather
                                                type="link"></vue-feather></a><a href="javascript:void(0)"><vue-feather
                                                type="more-horizontal"></vue-feather></a>
                                    </td>
                                    <td><a href="javascript:void(0)"><vue-feather type="trash-2"
                                                @click='removeProduct(index)'></vue-feather></a></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useTaskStore } from "@/store/task"
import Swal from 'sweetalert2'
const store = useTaskStore()
let task = store.task

function removeProduct(index: any) {
    Swal.fire({
        icon: 'warning',
        title: "Are you sure?",
        text: 'This Task will be deleted from your Personal task ',
        showCancelButton: true,
        cancelButtonText: 'Cancel', confirmButtonText: 'Ok', confirmButtonColor: 'var(--theme-default)',
    }).then((result: any) => {
        if (result.value) {
            task.splice(index, 1)
            Swal.fire({
                icon: 'success',
                text: 'Poof! Your imaginary file has been deleted!',
                confirmButtonColor: 'var(--theme-default)',
            });
        } else {
            Swal.fire({
                text: 'Your contact is safe!', confirmButtonColor: 'var(--theme-default)',
            });
        }
    });
}
function printWindow() {
    window.print();
}
</script>