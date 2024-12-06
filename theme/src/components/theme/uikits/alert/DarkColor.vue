<template>
    <Card3 colClass="col-xl-12 alert-theme" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Link Color In Dark Theme"
        desc="Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert">
        <div class="row">
            <div class="col-xl-6" v-for="(items, index) in alert" :key="index">
                <div v-for="(item, index) in items.childern" :key="index">
                    <p class="mb-1 ">{{ item.title }}</p>
                    <div class="alert  dark mb-3" :class="item.class" role="alert">
                        <p>This is a <a :class="item.alertclass" href="#">{{ item.text }}</a> with an example
                            link. Check it out.</p>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { alert } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>