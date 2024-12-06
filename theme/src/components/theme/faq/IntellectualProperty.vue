<template>
    <div class="faq-title">
        <h3 class="f-w-700 mb-3">Intellectual Property</h3>
    </div>
    <div class="card" v-for="(item, index) in data" :key="index">
        <div class="card-header">
            <h5 class="mb-0">
                <button class="btn btn-link ps-0" @click="toggleAccordion(index)" :data-bs-target="item.id"
                    :aria-expanded="item.isActive ? 'true' : 'false'" :aria-controls="item.ids"> <vue-feather
                        type="help-circle"></vue-feather> {{
                            item.title
                        }}</button>
            </h5>
        </div>
        <div v-if="item.isActive" :id="item.ids" aria-labelledby="collapseicon" data-bs-parent="#accordionoc">
            <div class="card-body" v-for="(items, index) in item.childern" :key="index" v-html="items.title">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useCommonStore } from "@/store/common"

let store = useCommonStore()
let data = store.int
const toggleAccordion = (index: number) => {
    data[index].isActive = !data[index].isActive;
    closeOtherAccordions(index);
};

const closeOtherAccordions = (currentIndex: number) => {
    data.forEach((item, index) => {
        if (index !== currentIndex) {
            item.isActive = false;
        }
    });
};
</script>