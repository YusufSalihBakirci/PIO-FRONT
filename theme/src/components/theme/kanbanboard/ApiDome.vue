<template>
    <Card3 colClass="col-12" headerTitle1="true" title="API" pre="true" cardhaderClass="card-no-border pb-0" preClass="mb-0" cardbodyClass="pb-0" :desc="desc">
        <div class="default-kanban" id="demo3">
            <div class="kanban-container d-flex">
                <div data-id="_todo" v-for="(board, index) in dropZones" :key="index" data-order="1"
                    @drop="onDrop($event, index)" @dragover.prevent @dragenter.prevent
                    class="kanban-board col-xxl-4 col-md-12">
                    <header class="kanban-board-header">
                        <div class="kanban-title-board">{{ board.title }}</div>
                    </header>
                    <main class="kanban-drag">
                        <div class="kanban-item is-moving" v-for="item in list(index)" :key="item.title" draggable="true"
                            @dragstart="startDrag($event, item)">
                            <a class="kanban-box" href="#" draggable="false"><span class="date">{{
                                item.date
                            }}</span><span class="badge  f-right" :class="item.badge">{{
    item.priority
}}</span>
                                <img class="mt-2 img-fluid" v-if="item.img" :src="getImages(item.img)" alt=""
                                    data-original-title="" title="">
                                <h6>{{ item.title }}</h6>
                                <div class="d-flex align-items-start">
                                    <img class="img-20 me-1 rounded-circle" :src="require('@/assets/images/user/3.jpg')"
                                        alt="" data-original-title="" title="" />
                                    <div class="flex-grow-1">
                                        <p>{{ item.place }}</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-3">
                                    <ul class="list">
                                        <li><i class="fa-regular fa-comments me-2"></i>2</li>
                                        <li><i class="fa fa-paperclip me-2"></i>2</li>
                                        <li><i class="fa fa-eye"></i></li>
                                    </ul>
                                    <div class="customers">
                                        <ul>
                                            <li class="d-inline-block me-3">
                                                <p class="f-12">{{ item.more }}</p>
                                            </li>
                                            <li class="d-inline-block">
                                                <img class="img-20 rounded-circle"
                                                    :src="require('@/assets/images/user/3.jpg')" alt=""
                                                    data-original-title="" title="" />
                                            </li>
                                            <li class="d-inline-block">
                                                <img class="img-20 rounded-circle"
                                                    :src="require('@/assets/images/user/1.jpg')" alt=""
                                                    data-original-title="" title="" />
                                            </li>
                                            <li class="d-inline-block">
                                                <img class="img-20 rounded-circle"
                                                    :src="require('@/assets/images/user/5.jpg')" alt=""
                                                    data-original-title="" title="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </main>
                    <footer></footer>
                </div>
            </div>
        </div>
        <button class="btn btn-success me-1" id="addDefault" @click.prevent="addDefaultBoard">Add &quot;Default&quot;
            board</button>
        <button class="btn btn-success me-1" id="addToDo" @click.prevent="addTodoBoard">Add element in &quot;To Do&quot;
            Board</button>
        <button class="btn btn-danger" id="removeBoard" @click.prevent="removeDone">Remove &quot;Done&quot; Board</button>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { api } from "@/core/data/kanban"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
interface item {
    title: string,
    id: number
}
let desc = ref<string>("Add item, add board, delete board:  ")
let data = ref()
const dropZones = ref<item[]>([{ title: 'To Do', id: 0 }, { title: 'Working', id: 1 }, { title: 'Done', id: 3 }])
function removeDone() {
    for (var i = data.value.length - 1; i >= 0; i--)
        data.value[i].list === 2 && data.value.splice(i, 1)
}
function addDefaultBoard() {
    let objToAdd = {
        "title": "New deafult board", "list": 0,
        "place": "Pixelstrap, New york", "image": "@/assets/images/user/3.jpg",
        "priority": "Low", "img": "other-images/sidebar-bg.jpg",
        "badge": "badge-success", "id": 7, "date": "24/7/20"
    }
    data.value.push(objToAdd)
}
function addTodoBoard() {
    let objToAdd = {
        "title": "Test Sidebar", "list": 0,
        "place": "Themeforest, australia", "image": "@/assets/images/user/3.jpg",
        "badge": "badge-danger", "id": 8, "more": "+5",
        "priority": "Argent", "date": "24/7/20"
    }
    data.value.push(objToAdd)
}
function list(index: any) {
    return data.value.filter((kanbanlist: any) => kanbanlist.list === index);
}
function startDrag(evt: any, item: any) {
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("itemID", item.id);
}
function onDrop(evt: any, list: any) {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = data.value.find((kanbanlist: any) => kanbanlist.id == itemID);
    item.list = list;
}
onMounted(() => {
    try {
        data.value = api;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});
</script>