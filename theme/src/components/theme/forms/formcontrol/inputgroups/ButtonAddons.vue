<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0"
        cardbodyClass="card-wrapper input-group-wrapper" preClass="mt-1 mb-0" headerTitle="true" title="Button addons "
        desc="Multiple add-ons are supported and can be mixed with buttons input versions.">
        <div class="input-group">
            <button class="btn btn-outline-secondary" id="button-addon1" type="button">$ 25</button>
            <input class="form-control" type="text" placeholder="" aria-label="Example text with button addon"
                aria-describedby="button-addon1">
        </div>
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-warning" id="button-addon2" type="button">Submit</button>
        </div>
        <div class="input-group">
            <button class="btn btn-secondary" type="button"> <span>&#8364; </span></button>
            <button class="btn btn-warning text-white" type="button">0.0114419</button>
            <input class="form-control" type="text" placeholder="" aria-label="Example text with two button addons">
        </div>
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons">
            <button class="btn btn-secondary" type="button"> <span>&#8377;</span></button>
            <button class="btn btn-warning text-white" type="button">500</button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>