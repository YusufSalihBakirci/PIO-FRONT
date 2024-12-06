<template>
    <Card3 colClass="col-sm-12 col-xxl-6 box-col-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Without borders style"
        desc="By adding <code>.plain-style </code>class to <code>.mega-inline</code> You can archive this style"
        footer="show" footerclass="text-end" lightclass="list-light-warning" btnclass="btn-warning">
        <form class="mega-inline plain-style">
            <div class="row">
                <div class="col-sm-6" v-for="(item, index) in borderstyle" :key="index">
                    <div class="card">
                        <div class="d-flex p-20">
                            <div class="form-check checkbox  m-0" :class="item.class">
                                <input class="form-check-input" :id="item.id" type="checkbox" :checked="item.checked">
                                <label class="form-check-label" :for="item.id"><span
                                        class="flex-grow-1 megaoption-space"><span class="mt-0 mega-title-badge">{{
                                            item.label }}<span class="badge pull-right digits" :class="item.badgeclass">{{
        item.badge }}</span></span><span>{{ item.desc }}</span></span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { borderstyle } from "@/core/data/forms"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>