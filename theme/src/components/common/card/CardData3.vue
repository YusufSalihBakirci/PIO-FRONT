<template>
    <div :class="colClass">
        <div :class="contain">
            <slot v-if="box" />
            <div class="card" v-else :class="cardClass">
                <div class="card-header" :class="cardhaderClass" v-if="headerTitle">

                    <h4 :class="titleClass" v-if="titles"> <i :class="icon" v-if="ico"></i><vue-feather v-if="icos"
                            :type="type"></vue-feather>{{ title
                            }}</h4>
                    <h3 :class="titleClass" v-else><i :class="icon" v-if="ico"></i>{{ title }}</h3><span v-if="text"
                        v-html="props.desc"></span>
                    <p v-if="pre" :class="preClass" v-html="props.desc"></p>
                </div>
                <div class="card-header" :class="cardhaderClass" v-if="headerTitle1">
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <h3 :class="titleClass">{{ title }}</h3>
                            <p v-if="pre" :class="preClass" v-html="props.desc"></p>
                        </div>
                    </div>
                </div>
                <slot v-if="table" />
                <div class="card-body" v-else :class="cardbodyClass">
                    <div :class="chartClass" v-if="charts">
                        <slot />
                    </div>
                    <slot v-else />
                </div>
                <slot name="light-box" />
                <div class="card-footer " v-if="footer" :class="footerclass">
                    <div class="table-responsive theme-scrollbar" v-if="grid">
                        <table class="w-100">
                            <tbody>
                                <tr>
                                    <th> Class</th>
                                    <th>Value of the class</th>
                                </tr>
                                <tr>
                                    <td><code>{{ content }}</code></td>
                                    <td>{{ startClass }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h6 class="mb-0 " :class="footersClass">{{ footertitle }}</h6>
                    <button class="btn  m-r-15" v-if="btnclass" :class="btnclass" type="submit">Submit</button>
                    <button class="btn ms-2 text-dark" v-if="lightclass" :class="lightclass" type="submit">Cancel</button>
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
    contain: String,
    pre: String,
    preClass: String,
    titles: String,
    card: String,
    footer: String,
    btnclass: String,
    lightclass: String,
    table: String,
    text: String,
    descs: String,
    content: String,
    startClass: String,
    footerclass: String,
    icon: String,
    type: String,
    ico: String,
    footersClass: String,
    footertitle: String,
    grid: String,
    box: String,
    titleClass: String,
    headerTitle1: String,
    icos: String
})
</script>