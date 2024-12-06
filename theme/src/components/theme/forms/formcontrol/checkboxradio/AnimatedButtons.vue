<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Animated buttons" desc="Use the<code>.radio_animated</code>through animated checkbox and radios.">
        <div class="row g-3">
            <div class="col-sm-6">
                <div class="card-wrapper border rounded-3 checkbox-checked animated-button">
                    <h6 class="sub-title">Select your payment method</h6>
                    <div v-for="(item, index) in payment" :key="index">
                        <label class="d-block" :for="item.id"></label>
                        <input class="radio_animated" :id="item.id" :checked="item.checked" type="radio" name="rdo-ani">{{
                            item.label }}
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card-wrapper border rounded-3 checkbox-checked animated-button">
                    <h6 class="sub-title">What is your favorite social media? </h6>
                    <div v-for="(item, index) in social" :key="index">
                        <label class="d-block" :for="item.id"></label>
                        <input class="checkbox_animated" :id="item.id" type="checkbox" :checked="item.checked">{{ item.label
                        }}
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { payment, social } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>