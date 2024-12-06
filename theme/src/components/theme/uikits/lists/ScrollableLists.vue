<template>
    <Card3 colClass="col-xxl-4" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Scrollable Lists " desc="Use the property<code>overflow:auto   </code>through scrollable lists.">
        <div class="list-group scrollbar-wrapper">
            <a class="list-group-item list-group-item-action" :class="item.class" v-for="(item, index) in scrollable"
                :key="index" href="#" aria-current="true">
                <div class="list-wrapper gap-0 pb-0"><img class="list-img" :src="getImages(item.img)" alt="profile">
                    <div class="list-content">
                        <h6>{{ item.title }}</h6>
                        <p>{{ item.email }}</p><small>{{ item.day }}</small>
                    </div>
                </div>
            </a>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { scrollable } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>