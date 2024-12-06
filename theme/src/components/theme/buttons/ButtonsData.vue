<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Default buttons" titleClass="mb-1" desc="Bootstrap state buttons">
        <button class="btn " :class="item.classes" v-for="(item, index) in button " :key="index" type="button">{{
            item.title }}</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Flat button" desc="Add <code>.btn-square</code> class for flat button">
        <button class="btn btn-square" :class="item.classes" v-for="(item, index) in buttons " :key="index" type="button">{{
            item.title }}</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Edge buttons" desc="Add <code>.btn-pill</code> class for edge button">
        <button class="btn btn-pill" :class="item.classes" v-for="(item, index) in buttons " :key="index" type="button">{{
            item.title }}</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-group-showcase" headerTitle="true"
        title="Buttons group">
        <div class="row">
            <div class="col-xxl-4 col-md-6 col-sm-12" v-for="(item, index) in flat" :key="index">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button class="btn " :class="item.classes" type="button">Left</button>
                    <button class="btn " :class="item.classes" type="button">Middle</button>
                    <button class="btn " :class="item.classes" type="button">Right</button>
                </div>
            </div>
        </div>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Large buttons" desc="Add <code>.btn-lg </code>class for large size buttons.">
        <button class="btn btn-lg" :class="item.classes" v-for="(item, index) in button " :key="index" type="button">{{
            item.title }}</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Small buttons" desc="Add<code>.btn-sm</code> class for small size buttons">
        <button class="btn btn-sm" :class="item.classes" v-for="(item, index) in buttons " :key="index" type="button">{{
            item.title }}</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Active Buttons" desc="Add <code>.active </code>class for active state.">
        <button class="btn active" :class="item.classes" v-for="(item, index) in actives " :key="index"
            type="button">Active</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Disabled buttons "
        desc="Add   <code>.disabled   </code>class or  <code>disabled='disabled'  </code>attribute for disabled button         ">
        <button class="btn disabled" :class="item.classes" v-for="(item, index) in actives " :key="index"
            type="button">Disabled</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Outline Buttons"
        desc="Add <code>.btn-outline-*</code> class for border button">
        <button class="btn " :class="item.classes + item.text" v-for="(item, index) in outline" :key="index"
            type="button">{{
                item.title }}</button>
    </Card3>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        pre="true" preClass="mb-0 mt-1" title="Bold border outline button"
        desc="Add <code>.btn-outline-*-2x </code>class for bold outline.">
        <button class="btn " :class="item.classes + '-2x ' + item.text" v-for="(item, index) in outline" :key="index"
            type="button">{{
                item.title }}</button>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { button, buttons, flat, actives, outline } from "@/core/data/buttons"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>