<template>
    <Breadcrumbs main="Icons" mains="Themify Icon" title="Themify Icon" />
    <div class="container-fluid">
        <div class="row icon-main">
            <DirectionIcons @selected="icon_bar" />
            <WebAppIcons @selected="icon_bar" />
            <ControlIcons @selected="icon_bar" />
            <TextEditor @selected="icon_bar" />
            <BrandIcons @selected="icon_bar" />
        </div>
    </div>
    <div class="icon-hover-bottom position-fixed fa-fa-icon-show-div" :class="{ 'opecity-0': !icon_bar_status }"
        :style="[icon_bar_status ? { 'display': 'block' } : { 'display': 'none' }]">
        <div class="container-fluid">
            <div class="row">
                <div class="icon-popup">
                    <div class="close-icon" v-on:click="close_icon_bar"><i class="fa-solid fa-xmark"></i></div>
                    <div class="icon-first"><i class="fa-2x" :class="[select_icon.class]" id="icon_main"></i>
                        <h5 class="mt-0">{{ select_icon.class }}</h5>
                    </div>

                    <div class="icon-class">
                        <label class="icon-title">Class</label><span id="fclass1"> {{ select_icon.class }}</span>
                    </div>
                    <div class="icon-last icon-last">
                        <label class="icon-title">Markup</label>
                        <div class="form-inline">
                            <div class="form-group">
                                <input class="inp-val form-control m-r-10" id="input_copy" type="text"
                                    :value="select_icon.tag">
                                <button class="btn btn-primary notification" @click="copy_icon">Copy text</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { icon_bar_status, select_icon, } from "@/composables/common/allIcons"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const BrandIcons = defineAsyncComponent(() => import("@/components/theme/icons/themify_icon/BrandIcons.vue"))
const DirectionIcons = defineAsyncComponent(() => import("@/components/theme/icons/themify_icon/DirectionIcons.vue"))
const WebAppIcons = defineAsyncComponent(() => import("@/components/theme/icons/themify_icon/WebAppIcons.vue"))
const ControlIcons = defineAsyncComponent(() => import("@/components/theme/icons/themify_icon/ControlIcons.vue"))
const TextEditor = defineAsyncComponent(() => import("@/components/theme/icons/themify_icon/TextEditor.vue"))

function icon_bar(icon: string) {

    select_icon.value.class = icon;
    select_icon.value.tag = '<i class="' + icon + '"></i>';

    icon_bar_status.value = true;
}
function close_icon_bar() {
    icon_bar_status.value = false;
}
function copy_icon() {
    toast.info(' Code Copied to clipboard! ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'bottom-right',
    });
    navigator.clipboard.writeText(select_icon.value.tag);
}
</script>