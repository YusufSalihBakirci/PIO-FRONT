<template>
    <Card3 colClass="col-sm-12 col-xxl-6 box-col-6" cardhaderClass="card-no-border pb-0"
        cardbodyClass="megaoptions-border-space-sm" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Solid border style"
        desc="Use the <code>.border-style</code> class to <code>.mega-inline</code> you can archive this style."
        footer="show" lightclass="btn-light text-dark" footerclass="text-end" btnclass="btn-primary">
        <form class="mega-inline border-style">
            <div class="row flex-column">
                <div class="col-12" v-for="(item, index) in dashed" :key="index">
                    <div class="card">
                        <div class="d-flex p-20">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio1" value="option1">
                                <label class="form-check-label my-0" for="radio15"><span class="flex-grow-1"><span
                                            class="d-flex list-behavior-1"><span class="flex-shrink-0"><img
                                                    class="tab-img img-fluid" :src="getImages(item.img)"
                                                    alt="home"></span><span class="flex-grow-1"><span class="mb-0">{{
                                                        item.desc }}</span></span></span></span></label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { dashed } from "@/core/data/forms"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>