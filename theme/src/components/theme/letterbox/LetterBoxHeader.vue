<template>
    <div class="card email-body email-list" :class="active ? 'hide' : ''">
        <div class="mail-header-wrapper">
            <div class="mail-header">
                <div class="form-check form-check-inline m-0">
                    <input class="form-check-input checkbox-primary" id="emailCheckbox1" type="checkbox" value="option1" />
                    <label class="form-check-label" for="emailCheckbox1"></label>
                    <ul class="email-tabs nav" id="email-content-tab">
                        <li class="nav-item" v-for="(item, index) in tabs" :key="index"><a class="nav-link"
                                v-bind:class="{ 'active': item.title === activeclass }" :id="item.ids" data-bs-toggle="pill"
                                :href="item.href" role="tab" :aria-controls="item.control" aria-selected="true">
                                <svg class="stroke-icon">
                                    <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`"></use>
                                </svg><span>{{ item.title }} </span></a></li>
                    </ul>
                </div>
            </div>
            <div class="mail-body">
                <div class="mail-search d-flex-align-items-center">
                    <input class="form-control" type="text" placeholder="Search..." /><i class="fa fa-search"></i>
                </div>
                <div class="light-square" @click="store.toggleLoader()"><i class="fa fa-refresh"></i></div>
                <div class="light-square"> <i class="fa fa-trash"></i></div>
                <div class="light-square dropdown-toggle" role="main" data-bs-toggle="dropdown" aria-expanded="false"><i
                        class="fa fa-ellipsis-v"></i></div>
                <ul class="dropdown-menu dropdown-block dropdown-menu-end">
                    <li v-for="(item, index) in dropdown" :key="index"> <a class="dropdown-item" href="#!">{{ item.title
                    }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <LetterEmail />
        <div class="tab-content" id="email-pills-tabContent">
            <LetterInbox @selected="toggle" />
            <LetterSent @selected="toggle" />
            <LetterStarred @selected="toggle" />
            <LetterDraft @selected="toggle" />
            <LetterTrash @selected="toggle" />
            <LetterWork @selected="toggle" />
            <LetterPrivate @selected="toggle" />
            <LetterSupport @selected="toggle" />
            <AddLabel />
        </div>
    </div>
    <LetterDetail :class="active ? 'show' : ''" @selected="toggle()" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { tabs, dropdown } from "@/core/data/letter-box"
import { useCommonStore } from "@/store/common"
import { defineAsyncComponent } from 'vue'
const LetterInbox = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterInbox.vue"))
const LetterSent = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterSent.vue"))
const LetterStarred = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterStarred.vue"))
const LetterDraft = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterDraft.vue"))
const LetterTrash = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterTrash.vue"))
const LetterWork = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterWork.vue"))
const LetterPrivate = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterPrivate.vue"))
const LetterSupport = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterSupport.vue"))
const LetterEmail = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterEmail.vue"))
const LetterDetail = defineAsyncComponent(() => import("@/components/theme/letterbox/LetterDetail.vue"))
const AddLabel = defineAsyncComponent(() => import("@/components/theme/letterbox/AddLabel.vue"))
let activeclass = ref<string>('Promotion')
let active = ref<boolean>(false)
let store = useCommonStore()
function toggle() {
    active.value = !active.value
}
</script> 