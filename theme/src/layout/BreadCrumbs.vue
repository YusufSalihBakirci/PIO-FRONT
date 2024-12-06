<template>
    <div class="container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-sm-6 col-12">
                    <h2>{{ mains }}</h2>
                    <p class="mb-0 text-title-gray" v-if="defaultdesc">Welcome back! Let’s start from where you left.</p>
                    <p class="mb-0 text-title-gray" v-if="ecommorcedesc">"Welcome back! Continue your journey."</p>
                    <p class="mb-0 text-title-gray" v-if="educationdesc">"Welcome back to your educational adventure!"</p>
                </div>
                <div class="col-sm-6 col-12">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/"><i
                                    class="iconly-Home icli svg-color"></i></router-link></li>
                        <li class="breadcrumb-item">{{ main }}</li>
                        <li class="breadcrumb-item active">{{ title }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
let props = defineProps({
    title: {
        default: 'home'
    },
    main: {
        default: ''
    },
    mains: {
        default: ''
    },
    defaultdesc: String,
    ecommorcedesc: String,
    educationdesc: String
})
</script>