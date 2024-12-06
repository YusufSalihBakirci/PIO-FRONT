<template>
    <form class="form-inline search-full col" action="#" method="get">
        <div class="form-group w-100">
            <div class="Typeahead Typeahead--twitterUsers">
                <div class="u-posRelative">
                    <input class="demo-input Typeahead-input form-control-plaintext w-100" type="text"
                        placeholder="Search Admiro .." :class="filtered ? 'open' : ''" title="" />
                    <div class="spinner-border Typeahead-spinner" role="status"><span class="sr-only">Loading...</span>
                    </div><i data-feather="x"></i><vue-feather class="close-search" type="x"
                        @click="store.openActives()"></vue-feather>
                </div>
                <div class="Typeahead-menu"></div>
            </div>
        </div>
    </form>
</template>
<script lang="ts" setup>
import { useMenuStore } from "@/store/menu";

import { ref, onMounted } from 'vue'
let filtered = ref<boolean>(false);
let store = useMenuStore();
function hideSarchbar() {
    if (window.innerWidth > 1199) {
        store.active = false
    }
    else {
        store.active = false
    }
}
onMounted(() => {
    window.addEventListener('resize', hideSarchbar)
})
</script>