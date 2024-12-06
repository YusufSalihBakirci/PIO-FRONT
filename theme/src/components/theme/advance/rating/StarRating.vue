<template>
    <Card3 colClass="col-xl-4" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1" headerTitle="true"
        title="Star Rating"
        desc="<span>Rating is displayed using</span><code>.rating-star</code><span> id using javascript.</span>">
        <div class="rating">
            <i v-for="i in 5" :key="i" @click="toggleStar(i + 1)" class="rating-star  fa-star"
                :class="i < activeStars ? 'fa-solid' : 'fa-regular'"></i>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let activeStars = ref<number>(0)
function toggleStar(rating: number) {
    activeStars.value = rating;
}
</script>