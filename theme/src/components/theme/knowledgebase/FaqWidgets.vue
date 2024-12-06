<template>
    <Card3 :colClass="item.col" cardClass="bg-primary " v-for="(item, index) in wid" :key="index">
        <div class="d-flex faq-widgets">

            <div class="flex-grow-1">
                <h5>{{ item.title }}</h5>
                <p>{{ item.desc }}</p>
            </div>
            <vue-feather :type="item.icon"></vue-feather>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { wid } from "@/core/data/knowledgebase"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>