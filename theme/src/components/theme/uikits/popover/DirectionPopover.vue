<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="common-flex" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Popover Direction" desc="To set the position of popover use the
                    <code> data-bs-placement='top/bottom/...'.</code>">
        <Popper class="pop" arrow placement="top" disableClickAway>
            <button class="example-popover btn btn-warning mb-0 me-0 text-light">Popover on top</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Popover On Top</h3>
                    <div class="popover-body">Popovers need the tooltip plugin considering that a dependency.</div>
                </div>

            </template>
        </Popper>
        <Popper arrow placement="right" disableClickAway>
            <button class="example-popover btn btn-danger mb-0 me-0">Popover on right</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Popover On Right</h3>
                    <div class="popover-body">Popovers are opt-in for effectiveness causes, in this way you have to
                        initialize them yourself.</div>
                </div>

            </template>
        </Popper>
        <Popper arrow placement="bottom" disableClickAway>
            <button class="example-popover btn btn-info mb-0 me-0 text-light">Popover on bottom</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Popover On Bottom</h3>
                    <div class="popover-body">Identify container:to evade rendering problems in more complex components
                        (like Bootstrap input groups, button groups, etc).</div>
                </div>

            </template>
        </Popper>
        <Popper arrow placement="left" disableClickAway>
            <button class="example-popover btn btn-dark mb-0 me-0">Popover on left</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Popover On Left</h3>
                    <div class="popover-body">Popovers are opt-in for effectiveness causes, in this way you have to
                        initialize them yourself.</div>
                </div>

            </template>
        </Popper>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import Popper from "vue3-popper";
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>