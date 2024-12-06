<template>
    <div class="row">
        <SociallAccording />
        <UsersSocial />
        <ProfileIntro />
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const SociallAccording = defineAsyncComponent(() => import("@/components/theme/socialapp/SociallAccording.vue"))
const UsersSocial = defineAsyncComponent(() => import("@/components/theme/socialapp/UsersSocial.vue"))
const ProfileIntro = defineAsyncComponent(() => import("@/components/theme/socialapp/ProfileIntro.vue"))
</script>