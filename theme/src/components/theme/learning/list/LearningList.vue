<template>
    <div class="col-xl-9 xl-60 order-xl-0 order-1 box-col-12">
        <div class="row">
            <div class="col-xl-12" v-for="(course, index) in specialcourses" :key="'special' + index">
                <div class="card">
                    <div class="blog-box blog-list row">
                        <div class="col-sm-5"><img class="img-fluid sm-100-w" :src="getImages(course.image)" alt=""></div>
                        <div class="col-sm-7">
                            <div class="blog-details">
                                <div class="blog-date"><span v-text="course.dd"></span>
                                    {{ course.mm }} {{
                                        course.yy
                                    }}</div>
                                <h5 v-text="course.title"></h5>
                                <div class="blog-bottom-content">
                                    <ul class="blog-social">
                                        <li v-text="' by: ' + course.author"></li>
                                        <li class="digits" v-text="course.hits + ' Hits'"></li>
                                    </ul>
                                    <hr>
                                    <p class="mt-0" v-text="course.descr"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 xl-50 col-sm-6 box-col-6" v-for="(course, index) in normalcourses" :key="'normal' + index">
                <div class="card">
                    <div class="blog-box blog-grid text-center product-box">
                        <div class="product-img"><img class="img-fluid top-radius-blog" :src="getImages(course.image)"
                                alt="">
                            <div class="product-hover">
                                <ul>
                                    <li><i class="icon-link"></i></li>
                                    <li><i class="icon-import"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div class="blog-details-main">
                            <ul class="blog-social">
                                <li>{{ course.date }}</li>
                                <li>by: Admin</li>
                                <li>{{ course.hit }} Hits</li>
                            </ul>
                            <hr>
                            <h6 class="blog-bottom-details"><router-link
                                    :to="{ name: 'coursedetailed', params: { id: course.id } }">{{ course.descr
                                    }}.</router-link></h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { courses } from "@/core/data/learning"
import { getImages } from "@/composables/common/getImages"
const specialcourses = computed(() => {
    return courses.filter((course) => {
        if (course.special === 1)
            return course;
    });
})
const normalcourses = computed(() => {
    return courses.filter((course) => {
        if (course.special === 0)
            return course;
    });
})
</script>