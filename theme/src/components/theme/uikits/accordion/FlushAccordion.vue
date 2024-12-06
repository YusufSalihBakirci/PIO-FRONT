<template>
    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Flush Accordion"
        desc="Add  <code>.accordion-flush</code> to remove the default background-color, border, etc.">
        <div class="accordion accordion-flush dark-accordion" id="accordionFlushExample">
            <div class="accordion-item" v-for="(item, index) in data" :key="index">
                <h2 class="accordion-header" :id="item.hederid">
                    <button class="accordion-button collapsed text-success accordion-light-success active"
                        @click="toggleAccordion(index)" type="button" data-bs-toggle="collapse" :data-bs-target="item.id"
                        aria-expanded="false" aria-controls="flush-collapseOne">{{ item.title }}</button>
                </h2>
                <div class="accordion-collapse collapse show" v-if="item.isActive" :id="item.ids"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul class="d-flex flex-column gap-2 accordions-content">
                            <li v-for="(items, index) in item.childern" :key="index">{{ items.title }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useCommonStore } from "@/store/common"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Add <code>.accordion-flush</code> to remove the default<code> background-color</code> , some borders, and some rounded corners to render accordions edge-to-edge with their parent container.")
let store = useCommonStore()
let data = store.flushes
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