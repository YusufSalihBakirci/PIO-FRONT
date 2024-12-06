<template>
    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" headerTitle="true" title="Outline Color Variant">
        <div class="mb-2" v-for="(item, index) in outlinecolor" :key="index">
            <div class="col-form-label">{{ item.label }}</div>
            <select class="form-select " :class="item.class" name="select">
                <option value="opt1">Select One Value Only</option>
                <option value="opt2">Type 2</option>
                <option value="opt3">Type 3</option>
                <option value="opt4">Type 4</option>
                <option value="opt5">Type 5</option>
                <option value="opt6">Type 6</option>
                <option value="opt7">Type 7</option>
                <option value="opt8">Type 8</option>
            </select>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
import { outlinecolor } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>