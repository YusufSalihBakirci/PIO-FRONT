<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0"
        cardbodyClass="main-segment-btn card-wrapper input-group-wrapper" preClass="mt-1 mb-0" headerTitle="true"
        title="Segmented buttons"
        desc="Multiple add-ons are supported and can be mixed with<code> dropdowns </code> versions.">
        <div class="input-group" v-for="(item, index) in segmented" :key="index">
            <input class="form-control" v-if="item.input2" type="text"
                aria-label="Text input with segmented dropdown button">
            <button class="btn " :class="item.class" type="button">{{ item.label }}</button>
            <button class="btn  dropdown-toggle dropdown-toggle-split" :class="item.class1" type="button"
                data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle
                    Dropdown</span></button>
            <ul class="dropdown-menu dropdown-block" :class="item.dropclass">
                <li v-for="(items, index) in item.children" :key="index"><a :class="items.class" :href="items.href">{{
                    items.text }}</a></li>

            </ul>
            <input class="form-control" v-if="item.input1" type="text"
                aria-label="Text input with segmented dropdown button">
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { segmented } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>