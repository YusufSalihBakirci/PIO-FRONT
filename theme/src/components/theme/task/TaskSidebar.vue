<template>
    <div class="col-xxl-3 col-xl-4 box-col-6">
        <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                @click="collapseFilter()">task filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="email-left-aside">
                    <div class="card">
                        <div class="card-body">
                            <div class="email-app-sidebar left-bookmark task-sidebar">
                                <div class="d-flex">
                                    <div class="media-size-email"><img class="me-3 rounded-circle"
                                            src="@/assets/images/user/user.png" alt="" /></div>
                                    <div class="flex-grow-1">
                                        <h4 class="f-w-700">MARK JENCO</h4>
                                        <p>Markjecno@gmail.com</p>
                                    </div>
                                </div>
                                <ul class="nav main-menu" role="tablist">
                                    <li class="nav-item">
                                        <button class="badge-light-primary btn-block btn-mail w-100" type="button"
                                            data-bs-toggle="modal" data-bs-target="#taskmodel"><vue-feather class="me-2"
                                                type="check-circle"></vue-feather>New Task</button>
                                    </li>
                                    <li class="nav-item"><span class="main-title"> Views</span></li>

                                    <li v-for="(item, index) in tasksidebar" :key="index"><a :class="item.actve"
                                            :id="item.id" data-bs-toggle="pill" :href="item.href" role="tab"
                                            :aria-controls="item.controls" aria-selected="true"><span class="title">{{
                                                item.title }}</span></a></li>
                                    <li>
                                        <hr>
                                    </li>
                                    <li><span class="main-title"> Tags<span class="pull-right"><a href="#"
                                                    data-bs-toggle="modal" data-bs-target="#createtag"><vue-feather
                                                        type="plus-circle"></vue-feather></a></span></span></li>
                                    <li v-for="(item, index) in task" :key="index"><a class="show" :id="item.id"
                                            data-bs-toggle="pill" :href="item.href" role="tab"
                                            :aria-controls="item.controls" aria-selected="false"><span class="title">
                                                {{ item.title }}</span></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-9 col-xl-8 col-md-12 box-col-12">
        <div class="email-right-aside bookmark-tabcontent">
            <div class="card email-body radius-left">
                <div class="ps-0">
                    <div class="tab-content">
                        <CreatedView />
                        <TodayTask />
                        <DelayedTasks />
                        <UpcomingTasks />
                        <WeekTasks />
                        <MonthTasks />
                        <AssignedView />
                        <MyTasks />
                        <NotificationView />
                        <NewsLetter />
                        <BusinessTask />
                        <HolidaysTask />
                        <CareateTag />
                        <NewTask />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { tasksidebar, task } from "@/core/data/task"
import { ref, defineAsyncComponent } from "vue"
const CreatedView = defineAsyncComponent(() => import("@/components/theme/task/CreatedView.vue"))
const TodayTask = defineAsyncComponent(() => import("@/components/theme/task/TodayTask.vue"))
const DelayedTasks = defineAsyncComponent(() => import("@/components/theme/task/DelayedTasks.vue"))
const UpcomingTasks = defineAsyncComponent(() => import("@/components/theme/task/UpcomingTasks.vue"))
const WeekTasks = defineAsyncComponent(() => import("@/components/theme/task/WeekTasks.vue"))
const MonthTasks = defineAsyncComponent(() => import("@/components/theme/task/MonthTasks.vue"))
const AssignedView = defineAsyncComponent(() => import("@/components/theme/task/AssignedView.vue"))
const MyTasks = defineAsyncComponent(() => import("@/components/theme/task/MyTasks.vue"))
const NotificationView = defineAsyncComponent(() => import("@/components/theme/task/NotificationView.vue"))
const NewsLetter = defineAsyncComponent(() => import("@/components/theme/task/NewsLetter.vue"))
const BusinessTask = defineAsyncComponent(() => import("@/components/theme/task/BusinessTask.vue"))
const HolidaysTask = defineAsyncComponent(() => import("@/components/theme/task/HolidaysTask.vue"))
const CareateTag = defineAsyncComponent(() => import("@/components/theme/task/CareateTag.vue"))
const NewTask = defineAsyncComponent(() => import("@/components/theme/task/NewTask.vue"))
let filtered = ref<boolean>(false)
function collapseFilter() {
    filtered.value = !filtered.value;
}
</script>