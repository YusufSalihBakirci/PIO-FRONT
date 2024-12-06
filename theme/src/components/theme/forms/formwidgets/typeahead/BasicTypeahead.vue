<template>
    <Card3 colClass="col-sm-12 col-md-6" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        cardhaderClass="card-no-border pb-0" title="Basic typeahead" desc=" This is the simple demo for Typeahead.">
        <div id="the-basics">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="list" class=" typeahead form-control" :placeholder="options.placeholder"
                        @onInput="onInput" @onBlur="onBlur" :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { options, list, onInput, onBlur } from "@/composables/common/typeaheadview"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>