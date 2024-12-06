<template>
    <Card3 headerTitle="true" title="Init AOS" cardhaderClass="card-no-border pb-0">
        <div><i class="text-muted">
                // The Below Function is example of how to initlize reveal</i>
            <div class="line"><span></span> &lt;script&gt; <span></span><br><code>  AOS.init();</code><br><span> &lt;</span>
                /script <span> &gt; </span></div>
        </div>
    </Card3>


    <Card3 text="true" headerTitle="true" cardhaderClass="card-no-border pb-0" title="How to use it?"
        desc="All you have to do is to add <code>data-aos</code> attribute to html element, like so:">
        <div class="txt-primary"><span> &lt;</span> div data-aos="animation_name" <span> &gt; </span>
        </div>
    </Card3>

    <Card3 text="true" headerTitle="true" cardhaderClass="card-no-border pb-0" cardbodyClass="table-responsive" title=" Advanced settings"
        desc="These settings can be set both on certain elements, or as default while initializing script (in options object without <code> data- part).</code>">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Description</th>
                    <th>Example value</th>
                    <th>Default value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in init" :key="index">
                    <td v-html="item.attr"></td>
                    <td>{{ item.desc }}</td>
                    <td>{{ item.example }}</td>
                    <td>{{ item.default }}</td>
                </tr>

            </tbody>
        </table>
    </Card3>

    <Card3 text="true" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Animation"
        desc="There are serveral predefined animations you can use already:">
        <ul class="line">
            <li v-for="(item, index) in animation" :key="index">
                <h4>{{ item.title }}</h4>
                <ol class="ps-4 mb-4 ">
                    <li v-for="(items, index) in item.children" :key="index">{{ items.title }}</li>

                </ol>
            </li>
        </ul>
    </Card3>

    <Card3 headerTitle="true" cardhaderClass="card-no-border pb-0" title=" Anchor placement">
        <ol class="ps-4  line">
            <li v-for="(item, index) in anchor" :key="index">{{ item }}</li>

        </ol>
    </Card3>


    <Card3 headerTitle="true" cardhaderClass="card-no-border pb-0" title="Easing functions:">
        <ol class="ps-4  line">
            <li v-for="(item, index) in easing" :key="index">{{ item }}</li>

        </ol>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { init, animation, anchor, easing } from "@/core/data/masonry"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("All you have to do is to add <code>data-aos</code> attribute to html element, like so:")
let desc1 = ref<string>("These settings can be set both on certain elements, or as default while initializing script (in options object without <code> data- part).</code>")
let desc2 = ref<string>("There are serveral predefined animations you can use already:")
</script>