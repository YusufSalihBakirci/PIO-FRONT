<template>
    <div class="tab-pane fade" id="pricings" role="tabpanel" aria-labelledby="pricings-tab">
        <div class="sidebar-body">
            <form class="price-wrapper">
                <div class="row g-3 custom-input">
                    <div class="col-sm-6">
                        <label class="form-label" for="exampleFormControlInput1">Initial cost <span
                                class="txt-danger">*</span></label>
                        <input class="form-control" id="exampleFormControlInput1" type="number">
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label" for="exampleFormControlInput1">Selling price <span
                                class="txt-danger">*</span></label>
                        <input class="form-control" id="exampleFormControlInput1" type="number">
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label" for="validationServer01">Choose your currency</label>
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(item, index) in currency" :key="index">{{ item.title }}</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label" for="exampleFormControlInput1">Product stocks<span
                                class="txt-danger">*</span></label>
                        <input class="form-control" id="exampleFormControlInput1" type="number">
                    </div>
                    <div class="col-12">
                        <label class="form-label" for="exampleFormControlInput1">Types of product discount<i
                                class="icon-help-alt ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-title="Choose the kind of discount that will be used on that particular item."></i></label>
                        <ul class="radio-wrapper">
                            <li v-for="(item, index) in discount" :key="index">
                                <input class="form-check-input" :id="item.for" type="radio" name="radio5" value="option5"
                                    :checked="item.checked">
                                <label class="form-check-label" :for="item.for"><span>{{ item.title }}</span></label>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="product-buttons">
                    <button class="btn me-1">
                        <div class="d-flex align-items-center gap-sm-2 gap-1">
                            <svg>
                                <use href="@/assets/svg/icon-sprite.svg#back-arrow"></use>
                            </svg>Previous
                        </div>
                    </button>
                    <button class="btn">
                        <div class="d-flex align-items-center gap-sm-2 gap-1">Next
                            <svg>
                                <use href="@/assets/svg/icon-sprite.svg#front-arrow"> </use>
                            </svg>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { currency, discount } from "@/core/data/ecommerce"
</script>