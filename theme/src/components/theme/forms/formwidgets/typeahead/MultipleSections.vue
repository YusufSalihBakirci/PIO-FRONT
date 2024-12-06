<template>
    <Card3 colClass="col-sm-12 col-md-6" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        cardhaderClass="card-no-border pb-0" title="Multiple sections with headers"
        desc="Two datasets that are prefetched, stored, and searched on the client. Highlighting is enabled.">
        <div id="multiple-datasets">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="multiple" class="form-control typeahead form-control" @onInput="onInput"
                        @onBlur="onBlur" placeholder="NBA and NHL teams" :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { options, multiple, onInput, onBlur } from "@/composables/common/typeaheadview"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>