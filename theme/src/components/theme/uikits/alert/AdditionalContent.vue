<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="dark-alert" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Additional Content "
        desc="Use the <code>.alert  </code>utility class to quickly provide additional content within any alerts.">
        <div class="alert " :class="item.class" role="alert" v-for="(item, index) in addition" :key="index">
            <h3 class="alert-heading pb-2 " :class="item.alertclass">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <hr>
            <p class="mb-0">{{ item.text1 }}</p>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { addition } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>