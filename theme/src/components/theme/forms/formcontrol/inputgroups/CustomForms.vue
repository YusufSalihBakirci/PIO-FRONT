<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" cardbodyClass="common-flex main-custom-form"
        preClass="mt-1 mb-0" headerTitle="true" title="Custom forms"
        desc="Input groups include support for  <code>custom selects and custom file inputs          </code>">
        <div class="input-group" v-for="(item, index) in customform" :key="index">
            <label class="input-group-text" for="inputGroupSelect01" v-if="item.option">Options</label>
            <button class="btn btn-outline-secondary" type="button" v-if="item.iconbutton"><i
                    class="fa-solid fa-credit-card"></i></button>
            <select class="form-select" id="inputGroupSelect01">
                <option v-for="(items, index) in item.children" :key="index">{{ items.title }}</option>

            </select>
            <label class="input-group-text" for="inputGroupSelect02" v-if="item.options">Options</label>
            <button class="btn btn-outline-secondary" type="button" v-if="item.submit">Submit</button>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { customform } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>