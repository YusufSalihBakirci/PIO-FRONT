<template>
    <Breadcrumbs main="Form Controls" mains="Touchspin" title="Touchspin" />
    <div class="container-fluid">
        <div class="bootstrap-touchspin">
            <div class="row">
                <DefaultTouchspin />
                <OutlinedTouchspin />
                <IconsTouchspin />
                <PostfixTouchspin />
                <RoundedTouchspin />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const DefaultTouchspin = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/DefaultTouchspin.vue"))
const OutlinedTouchspin = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/OutlinedTouchspin.vue"))
const IconsTouchspin = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/IconsTouchspin.vue"))
const PostfixTouchspin = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/PostfixTouchspin.vue"))
const RoundedTouchspin = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/touchspin/RoundedTouchspin.vue"))
</script>