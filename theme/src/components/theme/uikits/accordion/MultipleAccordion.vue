<template>
    <Card3 colClass="col-sm-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Multiple Collapse Accordion"
        desc="Use <code> href </code>  on  <code>data-bs-toggle attribute</code> to show and hide multiple elements.">
        <div class="common-flex">
            <button class="btn btn-primary" href="#multiCollapseExample1" role="button"
                :aria-expanded="isActive ? 'true' : 'false'" :class="[isActive ? 'active' : '', 'collapsible']"
                v-on:click="toggle" aria-controls="multiCollapseExample1">Toggle first element</button>
            <button class="btn btn-warning text-white" type="button" data-bs-target="#multiCollapseExample2"
                :aria-expanded="isActive2 ? 'true' : 'false'" :class="[isActive1 ? 'active' : '', 'collapsible']"
                v-on:click="toggle1" aria-controls="multiCollapseExample2">Toggle second element</button>
            <button class="btn btn-success" type="button" data-bs-target=".multi-collapse" aria-expanded="false"
                v-on:click="toggle2" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
                elements</button>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <div class=" multi-collapse " :class="[isActive ? 'block' : ' show']" v-show="isActive"
                    id="multiCollapseExample1">
                    <div class="card card-body mt-3 mb-0 collapse-wrapper accordion-light-primary">The collapse JavaScript
                        plugin
                        is used to show and hide content. Buttons or anchors are used as triggers that are mapped to
                        specific elements you toggle. Collapsing an element will animate the height from it's current value
                        to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use
                        the class as an independent wrapping element.</div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class=" multi-collapse " :class="[isActive1 ? 'block' : ' show']" v-show="isActive1"
                    id="multiCollapseExample2">
                    <div class="card card-body mt-3 mb-0 collapse-wrapper accordion-light-warning">This is the first item's
                        accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that
                        we use to style each element. These classes control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default
                        variables.</div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { useCommonStore } from "@/store/common"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("A <code> &lt;button&gt;</code> or<code>  &lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its href or data-bs-target attribute. ")
let store = useCommonStore()
let data = store.multiple
let datas = store.multi

let isActive = ref<boolean>(false)
let isActive1 = ref<boolean>(false)
let isActive2 = ref<boolean>(false)
function toggle() {
    isActive.value = !isActive.value
}
function toggle1() {
    isActive1.value = !isActive1.value
}
function toggle2() {
    isActive1.value = !isActive1.value
    isActive.value = !isActive.value
}
</script>