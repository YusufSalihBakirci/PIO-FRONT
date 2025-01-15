<template>
    <Breadcrumbs main="Dashboard" ecommorcedesc="true" mains="Experia GA4  Dashboard" title="Experia GA4 Analytics" />
    <div class="container-fluid dashboard-2">
        <div class="row">
            <SalesAnalytics />
            <UserStatus />
            <SelesView />
            <SellingProducts />
            <StokeSell height="153" mainClass="col-xxl-3 col-xl-4 col-md-5 box-col-4" colClass="col-sm-6 col-md-12"
                :data="stroke" />
            <BestSeller />
            <SellingRate />
            <SwiperSlide colClass="col-xxl-3 col-xl-4 col-sm-6 box-col-6" :data="swipers" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { stroke } from "@/core/data/dashboards"
import { useDashboardStore } from "@/store/dashboard"
const SalesAnalytics = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/SalesAnalytics.vue"))
const UserStatus = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/UserStatus.vue"))
const SelesView = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/SelesView.vue"))
const SellingProducts = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/SellingProducts.vue"))
const StokeSell = defineAsyncComponent(() => import("@/components/common/StokeSell.vue"))
const BestSeller = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/BestSeller.vue"))
const SellingRate = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/SellingRate.vue"))
const SwiperSlide = defineAsyncComponent(() => import("@/components/common/SwiperSlide.vue"))
const ActivityTimeline = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/ActivityTimeline.vue"))
const OurTarget = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/OurTarget.vue"))
const RecentOrders = defineAsyncComponent(() => import("@/components/theme/dashboards/ecommerce/RecentOrders.vue"))
let store = useDashboardStore()
let swipers = store.swiperss
</script>