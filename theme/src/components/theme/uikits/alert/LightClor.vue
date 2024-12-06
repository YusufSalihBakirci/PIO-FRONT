<template>
    <Card3 colClass="col-xl-12 alert-theme" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Link color in light theme"
        desc="Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.">
        <div class="row">
            <div class="col-xl-6" v-for="(items, index) in lightalert" :key="index">
                <div v-for="(item, index) in items.childern" :key="index">
                    <p class="mb-2 ">{{ item.title }}</p>
                    <div class="alert mb-3" :class="item.class" role="alert">
                        <p :class="item.alertclass">This is a <a class="alert-link" :class="item.alertclass" href="#">{{
                            item.text }}</a>
                            with an example link.Check it out.</p>
                    </div>
                </div>


            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { lightalert } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.")
</script>