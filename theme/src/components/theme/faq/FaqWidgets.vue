<template>
    <Card3 :colClass="item.col" cardClass="bg-primary articles-cards" v-for="(item, index) in wid" :key="index">
        <div class="d-flex faq-widgets">

            <div class="flex-grow-1">
                <h3> {{ item.title }}</h3>
                <p>{{ item.desc }}</p>
            </div>
            <vue-feather :type="item.icon"></vue-feather>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
import { wid } from "@/core/data/faq"
</script>