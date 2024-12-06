<template>
    <div class="col-xl-3 xl-40 col-lg-12 col-md-5 box-col-4">
        <div class="default-according style-1 faq-accordion" id="accordionExample">
            <MyProfile />
            <MutualFriends />
            <ActivityFeed />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const MyProfile = defineAsyncComponent(() => import("@/components/theme/socialapp/MyProfile.vue"))
const MutualFriends = defineAsyncComponent(() => import("@/components/theme/socialapp/MutualFriends.vue"))
const ActivityFeed = defineAsyncComponent(() => import("@/components/theme/socialapp/ActivityFeed.vue"))
</script>