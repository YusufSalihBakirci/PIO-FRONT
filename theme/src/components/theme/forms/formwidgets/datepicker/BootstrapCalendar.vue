<template>
    <Card3 colClass="col-xl-6" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Bootstrap calendar"
        cardbodyClass="card-wrapper">
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">Date and time</label>
            <div class="col-md-9">
                <input class="form-control digits" id="example-datetime-local-input" type="datetime-local"
                    value="2024-05-03T18:45:00">
            </div>
        </div>
        <div :class="item.class" v-for="(item, index) in bootstrapcalender" :key="index">
            <label class="col-md-3 col-form-label">{{ item.label }}</label>
            <div class="col-md-9">
                <input class="form-control digits" :type="item.type" :value="item.value">
            </div>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { bootstrapcalender } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>