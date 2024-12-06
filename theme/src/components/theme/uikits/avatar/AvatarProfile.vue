<template>
    <Card3 colClass="col-xl-4 col-sm-6" cardhaderClass="card-no-border pb-0" cardClass="avatar-profile-card" pre="true"
        preClass="mb-0 mt-1" cardbodyClass="avatar-showcase" headerTitle="true" title="Avatar Profile"
        desc="Use icon and images as avatars profile.">
        <div class="avatars">
            <div class="user-img"><img src="@/assets/images/profile.png" alt="user">
                <div class="setting-icon"> <i class="iconly-Setting icli"> </i></div>
            </div>
            <div class="avatar-intial img-60 bg-light-primary avatar-profile"><img src="@/assets/images/users/6.png"
                    alt="users"></div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>