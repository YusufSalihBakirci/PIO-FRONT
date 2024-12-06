<template>
    <a href="javascript:void(0)" @click="openTab()">
        <svg>
            <use href="@/assets/svg/iconly-sprite.svg#bookmark"></use>
        </svg></a>
    <div class="custom-menu bookmark-dropdown py-0 overflow-hidden" :class="show ? 'show' : ''">
        <div class="onhover-show-div bookmark-flip" :class="bookmarkSearchBox ? 'active' : ''">
            <div class="flip-card">
                <div class="flip-card-inner" :class="bookmarkSearchBox ? 'flipped' : ''">
                    <div class="front">
                        <h3 class="title dropdown-title">Bookmark</h3>
                        <ul class="bookmark-dropdown">
                            <li class="py-0">
                                <div class="row custom-scrollbar">
                                    <div class="col-4 text-center" v-for="(menuItem, index) in bookmarkItems.slice(0, 8)"
                                        :key="index"><router-link :to="{ path: menuItem.path }">
                                            <div class="bookmark-content">
                                                <div class="bookmark-icon"><svg>
                                                        <use
                                                            :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${menuItem.icon}`">
                                                        </use>
                                                    </svg></div><span>{{ menuItem.title }}
                                                </span>
                                            </div>
                                        </router-link></div>
                                </div>
                            </li>
                            <li class="text-center"><a class="flip-btn f-w-700 btn btn-secondary text-white" id="flip-btn" href="javascript:void(0)"
                                    @click="openBookmark">Add New
                                    Bookmark</a></li>
                        </ul>
                    </div>
                    <div class="back">
                        <ul>
                            <li>
                                <div class="flip-back-content position-relative">
                                    <input class="form-control" type="text" placeholder="search..." @keyup="searchTerm" v-model="terms">
                                    <div class="Typeahead-menu custom-scrollbar"
                                    :class="!bookmarkSearchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'"
                                    v-if="searchMenuItems.length">
                                    <div class="ProfileCard u-cf" v-for="(menuItem, index) in searchMenuItems.slice(0, 8)"
                                        :key="index">
                                        <div class="ProfileCard-avatar header-search">
                                            <svg>
                                                <use
                                                    :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${menuItem.icon}`">
                                                </use>
                                            </svg>
                                        </div>
                                        <div class="ProfileCard-details">
                                            <div class="ProfileCard-realName bookmark-realName">
                                                <router-link :to="{ path: menuItem.path }" class="realname">{{
                                                    menuItem.title }}</router-link>
                                                <span class="pull-right "><a href="JavaScript:void(0);"
                                                        @click="addToBookmark(menuItem)"><i
                                                            class="fa-regular fa-star f-16 bookmark-search f-right"
                                                            :class="menuItem.bookmark ? 'text-warning' : ''"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                                <div :class="bookmarkSearchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'">
                                    <div class="tt-dataset tt-dataset-0">
                                        <div class="EmptyMessage"> Your search turned up 0 results. Opps There are no result
                                            found.</div>
                                    </div>
                                </div>
                            </li>

                            <li @click="openBookmark"><a class="f-w-700 d-block flip-back btn btn-secondary text-white" id="flip-back"
                                    href="javascript:void(0)">Back</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { useMenuStore } from "@/store/menu"
import { storeToRefs } from "pinia";
let show = ref<boolean>(false)
function openTab() {
    show.value = !show.value
}
interface bookmark {
    icon: string,
    path: string,
    title: string,
}
let bookmarkSearchBox = ref<boolean>(false)
let bookmarkItems = ref<bookmark[]>([])
let bookmarkSearchResult = ref<boolean>(false)
let bookmarkSearchResultEmpty = ref<boolean>(false)
let terms = ref<string>("");
let store = useMenuStore()
let menu = store.data
let { searchDatas: searchMenuItems } = storeToRefs(store);
watch(
    () => [searchMenuItems, terms],
    () => {
        terms.value ? addFix() : removeFix()
        if (!searchMenuItems.value.length) bookmarkSearchResultEmpty.value = true;
        else bookmarkSearchResultEmpty.value = false;
    },
    { deep: true },
);
function openBookmark() {
    bookmarkSearchBox.value = !bookmarkSearchBox.value;
    if (!bookmarkSearchBox) removeFix();
}
function removeFix() {
    bookmarkSearchResult.value = false;
    const text = '';
}
function addFix() {
    bookmarkSearchResult.value = true;
}
function searchTerm() {
    store.searchterm(terms.value);
}
function addToBookmark(items: any) {
    const index = bookmarkItems.value.indexOf(items);
    if (index === -1 && !items.bookmark) {
        items.bookmark = true;
        bookmarkItems.value.push(items);
        const text = '';
    } else {
        bookmarkItems.value.splice(index, 1);
        items.bookmark = false;
    }
}
onMounted(() => {
    menu.filter((items) => {

        if (items.bookmark) {
            bookmarkItems.value.push(items)
        }
    });
})
</script>