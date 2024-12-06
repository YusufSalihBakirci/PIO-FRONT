<template>
    <Card3 colClass="col-xl-6" pre="true" preClass="mt-1 mb-0" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Hovering Timeline"
        desc="Use the<code>.square-timeline</code> main class through create new variations of timeline.">
        <ul class="square-timeline">
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-wrapper">
                    <p class="timeline-thumbnail">January 2024- Annual Function</p>
                    <h5>Location</h5><span class="text-muted">Largo Febo,10225012-Calvisano BS</span>
                    <p class="pt-3 mb-4">What a dynamic performance by the eighth-grade students, Let's welcome the
                        ninth-grade kid to the stage.</p>
                </div>
            </li>
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-wrapper">
                    <p class="timeline-thumbnail">March 2024 - Fresher Interview</p>
                    <h5 class="f-w-600">Ofwrrior Company</h5>
                    <div class="text-muted">A fresher's interview is to be conducted
                        <div class="list-group main-lists-content"><a
                                class="list-group-item list-group-item-action border-0 p-0 mb-3" href="#"
                                aria-current="true">
                                <div class="d-flex w-100 justify-content-between align-items-center">
                                    <div class="list-wrapper"><img class="list-img" src="@/assets/images/user/1.jpg"
                                            alt="profile">
                                        <div class="list-content">
                                            <h6>Molly Boake</h6>
                                            <p>MollyBoake@rhyta.com</p>
                                        </div>
                                    </div>
                                    <div class="timeline-icon"><i class="icon-facebook font-primary"></i><i
                                            class="icon-google font-primary"> </i><i
                                            class="icon-twitter-alt font-primary"></i></div>
                                </div>
                                <p class="mb-1">Next step is to choose a tone of voice for your content type.</p>
                            </a></div>
                    </div>
                </div>
            </li>
            <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-wrapper">
                    <p class="timeline-thumbnail">December 2024 - Meetup</p>
                    <h5 class="f-w-600">US Meeting</h5>
                    <div class="text-muted">2209 Leverton Cove RoadSpringfield, MA 01109
                        <div class="designer-details">
                            <div class="designer-profile">
                                <div class="designer-wrap"><img class="designer-img" src="@/assets/images/avtar/4.jpg"
                                        alt="profile">
                                    <div class="designer-content">
                                        <h6>Lillian J. Goodfellow</h6>
                                        <p>239-664-7751</p>
                                    </div>
                                </div>
                            </div>
                            <div class="designer-profile">
                                <div class="designer-wrap"><img class="designer-img" src="@/assets/images/avtar/7.jpg"
                                        alt="profile">
                                    <div class="designer-content">
                                        <h6>Carolyn A. Sutton</h6>
                                        <p>218-793-6609</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Use the <code>.square-timeline</code> main class through create new variations of timeline.")
</script>