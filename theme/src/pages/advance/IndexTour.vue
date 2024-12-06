<template>
    <Breadcrumbs main="Bonus Ui" mains="Tour" title="Tour" />
    <div class="container-fluid">
        <div class="user-profile">
            <UserProfile />
        </div>
    </div>
</template>
<script lang="ts" setup>

import { defineAsyncComponent, onMounted } from 'vue';
const UserProfile = defineAsyncComponent(() => import("@/components/theme/advance/tour/UserProfile.vue"))

</script>