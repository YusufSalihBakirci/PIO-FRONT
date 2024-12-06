<template>
    <Breadcrumbs main="Users" mains="Edit Profile" title="Edit Profile" />
    <div class="container-fluid">
        <div class="edit-profile">
            <div class="row">
                <UserProfile />
                <EditProfile />
                <UserTable />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const UserProfile = defineAsyncComponent(() => import("@/components/theme/user/edit/UserProfile.vue"))
const EditProfile = defineAsyncComponent(() => import("@/components/theme/user/edit/EditProfile.vue"))
const UserTable = defineAsyncComponent(() => import("@/components/theme/user/edit/UserTable.vue"))
</script>