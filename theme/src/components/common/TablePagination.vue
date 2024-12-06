<template>
    <ul class="pagination my-2 justify-content-end pagination-primary">
        <li class="page-item"> <a class="page-link" @click="prev()" aria-label="Previous"><span
                    aria-hidden="true">&laquo;</span></a></li>
        <li class="page-item" v-for="i in num_pages()" :key="i" v-bind:class="[i == currentPage ? 'active' : '']"
            v-on:click="change_page(i)">
            <a class="page-link">{{ i }}</a>
        </li>
        <li class="page-item"><a class="page-link" @click="change()" aria-label="Next"><span
                    aria-hidden="true">&raquo;</span></a></li>
    </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let props = defineProps({
    allData: Object
})
let currentPage = ref<number>(1)
let elementsPerPage = ref<number>(6)
function num_pages() {
    return Math.ceil(props.allData?.length / elementsPerPage.value);
}
function change_page(page: number) {
    currentPage.value = page;
}
function change() {
    if (currentPage.value < Math.ceil(props.allData?.length / elementsPerPage.value)) {
        currentPage.value++;
    }
}
function prev() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
</script>