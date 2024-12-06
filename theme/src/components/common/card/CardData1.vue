<template>
    <div :class="colClass">
        <div :class="cardClass">
            <div class="card-header " v-if="header" :class="cardhaderClass">
                <div class="header-top" v-if="headerTop">
                    <h3 v-if="haderTitle">{{ title }}</h3>
                    <div v-if="headerTitle1">
                        <h3>{{ title }}</h3><span v-html="desc"></span>
                    </div>
                    <div class="dropdown" v-if="drop">
                        <button class="btn dropdown-toggle" id="userdropdown3" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">{{ item }}</button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown3"><a
                                class="dropdown-item" href="#">{{ item1 }}</a><a class="dropdown-item" href="#">{{ item2
                                }}</a><a class="dropdown-item" href="#">{{ item3 }}</a></div>
                    </div>
                    <div class="dropdown icon-dropdown" v-if="down">
                        <button class="btn" id="userdropdown4" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown4"><a
                                class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a
                                class="dropdown-item" href="#">Yearly</a></div>
                    </div>
                    <ul class="simple-wrapper nav nav-pills" v-if="tab" id="myTab" role="tablist">
                        <li class="nav-item"><a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#yearly"
                                role="tab" aria-selected="true">Yearly</a></li>
                        <li class="nav-item"><a class="nav-link" id="profile-tabs" data-bs-toggle="tab" href="#monthly"
                                role="tab" aria-selected="false">Monthly</a></li>
                        <li class="nav-item"><a class="nav-link active" id="contact-tab" data-bs-toggle="tab" href="#weekly"
                                role="tab" aria-selected="false">Weekly</a></li>
                    </ul>
                    <div v-if="condition">
                        <p> {{ desc }}<span v-if="text" :class="spanclass">{{ spantitle }} </span></p>
                    </div>
                </div>
                <h3 v-else>{{ title }}</h3>

            </div>
            <slot v-if="data" />
            <div class="card-body" v-else :class="cardbodyClass">
                <slot />
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
    header: String,
    headerTop: String,
    drop: String,
    item: String,
    item1: String,
    item2: String,
    item3: String,
    data: String,
    desc: String,
    text: String,
    spantitle: String,
    spanclass: String,
    down: String,
    tab: String,
    condition: String,
    haderTitle: String,
    headerTitle1: String
})
</script>