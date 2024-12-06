<template>
    <div class="tab-pane fade" id="dropping-option" role="tabpanel" aria-labelledby="dropping-option-tab">
        <div class="meta-body">
            <form>
                <div class="row g-3 custom-input">
                    <div class="col-12">
                        <div class="row gx-xl-3 gx-md-2 gy-md-0 g-2">
                            <div class="col-12">
                                <label class="form-label" for="exampleFormControlInput1">Where can I pick up my
                                    order?</label>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <input class="form-control" id="inputZip" type="number" placeholder="Zip code (10001)">
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <input class="form-control" id="inputCity" type="text" placeholder="City">
                            </div>
                            <div class="col-md-4">
                                <select class="form-select" id="inputState">
                                    <option v-for="(item, index) in state" :key="index">{{ item.title }}</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <label class="form-label" for="exampleFormControlInput1">Weight (kg)</label><i
                                    class="icon-help-alt ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-title="set proper weight for product items."></i>
                            </div>
                            <div class="col-12">
                                <input class="form-control" id="inputCity" type="number">
                                <p class="f-light">Decide if the product is a digital or physical item. Shipping may be
                                    necessary for real-world items.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row gx-xl-3 gx-md-2 gy-md-0 g-2">
                            <div class="col-12">
                                <label class="form-label" for="exampleFormControlInput1">Dimensions </label><i
                                    class="icon-help-alt ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                                    data-bs-title="set proper length/width and height for product items."></i>
                            </div>
                            <div :class="item.class" v-for="(item, index) in dimensions" :key="index">
                                <input class="form-control" id="inputCity" type="number" :placeholder="item.placeholder">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <label class="form-label" for="exampleFormControlInput1">Shipping Class</label>
                                </div>
                                <div class="col-md-12">
                                    <select class="form-select" id="inputState">
                                        <option v-for="(item, index) in shipping" :key="index">{{ item.title }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
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
                        <div class="d-flex align-items-center gap-sm-2 gap-1">Submit
                            <svg>
                                <use href="@/assets/svg/icon-sprite.svg#front-arrow"></use>
                            </svg>
                        </div>
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { state, shipping, dimensions } from "@/core/data/ecommerce"
</script>