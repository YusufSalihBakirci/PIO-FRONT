<template>
    <div class="form-group-header d-lg-block d-none">
        <div class="Typeahead Typeahead--twitterUsers position-relative">
            <div class="u-posRelative d-flex align-items-center">
                <input class="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text"
                    placeholder="Type to Search..." title="" :class="filtered ? 'open' : ''" @keyup="searchTerm"
                    v-model="termss" /><i class="search-bg iconly-Search icli"></i>
            </div>
            <div :class="searchResult ? 'Typeahead-menu is-open custom-scrollbar' : 'Typeahead-menu '"
                v-if="menuItems.length">
                <div class="ProfileCard u-cf" v-for="(menuItem, index) in menuItems" :key="index">
                    <div class="ProfileCard-avatar header-search">

                        <svg>
                            <use :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${menuItem.icon}`"></use>
                        </svg>
                    </div>
                    <div class="ProfileCard-details">
                        <div class="ProfileCard-realName">
                            <span @click="removeFix()"><router-link :to="{ path: menuItem.path }" class="realname">{{
                                menuItem.title
                            }}</router-link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'">
                <div class="tt-dataset tt-dataset-0">
                    <div class="EmptyMessage"> Your search turned up 0 results. Opps There are no result found. </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue'
let filtered = ref<boolean>(false);
let termss = ref<string>("");
let store = useMenuStore();
let { searchData: menuItems } = storeToRefs(store);


let searchResult = ref<boolean>(false);
let searchResultEmpty = ref<boolean>(false);
watch(
    () => [menuItems, termss],
    () => {
        termss.value ? addFix() : removeFix();
        if (!menuItems.value.length) searchResultEmpty.value = true;
        else searchResultEmpty.value = false;
    },
    { deep: true },
);
function searchTerm() {
    store.searchTerm(termss.value);
}
function addFix() {

    searchResult.value = true;
}
function removeFix() {
    searchResult.value = false;
    termss.value = "";
}
function collapseFilter() {
    filtered.value = !filtered.value;
}

</script>