<template>
    <Card3 colClass="col-md-6" cardbodyClass="switch-wrapper" pre="true" cardhaderClass="card-no-border pb-0"
        preClass="mt-1 mb-0" headerTitle="true" title="Variation of switches"
        desc="Use the <code>.tgl-skewed/tgl-flip</code> class through created variations.">
        <ul class="tg-list common-flex">
            <li class="tg-list-item">
                <input class="tgl tgl-skewed" id="cb3" type="checkbox">
                <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb3"></label>
            </li>
            <li>
                <p> Skewed</p>
            </li>
            <li class="tg-list-item">
                <input class="tgl tgl-flip" id="cb5" type="checkbox">
                <label class="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" for="cb5"></label>
            </li>
            <li>
                <p>Flip</p>
            </li>
            <li class="tg-list-item">
                <div class="d-flex">
                    <div class="flex-grow-1 text-end icon-state">
                        <label class="switch mb-0 square-checked">
                            <input type="checkbox" checked><span class="switch-state bg-warning rounded-2"></span>
                        </label>
                    </div>
                </div>
            </li>
            <li>
                <p>Checked</p>
            </li>
            <li class="tg-list-item">
                <div class="d-flex">
                    <div class="flex-grow-1 text-end">
                        <label class="switch square-checked mb-0">
                            <input type="checkbox" checked><span class="switch-state bg-success rounded-2"></span>
                        </label>
                    </div>
                </div>
            </li>
            <li>
                <p>Flat</p>
            </li>
        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { Unchecked } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>