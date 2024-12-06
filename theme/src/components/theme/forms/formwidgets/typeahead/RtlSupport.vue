<template>
    <Card3 colClass="col-sm-12 col-md-6" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        cardhaderClass="card-no-border pb-0" title="RTL Support" desc="Dataset shows in Right Side.">
        <div id="rtl-support">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="list" class="form-control typeahead form-control" dir="rtl"
                        @onInput="onInput" @onBlur="onBlur" placeholder="Countries" :minInputLength="options.minInputLength"
                        :hint="options.hint" />
                </div>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { options, onInput, onBlur } from "@/composables/common/typeaheadview"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let list = ref<string[]>(["India",
    "USA",
    "Australia",
    "UEA",
    "China"])
</script>