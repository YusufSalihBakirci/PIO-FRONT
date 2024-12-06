<template>
    <Card3 colClass="col-xxl-4 col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Lists With Checkboxs"
        desc="Use the<code>.form-check-input </code>to check your checkbox.">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in checkbox" :key="index">
                <input class="form-check-input me-1 " :class="item.class" :id="item.ids" type="checkbox" value="">
                <label class="form-check-label  mb-0" :class="item.text" :for="item.ids">{{ item.title }}</label>
            </li>
        </ul>
    </Card3>

    <Card3 colClass="col-xxl-4 col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Lists With Radios"
        desc="Use the  <code>.form-check-input   </code>to check your radio buttons.">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in radio" :key="index">
                <input class="form-check-input me-1 " :class="item.class" :id="item.ids" type="radio" name="listGroupRadio"
                    value="" :checked="item.checked">
                <label class="form-check-label mb-0" :for="item.ids">{{ item.title }}</label>
            </li>
        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { checkbox, radio } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>