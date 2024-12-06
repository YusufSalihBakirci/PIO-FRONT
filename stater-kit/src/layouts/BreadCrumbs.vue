<template>
    <div class="container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-sm-6 col-12">
                    <h2>{{ mains }}</h2>
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

})
</script>