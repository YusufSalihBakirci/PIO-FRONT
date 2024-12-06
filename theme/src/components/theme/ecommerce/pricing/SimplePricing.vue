<template>
    <Card3 headerTitle="true" cardhaderClass="card-no-border pb-0" cardbodyClass="pricing-content"
        title="Simple Pricing Card">
        <div class="row g-sm-4 g-3">
            <div class="col-lg-3 col-sm-6 box-col-3" v-for="(item, index) in simplePricing" :key="index">
                <div class="card text-center pricing-simple">
                    <div class="card-body">
                        <h3>{{ item.title }}</h3>
                        <h2>{{ item.price }}</h2>
                        <h6 class="mb-0">{{ item.title }} Plan</h6>
                    </div><a class="btn btn-lg btn-primary btn-block" href="#">Purchase</a>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { simplePricing } from "@/core/data/ecommerce"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>