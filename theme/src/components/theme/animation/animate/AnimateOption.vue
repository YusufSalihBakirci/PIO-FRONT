<template>
    <Card3 colClass="col-sm-12" cardbodyClass="options" text="true" headerTitle="true" title="How to use it?" :desc="desc">
        <div v-for="(item, index) in option" :key="index">{{ item }}</div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { option } from "@/composables/common/animationView"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("All you have to do is to add animation name class attribute to html element, like :<code>Fade</code>")
</script>