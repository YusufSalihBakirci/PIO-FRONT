<template>
    <Card3 colClass="col-xl-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Input sweetalert" desc="catch the pokeball.">
        <div class="common-flex">
            <TextEmailAlert />
            <PasswordTextareaAlert />
            <RadioCheckboxAlert />
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const TextEmailAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/TextEmailAlert.vue"))
const PasswordTextareaAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/PasswordTextareaAlert.vue"))
const RadioCheckboxAlert = defineAsyncComponent(() => import("@/components/theme/advance/sweealert/RadioCheckboxAlert.vue"))
</script>