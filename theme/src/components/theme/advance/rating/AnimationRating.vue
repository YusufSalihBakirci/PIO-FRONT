<template>
    <Card3 colClass="col-xl-4" cardhaderClass="card-no-border pb-0" pre="true" preClass="desc mb-0 mt-1" headerTitle="true"
        title="Animated  Rating"
        desc="<span>Rating is displayed using</span><code>.rating-star</code><span> id using javascript.</span>">
        <div class="rating-container">
            <ul class="feedback">
                <li class="" v-for="(item, index) in data" :key="index" :class="[{ active: item.isActive }, item.class]"
                    @click="handleClick(item)">
                    <div v-if="item.eye">
                        <svg class="eye left">
                            <use xlink:href="@/assets/svg/iconly-sprite.svg#eye"></use>
                        </svg>
                        <svg class="eye right">
                            <use xlink:href="@/assets/svg/iconly-sprite.svg#eye"></use>
                        </svg>
                        <svg class="mouth">
                            <use xlink:href="@/assets/svg/iconly-sprite.svg#mouth"></use>
                        </svg>
                    </div>
                    <div v-if="item.eyes"></div>
                    <div v-if="item.happy">
                        <svg class="eye left">
                            <use xlink:href="@/assets/svg/iconly-sprite.svg#eye"></use>
                        </svg>
                        <svg class="eye right">
                            <use xlink:href="@/assets/svg/iconly-sprite.svg#eye"></use>
                        </svg>
                    </div>
                </li>


            </ul>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { animationrating } from "@/core/data/advance"
import { useAdvanceStore } from "@/store/advance"
interface Entry {
    isActive: boolean;
}
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const store = useAdvanceStore()
const data = store.data
const handleClick = (clickedEntry: Entry) => {
    if (!clickedEntry.isActive) {
        const previousActive = data.find((item) => item.isActive);
        if (previousActive) {
            previousActive.isActive = false;
        }
        clickedEntry.isActive = true;
    }
};

</script>