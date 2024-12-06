<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" cardBodyClass="basic-form"
        preClass="mt-1 mb-0" headerTitle="true" title="Sizing"
        desc="Use the <code>.form-floating</code> through create floating form.">
        <div class="card-wrapper border rounded-3">
            <form class="row floating-wrapper">
                <div class="mb-3">
                    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"
                        aria-label=".form-control-lg example">
                </div>
                <div class="mb-3">
                    <input class="form-control" type="text" placeholder="Default input" aria-label="default input example">
                </div>
                <div class="mb-3">
                    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm"
                        aria-label=".form-control-sm example">
                </div>
                <div class="form-text" id="passwordHelpBlock">Your password must be 8-20 characters long, contain letters
                    and numbers.</div>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>