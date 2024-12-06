<template>
    <div class="main-sidebar" id="main-sidebar">
        <ul class="sidebar-menu" id="simple-bar">
            <div style="margin: 0px;" class="simplebar-wrapper">
                <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                        <div class="simplebar-content-wrapper" style="height: 100%; overflow: scroll auto;">
                            <div class="simplebar-content" style="padding: 0px;">
                                <li class="pin-title sidebar-main-title">
                                    <div>
                                        <h5 class="sidebar-title f-w-700">Pinned</h5>
                                    </div>
                                </li>
                                <NavMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, } from 'vue'
const NavMenu = defineAsyncComponent(() => import("@/components/common/block/sidebar/NavMenu.vue"))
</script>