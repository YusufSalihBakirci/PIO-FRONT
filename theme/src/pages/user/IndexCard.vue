<template>
    <Breadcrumbs main="Users" mains="User Cards" title="User Cards" />
    <div class="container-fluid">
        <div class="row">
            <UserCard />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const UserCard = defineAsyncComponent(() => import("@/components/theme/user/cards/UserCard.vue"))
</script>