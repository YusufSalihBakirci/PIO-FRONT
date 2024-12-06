<template>
    <Breadcrumbs main="Icons" mains="Feather Icon" title="Feather Icon" />
    <div class="container-fluid">
        <div class="row icon-main">
            <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" titleClass="f-w-700" headerTitle="true"
                title="Feather Icon ">
                <div class="row icon-event feather-icons icon-lists">
                    <div class="col-12 col-xxl-2 col-lg-4 col-md-6 icons-item" v-for="(item, index) in feather_icons"
                        :key="index" v-on:click="icon_bar(item.abbrivation)">
                        <vue-feather :type="item.abbrivation"></vue-feather>
                        <h5 class="mt-0">{{ item.name }} </h5>
                    </div>
                </div>
            </Card3>
        </div>
    </div>
    <div class="icon-hover-bottom position-fixed fa-fa-icon-show-div" :class="{ 'opecity-0': !icon_bar_status }"
        :style="[icon_bar_status ? { 'display': 'block' } : { 'display': 'none' }]">
        <div class="container-fluid">
            <div class="row">
                <div class="icon-popup">
                    <div class="close-icon" v-on:click="close_icon_bar"><i class="fa-solid fa-xmark"></i></div>
                    <div class="icon-first"><vue-feather class="fa-2x" :type="select_icon.class"></vue-feather>
                        <h5 class="mt-0">{{ select_icon.class }}</h5>
                    </div>
                    <div class="icon-class">
                        <label class="icon-title">data-feather</label><span id="fclass1">{{ select_icon.class }}</span>
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
import { ref, defineAsyncComponent } from 'vue'
import { icon_bar_status, feather_icons } from "@/composables/common/allIcons"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
interface iconss {
    class: string,
    tag: string
}
const select_icon = ref<iconss>({
    class: 'home',
    tag: 'home'
})
function icon_bar(icon: string) {

    select_icon.value.class = icon;
    select_icon.value.tag = '<vue-feather type="' + icon + '"></vue-feather>';

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
    document.execCommand('copy');

}
</script>