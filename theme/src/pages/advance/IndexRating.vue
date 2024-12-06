<template>
    <Breadcrumbs main="Bonus Ui" mains="Rating" title="Rating" />
    <div class="container-fluid">
        <div class="row">
            <StarRating />
            <FeedbackRating />
            <AnimationRating />
            <NumberRating />
            <DisabledRating />
            <EmojiRating />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const StarRating = defineAsyncComponent(() => import("@/components/theme/advance/rating/StarRating.vue"))
const FeedbackRating = defineAsyncComponent(() => import("@/components/theme/advance/rating/FeedbackRating.vue"))
const NumberRating = defineAsyncComponent(() => import("@/components/theme/advance/rating/NumberRating.vue"))
const EmojiRating = defineAsyncComponent(() => import("@/components/theme/advance/rating/EmojiRating.vue"))
const DisabledRating = defineAsyncComponent(() => import("@/components/theme/advance/rating/DisabledRating.vue"))
const AnimationRating = defineAsyncComponent(() => import("@/components/theme/advance/rating/AnimationRating.vue"))
</script>