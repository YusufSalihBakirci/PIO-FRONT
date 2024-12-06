<template>
    <Card3 colClass="col-sm-12 col-md-6" pre="true" preClass="mt-1 mb-0" cardhaderClass="card-no-border pb-0"
        headerTitle="true" title="Custom templates"
        desc="Custom templates give you full control over how suggestions get rendered">
        <div id="custom-templates">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="lists" class="form-control typeahead form-control" @onInput="onInput"
                        @onBlur="onBlur" placeholder="Oscar winners" :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { options, lists, onInput, onBlur } from "@/composables/common/typeaheadview"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>