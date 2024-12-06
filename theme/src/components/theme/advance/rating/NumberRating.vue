<template>
    <div class="col-xl-4">
        <div class="card height-equal">
            <div class="card-body number-rating">
                <div class="card rating_card mb-0" :class="submit ? 'hidden' : ''">
                    <h4 class="title">How did we do?</h4>
                    <p>
                        Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering!
                    </p>
                    <ul class="ratings">
                        <li class="circle rating" :class="item.isActive ? 'rating-selected' : ''"
                            v-for="(item, index) in data" :key="index" @click="handleClick(item)" :data-rating="item.num">{{
                                item.num }}</li>

                    </ul>
                    <button class="rating-button btn btn-secondary" @click="submitClick()">Submit</button>
                </div>
                <div class="card back-card  mb-0" :class="submit ? '' : 'hidden'">
                    <div class="illustration"><img src="@/assets/images/other-images/invoice.svg" alt=""></div>
                    <p class="result">You selected 1 out of 5</p>
                    <div class="greet">
                        <h4>Thank you!</h4>
                        <p>
                            We appreciate you taking the time to give a rating. If you ever need more support,
                            don&rsquo;t hesitate to get in touch!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useAdvanceStore } from "@/store/advance"
interface Entry {
    isActive: boolean;
}
let submit = ref(false)
const store = useAdvanceStore()
const data = store.numbers
const handleClick = (clickedEntry: Entry) => {
    if (!clickedEntry.isActive) {
        const previousActive = data.find((item) => item.isActive);
        if (previousActive) {
            previousActive.isActive = false;
        }
        clickedEntry.isActive = true;
    }
};
function submitClick() {
    submit.value = !submit.value
}
</script>