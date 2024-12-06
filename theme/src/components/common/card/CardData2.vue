<template>
    <div :class="colClass">
        <div class="card" :class="cardClass" v-if="headerTitle">
            <div :class="smallClass">
                <div class="card-header" :class="cardhaderClass">
                    <h3>{{ title }}</h3>
                </div>
                <div class="card-body" :class="cardbodyClass">
                    <div class="chart-container" :class="contain">
                        <div class="row">
                            <div class="col-12">
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="cardClass" v-else>
            <div v-if="header" class="card-header" :class="cardhaderClass">
                <div :class="top">
                    <h3>{{ title }}</h3>
                    <div class="card-header-right-icon" v-if="dropdown">
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" id="dropdownMenuButton" type="button"
                                data-bs-toggle="dropdown">Today</button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton"><a
                                    class="dropdown-item" href="#">Today</a><a class="dropdown-item" href="#">Tomorrow</a><a
                                    class="dropdown-item" href="#">Yesterday</a></div>
                        </div>
                    </div>
                </div>

            </div>
            <div :class="chartClass" v-if="charts">
                <div :class="cardbodyClass">
                    <div class="col-xl-9 col-lg-8 col-9 p-0">
                        <h3 class="mb-2">{{ title }}</h3>
                        <h3>{{ price }}</h3><span>{{ desc }}</span>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-3 text-end p-0">
                        <h6 class="text-success">{{ total }}</h6>
                    </div>
                </div>
                <slot />
            </div>
            <div :class="chartClass" v-else>
                <div :class="cardbodyClass">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let props = defineProps({
    title: String,
    cardClass: String,
    colClass: String,
    cardbodyClass: String,
    cardhaderClass: String,
    headerTitle: String,
    dropdown: String,
    chartClass: String,
    price: String,
    desc: String,
    total: String,
    header: String,
    charts: String,
    top: String,
    smallClass: String,
    contain: String
})
</script>