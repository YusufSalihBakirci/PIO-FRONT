<template>
    <div class="tab-pane fade" id="category-product" role="tabpanel" aria-labelledby="category-product-tab">
        <div class="sidebar-body">
            <form>
                <div class="row g-lg-4 g-3">
                    <div class="col-12">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="row g-2">
                                    <div class="col-12">
                                        <label class="form-label m-0" for="validationServer01">Add Category</label>
                                    </div>
                                    <div class="col-12">
                                        <select class="form-select" id="validationDefault04" required>
                                            <option v-for="(item, index) in category" :key="index">{{ item.title }}</option>
                                        </select>
                                        <p class="f-light">A product can be added to a category</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row g-2 product-tag">
                                    <div class="col-12">
                                        <label class="form-label d-block m-0" for="validationServer01">Add Tag</label>
                                    </div>
                                    <div class="col-12">
                                        <vue3-tags-input :tags="tags" placeholder="input tags" />
                                        <p class="f-light">Products can be tagged</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="category-buton"><a class="btn button-primary bg-light-primary text-white" href="#!" data-bs-toggle="modal"
                                        data-bs-target="#category-pill-modal"><i class="me-2 fa-solid fa-plus"> </i>Create
                                        New
                                        Category </a></div>
                                <CategoryModal />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-12">
                                        <label class="form-label" for="validationServer01">Publish Status</label>
                                        <select class="form-select" id="validationDefault04" required>
                                            <option v-for="(item, index) in status" :key="index">{{ item.title }}</option>
                                        </select>
                                        <p class="f-light">Choose the status</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-12">
                                        <label class="form-label" for="validationServer01">Publish Date & Time</label>
                                        <div class="input-group flatpicker-calender product-date">
                                            <Datepicker class="form-control" v-model="date" />
                                        </div>
                                    </div>
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
import { ref, defineAsyncComponent } from 'vue'
import { category, status } from "@/core/data/ecommerce"
import Vue3TagsInput from 'vue3-tags-input';
const CategoryModal = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/CategoryModal.vue"))
let date = ref();
let tags = ref<string[]>(['watches', 'sports', 'clothes', 'bottles'])

</script>