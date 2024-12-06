<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0"
        cardbodyClass="checkbox-checked card-wrapper input-group-wrapper checkbox-radios" preClass="mt-1 mb-0"
        headerTitle="true" title="Checkboxes and radios"
        desc="Place any checkbox or radio option within an input group's addon instead of text. We recommend adding ">
        <div class="input-group" v-for="(item, index) in checkboxes" :key="index">
            <div class="input-group-text">
                <input class="form-check-input mt-0" :type="item.type" value="" :checked="item.checked"
                    aria-label="Checkbox for following text input">
            </div>
            <input class="form-control" type="text" aria-label="Text input with checkbox">
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { checkboxes } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>