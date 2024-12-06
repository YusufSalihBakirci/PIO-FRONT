<template>
    <div class="col-xl-3 xl-30 box-col-12">
        <div class="email-sidebar md-sidebar"><a class="btn btn-primary email-aside-toggle md-sidebar-toggle"
                @click="collapseFilter()">To Do filter</a>
            <div class="email-left-aside md-sidebar-aside" :class="filtered ? 'open' : ''">
                <div class="card overflow-hidden">
                    <div class="card-body">
                        <div class="email-app-sidebar left-bookmark custom-scrollbar">
                            <div class="d-flex align-items-center flex-wrap">
                                <div class="media-size-email"><img class="me-2 img-40 rounded-circle"
                                        src="@/assets/images/user/user.png" alt=""></div>
                                <div class="flex-grow-1">
                                    <h3 class="f-w-700">Mark Jecno</h3>
                                    <p>Markjecno@gmail.com</p>
                                </div>
                            </div>
                            <ul class="nav main-menu">
                                <li class="nav-item">
                                    <button class="btn-primary  badge-light btn-mail w-100"><vue-feather class="me-2"
                                            type="check-circle"></vue-feather>To Do List</button>
                                </li>

                                <li class="nav-item" v-for="(item, index) in todosidebar" :key="index"><a
                                        href="javascript:void(0)"><span class="iconbg "
                                            :class="item.badgeclass"><vue-feather
                                                :type="item.icon"></vue-feather></span><span class="title ms-2">{{
                                                    item.title }}</span><span :class="item.pillclass">{{ item.badge }}</span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, } from "vue"
import { todosidebar } from "@/core/data/todo"
let filtered = ref<boolean>(false)
function collapseFilter() {
    filtered.value = !filtered.value
}
</script>