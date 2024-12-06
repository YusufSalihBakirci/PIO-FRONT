<template>
    <Card3 colClass="col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Borders" desc="Use border utilities to add or remove an element's borders.">
        <div class="row g-3">
            <div class="col-md-4 col-sm-6" v-for="(items, index) in border" :key="index">
                <div class="border-wrapper h-100 border">
                    <h5 class="f-w-600 mb-3">{{ items.title }}</h5>
                    <div class="d-flex align-items-center mb-2 gap-2" v-for="(item, index) in items.children" :key="index">
                        <div :class="item.class"></div><span>{{ item.title }}</span>
                    </div>

                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { border } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>(" Use the different styles of borders like: <code>border radius/border-color/border-width</code>. Use of any components.")
</script>