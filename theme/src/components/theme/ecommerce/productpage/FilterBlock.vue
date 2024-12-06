<template>
    <div class="col-xxl-3 col-md-6 box-col-12">
        <div class="card">
            <div class="card-body">

                <div class="filter-block">
                    <h4>Brand</h4>
                    <ul>
                        <li v-for="(item, index) in brand" :key="index">{{ item.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="collection-filter-block">
                    <ul class="pro-services">
                        <li v-for="(item, index) in collection" :key="index">
                            <div class="d-flex"><vue-feather :type="item.icon"></vue-feather>
                                <div class="flex-grow-1">
                                    <h5>{{ item.title }} </h5>
                                    <p>{{ item.desc }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { collection, brand } from "@/core/data/ecommerce"
</script>