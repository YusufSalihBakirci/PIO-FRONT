<template>
    <div class="row">
        <SociallAccording />
        <div class="col-xl-6 xl-60 col-lg-12 col-md-8 box-col-8e">
            <div class="row">
                <AddFriend />
                <HobbiesView />
                <EducationView />
                <YourProfile />
                <ActivityLog />
            </div>
        </div>
        <ProfileIntro />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const SociallAccording = defineAsyncComponent(() => import("@/components/theme/socialapp/SociallAccording.vue"))
const ProfileIntro = defineAsyncComponent(() => import("@/components/theme/socialapp/ProfileIntro.vue"))
const AddFriend = defineAsyncComponent(() => import("@/components/theme/socialapp/AddFriend.vue"))
const HobbiesView = defineAsyncComponent(() => import("@/components/theme/socialapp/HobbiesView.vue"))
const EducationView = defineAsyncComponent(() => import("@/components/theme/socialapp/EducationView.vue"))
const YourProfile = defineAsyncComponent(() => import("@/components/theme/socialapp/YourProfile.vue"))
const ActivityLog = defineAsyncComponent(() => import("@/components/theme/socialapp/ActivityLog.vue"))
</script>