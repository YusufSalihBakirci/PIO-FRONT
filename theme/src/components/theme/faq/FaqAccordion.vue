<template>
    <div class="col-lg-12">
        <div class="header-faq">
            <h3 class="f-w-700 mb-3">Quick Questions are answered</h3>
        </div>
        <div class="row default-according style-1 faq-accordion" id="accordionoc">
            <div class="col-xl-8 xl-60 col-lg-6 col-md-7">
                <div class="card" v-for="(item, index) in quik" :key="index">
                    <div class="card-header">
                        <h5 class="mb-0">
                            <button class="btn btn-link ps-0" @click="toggleAccordion(index)" :data-bs-target="item.id"
                                :aria-expanded="item.isActive ? 'true' : 'false'" :aria-controls="item.ids"> <vue-feather
                                    type="help-circle"></vue-feather> {{ item.title
                                    }}</button>
                        </h5>
                    </div>
                    <div v-if="item.isActive" :id="item.ids" aria-labelledby="collapseicon" data-bs-parent="#accordionoc">
                        <div class="card-body" v-for="(items, index) in item.childern" :key="index" v-html="items.title">
                        </div>
                    </div>
                </div>
                <IntellectualProperty />
                <SellingAccording />
                <UserAccounts />
            </div>
            <NavigationView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useCommonStore } from "@/store/common"
const IntellectualProperty = defineAsyncComponent(() => import("@/components/theme/faq/IntellectualProperty.vue"))
const SellingAccording = defineAsyncComponent(() => import("@/components/theme/faq/SellingAccording.vue"))
const UserAccounts = defineAsyncComponent(() => import("@/components/theme/faq/UserAccounts.vue"))
const NavigationView = defineAsyncComponent(() => import("@/components/theme/faq/NavigationView.vue"))
let store = useCommonStore()
let quik = store.quiks
const toggleAccordion = (index: number) => {
    quik[index].isActive = !quik[index].isActive;
    closeOtherAccordions(index);
};

const closeOtherAccordions = (currentIndex: number) => {
    quik.forEach((item, index) => {
        if (index !== currentIndex) {
            item.isActive = false;
        }
    });
};
</script>