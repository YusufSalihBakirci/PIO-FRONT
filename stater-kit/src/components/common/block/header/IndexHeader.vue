<template>
    <LogoView />
    <div class="page-main-header col">
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
                <li>
                    <MaximizeView />
                </li>
                <li class="profile-nav custom-dropdown">
                    <ProfileView />
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, } from 'vue'
import { useMenuStore } from "@/store/menu";
const LogoView = defineAsyncComponent(() => import("@/components/common/block/header/LogoView.vue"))
const SearchData = defineAsyncComponent(() => import("@/components/common/block/header/SearchData.vue"))
const SearchBar = defineAsyncComponent(() => import("@/components/common/block/header/SearchBar.vue"))
const LanguageView = defineAsyncComponent(() => import("@/components/common/block/header/LanguageView.vue"))
const SearchInput = defineAsyncComponent(() => import("@/components/common/block/header/SearchInput.vue"))
const ModeView = defineAsyncComponent(() => import("@/components/common/block/header/ModeView.vue"))
const MaximizeView = defineAsyncComponent(() => import("@/components/common/block/header/MaximizeView.vue"))
const ProfileView = defineAsyncComponent(() => import("@/components/common/block/header/ProfileView.vue"))
let store = useMenuStore();
</script>