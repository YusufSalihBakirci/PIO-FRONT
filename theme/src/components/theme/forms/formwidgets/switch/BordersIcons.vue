<template>
    <Card3 colClass="col-xl-4" cardbodyClass="common-flex flex-column switch-wrapper" cardhaderClass="card-no-border pb-0"
        pre="true" preClass="mt-1 mb-0" headerTitle="true" title="Borders with icons"
        desc="Use  <code>.switch-outline </code>& <code>.icon-state </code> class through created outline.">
        <div class="d-flex" v-for="(item, index) in borders" :key="index">
            <div class="icon-state switch-outline">
                <label class="switch mb-0">
                    <input type="checkbox" :checked="item.checked"><span class="switch-state " :class="item.class"> </span>
                </label>
            </div>
            <label class="col-form-label ms-3">{{ item.label }}</label>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { borders } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>