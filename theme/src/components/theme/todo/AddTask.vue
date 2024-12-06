<template>
    <div class="col-xl-9 xl-70 box-col-12">
        <div class="card">
            <div class="card-header b-bottom card-no-border pb-0">
                <div class="todo-list-header">
                    <div class="new-task-wrapper input-group">
                        <input class="form-control" id="new-task" placeholder="Enter new task here. . ."
                            v-on:keyup.enter="addnewtask" v-model="task"><span class="btn btn-primary add-new-task-btn"
                            id="add-task" @click="addnewtask()">Add Task</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="todo">
                    <div class="todo-list-wrapper">
                        <div class="todo-list-container">
                            <div class="todo-list-body custom-scrollbar">
                                <ul id="todo-list">
                                    <li v-for="(todo, index) in todolist" :key="index" class="task"
                                        :class="{ 'completed': todo.status == 'complete' }">
                                        <div class="task-container">
                                            <h4 class="task-label"> {{ todo.title }} </h4>
                                            <div class="d-flex align-items-center gap-3">
                                                <span class="badge " :class="todo.badgeClass">{{
                                                    todo.priority
                                                }}</span>
                                                <h5 class="assign-name m-0" @click="taskcomplete(todo.id, todo.status)">
                                                    {{ todo.date }}</h5>
                                                <span class="task-action-btn">
                                                    <span class="action-box large delete-btn" title="Delete Task"
                                                        @click="remove(index)"><i class="icon"><i
                                                                class="icon-trash"></i></i></span>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="notification-popup hide">
                        <p><span class="task"></span><span class="notification-text"></span></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useTodoStore } from "@/store/todo"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref } from "vue"
let task = ref<string>('')
let addtask = ref<boolean>(false)
let store = useTodoStore()
let todolist = store.todo
function addnewtask() {
    if (task.value !== '') {
        store.addtodo(task);
        task.value = '';
        addtask.value = false;
        toast.success(' Task list is updated.', {
            hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
        });
    }

}
function taskcomplete(id: number, status: string) {
    store.taskcomplete(id);
    if (status !== '') {
        toast.success(' tasks marked as complete. ', {
            hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
        });
    }
    else {
        toast.error(' tasks marked as incomplete.', {
            hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
        });
    }

}
function remove(index: number) {
    store.tododelete(index);

    toast.error(' Task has been deleted.', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
    });
}

</script>