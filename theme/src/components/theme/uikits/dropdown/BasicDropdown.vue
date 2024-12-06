<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Basic Dropdown"
        desc="When the<code>.show </code>class starts, dropdown appears. And <code>.btn-*</code> to change button dark background colors.">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in dropdown" :key="index">
                <button class="btn  dropdown-toggle" :class="item.class" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block">
                    <li v-for="(items, index) in item.children" :key="index"><a class="dropdown-item" href="#">{{
                        items.title }}</a></li>
                </ul>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { dropdown } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>