<template>
    <div class="col-xl-9 xl-60 order-xl-0 order-1 box-col-12 learning-details">
        <div class="card">
            <div class="card-body">
                <div class="blog-single">
                    <div class="blog-box blog-details"><img class="img-fluid w-100" :src="getImages(data.image)"
                            alt="blog-main">
                        <div class="blog-details">
                            <ul class="blog-social">
                                <li>25 July 2024</li>
                                <li><i class="icofont icofont-user"></i>Mark <span>Jecno </span></li>
                                <li><i class="icofont icofont-thumbs-up"></i>02<span>Hits</span></li>
                                <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                            </ul>
                            <h4>{{ data.descr }}</h4>
                            <div class="single-blog-content-top">
                                <p>Knowledge can be defined as awareness of facts or as practical skills, and may also refer
                                    to familiarity with objects or situations. Knowledge of facts, also called propositional
                                    knowledge, is often defined as true belief that is distinct from opinion or guesswork by
                                    virtue of justification. While there is wide agreement among philosophers that it is a
                                    form of true belief, many controversies in philosophy focus on justification: whether it
                                    is needed at all, how to understand it, and whether something else besides it is needed.
                                </p>
                                <p>Knowledge can be produced in many different ways. The most important source is
                                    perception, which refers to the usage of the five senses. Many theorists also include
                                    introspection as a source of knowledge, not of external physical objects, but of one's
                                    own mental states. Other sources often discussed include memory, rational intuition,
                                    inference, and testimony. According to foundationalism, some of these sources are basic
                                    in the sense that they can justify beliefs without depending on other mental states.
                                    This claim is rejected by coherentists.</p>
                            </div>
                        </div>
                    </div>
                    <CourseDetail />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { courses } from "@/core/data/learning"
import { getImages } from "@/composables/common/getImages"
import { useRouter } from 'vue-router'
const CourseDetail = defineAsyncComponent(() => import("@/components/theme/learning/Course/CourseDetail.vue"))
const router = useRouter()
const data = courses.find(item => {
    if (parseInt(router.currentRoute._rawValue.params.id) === item.id)
        return item
})
</script>