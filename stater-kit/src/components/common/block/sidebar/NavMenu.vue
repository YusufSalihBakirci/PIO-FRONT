<template>
    <li v-for="(menuItem, index) in store.data" :key="index" class="sidebar-list"
        :class="[{ ' sidebar-main-title': menuItem.type == 'headtitle' }]">

        <router-link :to="menuItem.path" class="sidebar-link" :class="menuItem.title == store.perentName ? 'active' : ''"
            @click="store.subMenuToggle(menuItem.title)" v-if="menuItem.type == 'link'">
            <svg class="stroke-icon">
                <use :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${menuItem.icon}`"></use>
            </svg>

            <h6 class="f-w-600">
                {{ $t(menuItem.title) }}
            </h6>
            <i class="iconly-Arrow-Right-2 icli"></i>
        </router-link>
        <a :href="menuItem.path" class="sidebar-link" :class="menuItem.title == store.perentName ? 'active' : ''"
            @click="store.subMenuToggle(menuItem.title)" v-if="menuItem.type == 'redirect'">
            <svg class="stroke-icon">
                <use :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${menuItem.icon}`"></use>
            </svg>

            <h6 class="f-w-600">
                {{ $t(menuItem.title) }}
            </h6>

        </a>

    </li>
</template>
<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";

let store = useMenuStore();
</script>
