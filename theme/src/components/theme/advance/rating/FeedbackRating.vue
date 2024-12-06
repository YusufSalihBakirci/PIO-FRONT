<template>
    <Card3 colClass="col-xl-4" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1" headerTitle="true"
        title="Rating with feedback"
        desc="<span>Rating is displayed using</span><code>.rating-star</code><span> id using javascript.</span>">
        <div class="heart-rating">
            <div class="rating-system3">
                <input id="star5_3" type="radio" name="rate3">
                <label for="star5_3"></label>
                <input id="star4_3" type="radio" name="rate3">
                <label for="star4_3"></label>
                <input id="star3_3" type="radio" name="rate3">
                <label for="star3_3"></label>
                <input id="star2_3" type="radio" name="rate3">
                <label for="star2_3"></label>
                <input id="star1_3" type="radio" name="rate3">
                <label for="star1_3"></label>
                <div class="text"></div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { feedbackrating } from "@/core/data/advance"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>