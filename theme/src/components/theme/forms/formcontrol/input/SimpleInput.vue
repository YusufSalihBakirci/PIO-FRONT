<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" cardBodyClass="basic-form"
        preClass="mt-1 mb-0" headerTitle="true" title="Simple Example"
        desc="Use the<code>.form-label</code>and<code>.form-control </code>through create basic form.">
        <div class="card-wrapper border rounded-3">
            <form class="row">
                <div class="mb-3">
                    <label class="form-label" for="exampleFormControlInput1">Email address</label>
                    <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="name@example.com">
                </div>
                <div>
                    <label class="form-label" for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>