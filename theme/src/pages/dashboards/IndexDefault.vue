<template>
    <div class="container-fluid default-dashboard">
        <Breadcrumbs main="Dashboard" defaultdesc="true" mains="Default Dashboard" title="Default" />
        <div class="row">
            <!-- <div class="deneme">Yusuf Salih Bakırcı</div> -->
            <WelcomView />
            <EarningsTrend />
            <JobData />
            <TransitionHistory />
            <Auditlog />
            <TotalInvestment />
            <LatestActivity />
            <MonthlyRevenue colClass="col-lg-6 proorder-xxl-6 box-col-12" cardClass="card growthcard" :series="series2"
                :option="chartOptions2" />
            <TopUsers />
            <NewsUpdate />
            <TotalInvest />
            <ManageInvoice />
        </div>
    </div>
</template>
<script lang=ts setup>
import { defineAsyncComponent } from 'vue'
// import { series2, chartOptions2 } from "@/core/data/dashboards-chart"
import {series2 , chartOptions2 } from "../../core/data/dashboards-chart"

//const WelcomView = defineAsyncComponent(() => import("@/components/theme/dashboards/default/WelcomView.vue")) bu hata alıyor
const WelcomView = defineAsyncComponent(() => import("../../components/theme/dashboards/default/WelcomView.vue") )
const EarningsTrend = defineAsyncComponent(() => import("../../components/theme/dashboards/default/EarningsTrend.vue"))
const JobData = defineAsyncComponent(() => import("../../components/theme/dashboards/default/JobData.vue"))
const TransitionHistory = defineAsyncComponent(() => import("../../components/theme/dashboards/default/TransitionHistory.vue"))
const Auditlog = defineAsyncComponent(() => import("../../components/theme/dashboards/default/Auditlog.vue"))
const TotalInvestment = defineAsyncComponent(() => import("../../components/theme/dashboards/default/TotalInvestment.vue"))
const LatestActivity = defineAsyncComponent(() => import("../../components/theme/dashboards/default/LatestActivity.vue"))
const MonthlyRevenue = defineAsyncComponent(() => import("../../components/common/MonthlyRevenue.vue"))
const TopUsers = defineAsyncComponent(() => import("../../components/theme/dashboards/default/TopUsers.vue"))
const NewsUpdate = defineAsyncComponent(() => import("../../components/theme/dashboards/default/NewsUpdate.vue"))
const TotalInvest = defineAsyncComponent(() => import("../../components/theme/dashboards/default/TotalInvest.vue"))
const ManageInvoice = defineAsyncComponent(() => import("../../components/theme/dashboards/default/ManageInvoice.vue"))
</script>

<style lang="scss">

</style>