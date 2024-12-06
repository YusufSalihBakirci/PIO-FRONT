<template>
    <div class="tab-pane fade show active" id="inbox-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
        <div v-if="store.isLoading" class="email-loader"></div>
        <div class="mail-body-wrapper" v-else>
            <ul id="paginated-list" data-current-page="1" aria-live="polite">
                <li class="inbox-data" v-for="(row, index) in get_rows()" :key="index">
                    <div class="inbox-user">
                        <div class="form-check form-check-inline m-0">
                            <input class="form-check-input checkbox-primary" id="emailCheckbox1" type="checkbox"
                                value="option1" />
                            <label class="form-check-label" for="emailCheckbox1"></label>
                        </div>
                        <svg class="important-mail " @click="toggleStar(row)" :class="row.isActive ? 'active' : ''">
                            <use href="@/assets/svg/icon-sprite.svg#fill-star"></use>
                        </svg>
                        <div class="rounded-border"><img class="img-fluid" v-if="row.img" :src="getImages(row.img)"
                                alt="user" />
                            <div v-if="row.textclass" :class="row.circle">
                                <p :class="row.textclass">{{ row.text }}</p>
                            </div>
                        </div>
                        <p>{{ row.name }}</p>
                    </div>
                    <div class="inbox-message">
                        <div class="email-data" @click="toogle()"><span>{{ row.desctitle }} <span>{{ row.desc
                        }}</span></span>
                            <div class="badge " :class="row.badgeclass">{{ row.badge }}</div>
                        </div>
                        <div class="email-timing"><span>{{ row.time }}</span></div>
                        <div class="email-options">
                            <div @click="toggleEmail(index)">
                                <i class="fa-regular fa-envelope envelope-1"
                                    :class="activeEmail[index] ? 'hide' : 'show'"></i><i
                                    class="fa-solid fa-envelope-open-text envelope-2 "
                                    :class="activeEmail[index] ? 'show' : 'hide'"></i>
                            </div>
                            <i class="fa-solid fa-trash-can trash-3" @click="deleteItem(row.id)"></i><i
                                class="fa-solid fa-print"></i>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="mail-pagination">
                <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page"
                    v-on:click="prev()">&lt;</button>
                <div class="pagination-index" id="pagination-numbers" v-for="i in num_pages()" :key="i"
                    v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">{{ i }}</div>
                <button class="pagination-button" id="next-button" aria-label="Next page" v-on:click="change()"
                    title="Next page">&gt;</button>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits, onMounted, watch } from 'vue'
import { inbox, trash } from "@/core/data/letter-box"
import { useCommonStore } from "@/store/common"
import { getImages } from "@/composables/common/getImages"
let elementsPerPage = ref<number>(8)
let currentPage = ref<number>(1)
let allData = ref<any[]>([])
let activeStars = ref<boolean[]>([])
let activeEmail = ref<boolean[]>([])
let emit = defineEmits(['selected'])
let store = useCommonStore()
onMounted(() => { allData.value = inbox; })
function toggleStar(index: any) {
    index.isActive = !index.isActive;
}
function toggleEmail(index: number) {
    activeEmail.value[index] = !activeEmail.value[index];
}
function get_rows() {
    var start = (currentPage.value - 1) * elementsPerPage.value;
    var end = start + elementsPerPage.value;
    return allData.value.slice(start, end);
}
function num_pages() {
    return Math.ceil(allData.value.length / elementsPerPage.value);
}
function change_page(page: number) {
    currentPage.value = page;
}
function change() {
    if (currentPage.value < Math.ceil(allData.value.length / elementsPerPage.value)) {
        currentPage.value++;
    }
}
function prev() {
    if (currentPage.value > 1) { currentPage.value-- }
}
const deleteItem = (itemId: number) => {
    const index = allData.value.findIndex((item) => item.id === itemId);
    if (index !== -1) {
        const deletedItem = allData.value.splice(index, 1)[0];
    }
};
function toogle() { emit('selected'); }
</script>