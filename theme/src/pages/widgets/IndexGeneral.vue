<template>
    <Breadcrumbs main="Widgets" mains="General" title="General" />
    <div class="container-fluid general-widget">
        <div class="row">
            <StokeSell height="110" mainClass="col-xl-3 col-sm-6 box-col-6" colClass="col-md-12 col-xl-12 col-lg-12"
                :data="strokeItem" />
            <InvestmentCard />
            <SwiperSlide colClass="col-xl-3 col-sm-6 box-col-6" :data="swipers" />
            <WidgetContent />
            <RadialCard />
            <SmallWidget />
            <ScheduleView colClass="col-sm-6 col-xl-3 d-xxl-block d-xl-none box-col-none" />
            <UpcomingClasses colClass="col-sm-6 col-xxl-3 box-col-6" cardClass="card " />
            <MonthlyRevenue colClass="col-xl-6 box-col-6 growth-card" cardClass="card" :series="series2"
                :option="chartOptions21" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { strokeItem } from "@/core/data/dashboards"
import { series2, chartOptions21 } from "@/core/data/dashboards-chart"
import { useDashboardStore } from "@/store/dashboard"
const StokeSell = defineAsyncComponent(() => import("@/components/common/StokeSell.vue"))
const InvestmentCard = defineAsyncComponent(() => import("@/components/theme/widgets/general/InvestmentCard.vue"))
const SwiperSlide = defineAsyncComponent(() => import("@/components/common/SwiperSlide.vue"))
const WidgetContent = defineAsyncComponent(() => import("@/components/theme/widgets/general/WidgetContent.vue"))
const RadialCard = defineAsyncComponent(() => import("@/components/theme/widgets/general/RadialCard.vue"))
const SmallWidget = defineAsyncComponent(() => import("@/components/theme/widgets/general/SmallWidget.vue"))
const ScheduleView = defineAsyncComponent(() => import("@/components/common/ScheduleView.vue"))
const UpcomingClasses = defineAsyncComponent(() => import("@/components/common/UpcomingClasses.vue"))
const MonthlyRevenue = defineAsyncComponent(() => import("@/components/common/MonthlyRevenue.vue"))
let store = useDashboardStore()
let swipers = store.swipersitem
</script>
