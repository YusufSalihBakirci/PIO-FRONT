<template>
    <Breadcrumbs main="Apps" mains="To-Do" title="To-Do" />
    <div class="container-fluid email-wrap bookmark-wrap todo-wrap">
        <div class="row">
            <TodoSidebar />
            <AddTask />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const TodoSidebar = defineAsyncComponent(() => import("@/components/theme/todo/TodoSidebar.vue"))
const AddTask = defineAsyncComponent(() => import("@/components/theme/todo/AddTask.vue"))

</script>