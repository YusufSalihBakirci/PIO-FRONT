<template>
    <Card3 colClass="col-md-6 mb-lg-3" pre="true" cardbodyClass="common-flex main-radio-toggle"
        cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true" title="Radio toggle buttons "
        desc="The choice between these two approaches will depend on the type of toggle you are creating.">
        <div v-for="(item, index) in toggle" :key="index">
            <input class="btn-check radio-light-secondary" :id="item.id" type="radio" name="options" checked="item.checked"
                :disabled="item.disabled">
            <label class="btn list-light-secondary" :for="item.id">{{ item.label }}</label>
        </div>
    </Card3>
    <Card3 colClass="col-md-6" pre="true" cardbodyClass="common-flex main-checkbox-toggle outline-chackbox"
        cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true" title="Outlined checkbox styles "
        desc="The choice between these two approaches will depend on the type of toggle you are creating.">
        <input class="btn-check" id="btn-check-outlined" type="checkbox">
        <div v-for="(item, index) in outlined " :key="index">

            <input class="btn-check" :id="item.id" type="checkbox" :checked="item.checked">
            <label class="btn " :class="item.class" for="btn-check-outlined">{{ item.label }}</label>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { toggle, outlined } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>