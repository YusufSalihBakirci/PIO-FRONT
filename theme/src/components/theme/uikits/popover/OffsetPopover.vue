<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="common-flex" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Popover Offset"
        desc="To add the offset for popover using <code> data-bs-offset='*'.</code>">
        <Popper class="pop" arrow placement="right" disableClickAway>
            <button class="btn btn-secondary mb-0 me-0">Popover
                offset 50</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Popover title</h3>
                    <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
                </div>

            </template>
        </Popper>
        <Popper arrow placement="left" disableClickAway>
            <button class="example-popover btn btn-dark mb-0 me-0">Popover
                offset -50</button>
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