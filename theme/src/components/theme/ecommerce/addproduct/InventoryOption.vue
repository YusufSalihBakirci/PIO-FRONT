<template>
    <div class="tab-pane fade show active" id="manifest-option" role="tabpanel" aria-labelledby="manifest-option-tab">
        <div class="meta-body">
            <form id="advance-tab">
                <div class="row g-3 custom-input">
                    <div class="col-sm-6">
                        <label class="form-label" for="validationServer01">Stock Availability</label>
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(item, index) in stock" :key="index">{{ item.title }}</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label" for="validationServer01">Low Stock</label>
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="(item, index) in stock" :key="index">{{ item.title }}</option>
                        </select>
                    </div>
                    <div class="col-lg-3 col-sm-6" v-for="(item, index) in inventory" :key="index">
                        <label class="form-label" :for="item.for">{{ item.title }} <span class="txt-danger">*</span></label>
                        <input class="form-control" :id="item.for" :type="item.type">
                    </div>
                    <div class="col-12">
                        <label class="form-label" for="exampleFormControlInput1">Allow Backorders</label>
                        <div class="form-check">
                            <input class="form-check-input" id="gridCheck" type="checkbox">
                            <label class="form-check-label m-0" for="gridCheck">This is a digital Product</label>
                            <p class="f-light">Decide if the product is a digital or physical item. Shipping may be
                                necessary for real-world items.</p>
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
                        <div class="d-flex align-items-center gap-sm-2 gap-1">Next
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
import { stock, availability, inventory } from "@/core/data/ecommerce"
</script>