<template>
    <li
        :class="[{ ' sidebar-main-title': menuItem?.type == 'headtitle', 'sidebar-list': menuItem?.icon1, }, store.pinedArray.includes(menuItem?.title) ? 'pined' : '']">

        <div v-if="menuItem?.type == 'headtitle'">
            <h5 class="lan-1 f-w-700 sidebar-title">{{ menuItem.headTitle1 }}</h5>
        </div>

        <i v-if="menuItem?.type != 'headtitle' && menuItem?.icon1" class="fa-solid fa-thumbtack"
            @click="store.getPinedData(menuItem)"></i>
        <a :to="menuItem?.children ? '' : menuItem?.path" v-if="menuItem && menuItem.title"
            @click.prevent="handleNavigation(menuItem.path)"
            :class="[{ active: isActive(menuItem.path) }, { 'active': menuItem.active }, menuItem?.icon1 ? 'sidebar-link ' : 'submenu-title',]"
            @click="store.toggleMenu(menuItem)">
            <svg class="stroke-icon" v-if="menuItem.icon1">
                <use :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${menuItem.icon}`"></use>
            </svg>

            <h6 v-if="menuItem?.icon1"> {{ $t(menuItem.title) }}</h6><span v-else>{{ $t(menuItem.title) }}</span>

            <label :class="menuItem.badgeType" v-if="menuItem.bagde">{{ menuItem.bagde }}</label>
            <i class="iconly-Arrow-Right-2 icli" v-if="menuItem?.children"></i>
        </a>

        <ul :class="menuItem?.icon ? 'sidebar-submenu' : 'submenu-content opensubmegamenu'" v-if="menuItem?.children"
            :style="menuItem.active ? 'display:block' : 'display:none'">
            <NavMenu v-for="( childItem, index ) in  menuItem.children " :key="index" :menu-item="childItem" />
        </ul>

    </li>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted, } from 'vue'
import { useMenuStore } from "@/store/menu";
import { useRoute, useRouter } from 'vue-router';
const NavMenu = defineAsyncComponent(() => import("@/components/common/block/sidebar/NavMenu.vue"))
let props = defineProps({
    menuItem: Object
})
let router = useRouter()
let route = useRoute()
let store = useMenuStore();
const handleNavigation = (path: string) => {
    if (path) {
        router.push(path)
    }
}
function isActive(path: string) { return route.path === path; }
onMounted(() => {
    isActive(route.path)
})
</script>