<template>
    <Card3 colClass="col-12" headerTitle1="true" cardhaderClass="card-no-border pb-0" title="Custom Board" pre="true" cardbodyClass="pb-0" preClass="mb-0"
        :desc="desc">
        <div class="default-kanban" id="demo2">
            <div class=" kanban-container d-flex ">
                <div data-id="_todo" v-for="(board, index) in dropZones" :key="index" data-order="1"
                    @drop="onDrop($event, index)" @dragover.prevent @dragenter.prevent
                    class="kanban-board col-xxl-4 col-md-12" style="width: 400px; margin-left: 15px; margin-right: 15px">
                    <header class="kanban-board-header" :class="board.bg">
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
                                                <p class="f-12">+5</p>
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
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { custom } from "@/core/data/kanban"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
interface item {
    title: string,
    id: number,
    bg: string
}
let desc = ref<string>("Colors, gutter, click on board&apos;s item and restricting which boards to drag items to ")
let data = ref()
const dropZones = ref<item[]>([{ title: 'To Do (Item only in Working)', id: 0, bg: "bg-info" }, { title: 'Working', id: 1, bg: "bg-primary" }, { title: 'Done (Item only in Working)', id: 3, bg: "bg-success" }])
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
        data.value = custom;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});
</script>