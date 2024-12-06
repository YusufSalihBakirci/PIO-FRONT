<template>
    <section class="comment-box">
        <h4>Comment</h4>
        <hr>
        <ul>
            <li>
                <div class="d-flex align-self-center"><img class="align-self-center" src="@/assets/images/blog/comment.jpg"
                        alt="Generic placeholder image">
                    <div class="flex-grow-1">
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="mt-0">Jolio Mark<span> ( Designer )</span></h6>
                            </div>
                            <div class="col-md-8">
                                <ul class="comment-social float-start float-md-end">
                                    <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                    <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                                </ul>
                            </div>
                        </div>
                        <p>The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The
                            gardens are well kept and maintained. Its a good place for relaxation away from the city noise.
                            The staff is very friendly and overall we had a really good & fun time, thanks to staff member -
                            Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night
                            safari and saw barking deers, tuskar elephant.</p>
                    </div>
                </div>
            </li>
            <li>
                <ul>
                    <li>
                        <div class="d-flex"><img class="align-self-center" src="@/assets/images/blog/9.jpg"
                                alt="Generic placeholder image">
                            <div class="flex-grow-1">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <h6 class="mt-0">Mark Jolio <span> ( Designer )</span></h6>
                                    </div>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li v-for="(item, index) in single" :key="index">
                <div class="d-flex"><img class="align-self-center" :src="getImages(item.imge)"
                        alt="Generic placeholder image">
                    <div class="flex-grow-1">
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="mt-0">{{ item.name }}<span> ( {{ item.dep }} )</span></h6>
                            </div>
                            <div class="col-md-8">
                                <ul class="comment-social float-start float-md-end">
                                    <li><i class="icofont icofont-thumbs-up"></i>{{ item.hits }} Hits</li>
                                    <li><i class="icofont icofont-ui-chat"></i>{{ item.comments }} Comments</li>
                                </ul>
                            </div>
                        </div>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </li>

        </ul>
    </section>
</template>
<script lang="ts" setup>
import { single } from "@/core/data/blog"
import { getImages } from "@/composables/common/getImages"
</script>