<template>
    <Breadcrumbs main="Ui Kits" mains="Avatars" title="Avatars" />
    <div class="container-fluid">
        <div class="user-profile">
            <div class="row">
                <AvatarSize />
                <AvatarStatus />
                <AvatarShapes />
                <AvatarRatio />
                <AvatarGrouping />
                <AvatarInitial />
                <AvatarPing />
                <AvatarProfile />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const AvatarSize = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarSize.vue"))
const AvatarStatus = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarStatus.vue"))
const AvatarShapes = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarShapes.vue"))
const AvatarRatio = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarRatio.vue"))
const AvatarGrouping = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarGrouping.vue"))
const AvatarInitial = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarInitial.vue"))
const AvatarPing = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarPing.vue"))
const AvatarProfile = defineAsyncComponent(() => import("@/components/theme/uikits/avatar/AvatarProfile.vue"))
</script>