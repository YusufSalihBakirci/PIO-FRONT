<template>
    <div class="col-xl-6 order-xxl-0 order-xl-4 col-lg-12 box-col-7">
        <div class="card performance-card">
            <div class="card-header card-no-border pb-0">
                <div class="header-top">
                    <h3>School Performance</h3>
                    <div class="d-flex">
                        <ul class="performance-header">
                            <li class="me-3"><span class="circle bg-primary me-1"> </span>
                                <p class="mb-0">Students</p>
                            </li>
                            <li class="me-3"><span class="circle bg-secondary me-1"></span>
                                <p class="mb-0">Teachers</p>
                            </li>
                        </ul>
                        <ul class="simple-wrapper nav nav-pills" id="myTab" role="tablist">
                            <li class="nav-item"><a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#yearly"
                                    role="tab" aria-selected="true">Yearly</a></li>
                            <li class="nav-item"><a class="nav-link" id="profile-tabs" data-bs-toggle="tab" href="#monthly"
                                    role="tab" aria-selected="false">Monthly</a></li>
                            <li class="nav-item"><a class="nav-link active" id="contact-tab" data-bs-toggle="tab"
                                    href="#weekly" role="tab" aria-selected="false">Weekly</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card-body pb-0">
                <div id="groupBarChart">
                    <apexchart type="bar" height="325" ref="chart" :options="chartOptions13" :series="series13">
                    </apexchart>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { series13, chartOptions13 } from "@/core/data/dashboards-chart"
</script>