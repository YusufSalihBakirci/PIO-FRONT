<template>
    <Breadcrumbs main="Users" mains="User Profile" title="User Profile" />
    <div class="container-fluid">
        <div class="user-profile">
            <div class="row">
                <ProfileHeader />
                <ProfilePost />
                <ProfilePost1 />
                <ProfilePost2 />
                <ProfilePost3 />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const ProfileHeader = defineAsyncComponent(() => import("@/components/theme/user/profile/ProfileHeader.vue"))
const ProfilePost = defineAsyncComponent(() => import("@/components/theme/user/profile/ProfilePost.vue"))
const ProfilePost1 = defineAsyncComponent(() => import("@/components/theme/user/profile/ProfilePost1.vue"))
const ProfilePost2 = defineAsyncComponent(() => import("@/components/theme/user/profile/ProfilePost2.vue"))
const ProfilePost3 = defineAsyncComponent(() => import("@/components/theme/user/profile/ProfilePost3.vue"))
</script>