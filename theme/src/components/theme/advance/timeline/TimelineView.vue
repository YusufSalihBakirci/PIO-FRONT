<template>
    <Card3 colClass="col-sm-12" pre="true" preClass="mt-1 mb-0" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Timeline" desc="This is a Admiro timeline chart.">
        <section class="cd-container" id="cd-timeline">
            <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-picture bg-primary"><i class="icon-pencil-alt"></i></div>
                <div class="cd-timeline-content">
                    <div class="timeline-wrapper">
                        <div class="badge bg-warning">app-ideas</div>
                    </div>
                    <h5 class="f-w-600 m-0">Established new the app-ideas repository.</h5>
                    <p class="mb-0">
                        developers who are just beginning their learning process. those who often concentrate on developing
                        programmes with a user interface.</p>
                    <div class="time-content pt-2"><i class="icon-github"></i>
                        <h6 class="f-w-600">View it on Github </h6>
                    </div><span class="cd-date">February 02 2024</span>
                </div>
            </div>
            <div class="cd-timeline-block">
                <div class="cd-timeline-img bg-danger"> <i class="icon-youtube"></i></div>
                <div class="cd-timeline-content">
                    <div class="timeline-wrapper">
                        <div class="badge bg-danger">Blog</div>
                    </div>
                    <h5 class="f-w-600 m-0">Implemented the program for weekly code challenges.</h5>
                    <p class="mb-0">
                        Challenges <em class="font-danger">help you build problem-solving skills, better understand the
                            programming. </em>If you want to improve your skills in programming. </p>
                    <div class="ratio ratio-21x9 m-t-20">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div><span class="cd-date">March 12 2024</span>
                </div>
            </div>
            <DesignerSlider />
            <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-location bg-info"><i class="icon-pulse"></i></div>
                <div class="cd-timeline-content">
                    <div class="timeline-wrapper">
                        <div class="badge bg-primary">Audio testing</div>
                    </div>
                    <h5 class="f-w-600 m-0">Musical trends and predictability</h5>
                    <p class="mb-0">
                        So, the next time you listen to music, you might or might not consider how it's actively altering
                        your mood.</p>
                    <audio controls>
                        <source src="@/assets/audio/horse.ogg" type="audio/ogg">
                    </audio><span class="cd-date">June 12 2024</span>
                </div>
            </div>
            <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-location bg-secondary"><i class="icon-pin-alt"></i></div>
                <div class="cd-timeline-content">
                    <div class="timeline-wrapper">
                        <div class="badge bg-success">Meet-up</div>
                    </div>
                    <h5 class="f-w-600 m-0">Web-designer's meet-up</h5>
                    <p class="mb-0">
                        Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss
                        tools. </p>
                    <div class="time-content pt-2"><i class="icon-android"></i>
                        <h6 class="f-w-600">Please! Meet-up</h6>
                    </div><span class="cd-date">November 04 2024</span>
                </div>
            </div>
            <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-movie bg-danger"><i class="icon-agenda"></i></div>
                <div class="cd-timeline-content">
                    <div class="timeline-wrapper">
                        <div class="badge bg-warning">Resolutions</div>
                    </div>
                    <h5 class="f-w-600 m-0">My Resolutions for 2024</h5>
                    <p class="mb-0">
                        I'm determined to streamline, organism, systematism, realign, and embrace life in 2024. </p>
                    <div class="time-content pt-2"><i class="icon-write"></i>
                        <h6 class="f-w-600">My Resolutions </h6>
                    </div><span class="cd-date">December 31 2024 </span>
                </div>
            </div>
        </section>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue"
const DesignerSlider = defineAsyncComponent(() => import("@/components/theme/advance/timeline/DesignerSlider.vue"))
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>