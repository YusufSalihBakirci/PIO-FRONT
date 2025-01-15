<template>
    <div class="page-main-header col">
        <LogoView />
        <div class="header-left">
            <SearchData :class="store.active ? 'open' : ''" />
            <SearchBar />
        </div> 
        <div class="nav-right">
            <ul class="header-right">
                <li class="custom-dropdown ">
                    <LanguageView />
                </li>
                <li class="search d-lg-none d-flex">
                    <SearchInput @click="store.openActives()" />
                </li>
                <li>
                    <ModeView />
                </li>
                <!-- <li class="custom-dropdown">
                    <CartBox />
                </li> -->
                <li class="custom-dropdown">
                    <NotificationBox />
                </li>
                <li>
                    <MaximizeView />
                </li>
                <!-- <li class="custom-dropdown">
                    <BookmarkSearch />
                </li> -->
                <!-- <li class="cloud-design">
                    <CloudMode />
                </li> -->
                <li class="profile-nav custom-dropdown">
                    <ProfileView />
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, defineEmits, } from 'vue'
import { useMenuStore } from "@/store/menu";
const LogoView = defineAsyncComponent(() => import("@/components/common/block/header/LogoView.vue"))
const SearchData = defineAsyncComponent(() => import("@/components/common/block/header/SearchData.vue"))
const SearchBar = defineAsyncComponent(() => import("@/components/common/block/header/SearchBar.vue"))
const LanguageView = defineAsyncComponent(() => import("@/components/common/block/header/LanguageView.vue"))
const SearchInput = defineAsyncComponent(() => import("@/components/common/block/header/SearchInput.vue"))
const ModeView = defineAsyncComponent(() => import("@/components/common/block/header/ModeView.vue"))
const CartBox = defineAsyncComponent(() => import("@/components/common/block/header/CartBox.vue"))
const NotificationBox = defineAsyncComponent(() => import("@/components/common/block/header/NotificationBox.vue"))
const MaximizeView = defineAsyncComponent(() => import("@/components/common/block/header/MaximizeView.vue"))
const BookmarkSearch = defineAsyncComponent(() => import("@/components/common/block/header/BookmarkSearch.vue"))
const CloudMode = defineAsyncComponent(() => import("@/components/common/block/header/CloudMode.vue"))
const ProfileView = defineAsyncComponent(() => import("@/components/common/block/header/ProfileView.vue"))
let store = useMenuStore();
const emit = defineEmits(['click']);
</script>