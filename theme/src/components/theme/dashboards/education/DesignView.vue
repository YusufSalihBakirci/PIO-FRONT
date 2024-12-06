<template>
    <div :class="item.colclass" v-for="(item, index) in design" :key="index">
        <div class="card graphic-design overflow-hidden">
            <div class="card-header card-no-border pb-0">
                <div class="header-top">
                    <div class="d-flex align-items-center gap-2">
                        <div class="flex-shrink-0">
                            <div class="icon"><img class="img-fluid" :src="getImages(item.img)" alt="chair" /></div>
                        </div>
                        <div class="flex-grow-1">
                            <h5>{{ item.name }}</h5>
                            <p class="mb-0">{{ item.sub }}</p>
                        </div>
                    </div>
                    <div class="dropdown icon-dropdown">
                        <button class="btn" id="userdropdown1" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown1"><a
                                class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a
                                class="dropdown-item" href="#">Yearly</a></div>
                    </div>
                </div>
            </div>
            <div class="card-body p-0">
                <ul>
                    <li v-for="(items, index) in item.children" :key="index"><i class=" icli me-1" :class="items.icon"></i>
                        <h5>{{ items.title }}</h5>
                    </li>
                </ul>
                <div class="crypto-dashborad-chart">
                    <div :class="item.class" id="bitcoin-chart">
                        <apexchart type="area" height="170" ref="chart" :options="item.options" :series="item.series">
                        </apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { design } from "@/core/data/dashboards"
import { getImages } from "@/composables/common/getImages"
</script>