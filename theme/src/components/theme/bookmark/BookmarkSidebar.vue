<template>
    <div class="col-xl-3 box-col-6">
        <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                @click="collapseFilter()">bookmark filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="email-left-aside">
                    <div class="card">
                        <div class="card-body">
                            <div class="email-app-sidebar left-bookmark">
                                <div class="d-flex flex-wrap">
                                    <div class="media-size-email"><img class="me-3 rounded-circle"
                                            src="@/assets/images/user/user.png" alt="" /></div>
                                    <div class="flex-grow-1">
                                        <h4 class="f-w-600">MARK JENCO</h4>
                                        <p>Markjecno@gmail.com</p>
                                    </div>
                                </div>
                                <ul class="nav main-menu" role="tablist">
                                    <li class="nav-item">
                                        <button class="button-primary btn-block btn-mail w-100" type="button"
                                            data-bs-toggle="modal" data-bs-target="#bookmarkmodal"><vue-feather class="me-2"
                                                type="bookmark"></vue-feather>New Bookmark</button>
                                    </li>
                                    <li class="nav-item"><span class="main-title"> Views</span></li>
                                    <li v-for="(item, index) in bookmarksidebar" :key="index"><a :class="item.actve"
                                            :id="item.id" data-bs-toggle="pill" :href="item.href" role="tab"
                                            :aria-controls="item.controls" aria-selected="true">
                                            <span class="title" v-if="item.fav">
                                                {{ item.title }}({{ favourite.length }})</span><span class="title" v-else>
                                                {{ item.title }}</span></a></li>
                                    <li>
                                        <hr>
                                    </li>
                                    <li><span class="main-title"> Tags<span class="pull-right"><a href="#"
                                                    data-bs-toggle="modal" data-bs-target="#createtag"><vue-feather
                                                        type="plus-circle"></vue-feather> </a></span></span></li>
                                    <li v-for="(item, index) in bookmarks" :key="index"><a :id="item.id"
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
    <div class="col-xl-9 col-md-12 box-col-12">
        <div class="email-right-aside bookmark-tabcontent">
            <div class="card email-body radius-left">
                <div class="ps-0">
                    <div class="tab-content">
                        <CreatedBy />
                        <FavouritesView />
                        <SharedTab />
                        <MyBookmark />
                        <NotificationView />
                        <NewsLetter />
                        <BusinessBookmark />
                        <HolidayBookmark />
                        <ImportantBookmark />
                        <OrgenizationBookmark />
                        <NewBookmark />
                        <TagsView />
                        <EditView />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { bookmarksidebar, bookmarks, data } from "@/core/data/bookmark"
import { ref, defineAsyncComponent } from "vue"
import { useBookmarkStore } from "@/store/bookmark"
const CreatedBy = defineAsyncComponent(() => import("@/components/theme/bookmark/CreatedBy.vue"))
const FavouritesView = defineAsyncComponent(() => import("@/components/theme/bookmark/FavouritesView.vue"))
const SharedTab = defineAsyncComponent(() => import("@/components/theme/bookmark/SharedTab.vue"))
const MyBookmark = defineAsyncComponent(() => import("@/components/theme/bookmark/MyBookmark.vue"))
const NotificationView = defineAsyncComponent(() => import("@/components/theme/bookmark/NotificationView.vue"))
const NewsLetter = defineAsyncComponent(() => import("@/components/theme/bookmark/NewsLetter.vue"))
const BusinessBookmark = defineAsyncComponent(() => import("@/components/theme/bookmark/BusinessBookmark.vue"))
const HolidayBookmark = defineAsyncComponent(() => import("@/components/theme/bookmark/HolidayBookmark.vue"))
const ImportantBookmark = defineAsyncComponent(() => import("@/components/theme/bookmark/ImportantBookmark.vue"))
const OrgenizationBookmark = defineAsyncComponent(() => import("@/components/theme/bookmark/OrgenizationBookmark.vue"))
const NewBookmark = defineAsyncComponent(() => import("@/components/theme/bookmark/NewBookmark.vue"))
const TagsView = defineAsyncComponent(() => import("@/components/theme/bookmark/TagsView.vue"))
const EditView = defineAsyncComponent(() => import("@/components/theme/bookmark/EditView.vue"))
let filtered = ref<boolean>(false)
let store = useBookmarkStore()
let favourite = store.favourite
function collapseFilter() {
    filtered.value = !filtered.value;
}
</script>