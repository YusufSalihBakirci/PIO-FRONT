<template>
    <Card3 headerTitle="true" cardhaderClass="card-no-border pb-0" cardbodyClass="row pricing-content"
        title="Become member">

        <div class="col-lg-3 col-md-6" v-for="(item, index) in pricing" :key="index">
            <div class="pricingtable">
                <div class="pricingtable-header">
                    <h3 class="title">{{ item.title }}</h3>
                </div>
                <div class="price-value"><span class="currency">$</span><span class="amount">{{ item.price
                }}</span><span class="duration">/mo</span></div>
                <ul class="pricing-content">
                    <li>{{ item.disk }}</li>
                    <li>{{ item.email }}</li>
                    <li>{{ item.Sub }}</li>
                    <li>{{ item.domains }}</li>
                </ul>
                <div class="pricingtable-signup"><a class="btn btn-primary btn-lg" href="#">Sign Up</a></div>
            </div>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { pricing } from "@/core/data/ecommerce"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>