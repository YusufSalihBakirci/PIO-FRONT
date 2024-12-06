<template>
    <Breadcrumbs main="Dashboard" educationdesc="true" mains="Education Dashboard" title="Education" />
    <div class="container-fluid dashboard-3">
        <div class="row">
            <DesignView />
            <UpcomingClasses colClass="col-xxl-3 col-xl-4 col-sm-6 order-sm-1 order-xl-0 box-col-5"
                cardClass="card upcoming-card" />
            <SchoolPerformance />
            <NoticeBoard />
            <DetailsTable />
            <CourseTable />
            <TimeSpent />
            <TodoList />
            <AssignmentsTable />
            <ScheduleView colClass="col-xxl-3 col-xl-5 col-sm-6 box-col-6" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const DesignView = defineAsyncComponent(() => import("@/components/theme/dashboards/education/DesignView.vue"))
const UpcomingClasses = defineAsyncComponent(() => import("@/components/common/UpcomingClasses.vue"))
const SchoolPerformance = defineAsyncComponent(() => import("@/components/theme/dashboards/education/SchoolPerformance.vue"))
const NoticeBoard = defineAsyncComponent(() => import("@/components/theme/dashboards/education/NoticeBoard.vue"))
const DetailsTable = defineAsyncComponent(() => import("@/components/theme/dashboards/education/DetailsTable.vue"))
const CourseTable = defineAsyncComponent(() => import("@/components/theme/dashboards/education/CourseTable.vue"))
const TimeSpent = defineAsyncComponent(() => import("@/components/theme/dashboards/education/TimeSpent.vue"))
const TodoList = defineAsyncComponent(() => import("@/components/theme/dashboards/education/TodoList.vue"))
const AssignmentsTable = defineAsyncComponent(() => import("@/components/theme/dashboards/education/AssignmentsTable.vue"))
const ScheduleView = defineAsyncComponent(() => import("@/components/common/ScheduleView.vue"))
</script>