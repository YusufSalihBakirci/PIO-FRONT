<template>
    <Card3 colClass="col-xl-6" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Default calendar"
        cardbodyClass="card-wrapper">
        <div class="row g-3 date-calender">
            <div class="col-12">
                <div class="input-group main-inline-calender">
                    <Datepicker class="form-control mb-2" :inline="{ input: true }" text-input auto-apply v-model="date"
                        :format="format" />
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let date = ref<Date | null>(null);
const format = (date: Date | null): string => {
    if (date === null) {
        return '';
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return ` ${day}/${month}/${year}`;
};
</script>