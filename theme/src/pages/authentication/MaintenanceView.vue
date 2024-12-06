<template>
    <div class="page-wrapper">

        <div class="error-wrapper maintenance-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <MaintenanceSvg />
                        <div class="maintenance-heading">
                            <h2 class="headline">MAINTENANCE</h2>
                        </div>
                        <h4 class="sub-content">Our Site is Currently under maintenance We will be back Shortly<br> Thank
                            You For Patience</h4>
                        <div><router-link class="btn btn-primary" to="/">BACK TO HOME PAGE</router-link></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const MaintenanceSvg = defineAsyncComponent(() => import("@/components/theme/authantication/MaintenanceSvg.vue"))

</script>