<template>
    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Icons with tabs" :desc="desc">
        <ul class="nav nav-tabs" id="icon-tab" role="tablist">
            <li class="nav-item"><a class="nav-link active text-secondary" id="icon-home-tab" data-bs-toggle="tab"
                    href="#icon-home" role="tab" aria-controls="icon-home" aria-selected="true"><i
                        class="fa-solid fa-house"> </i>Home</a></li>
            <li class="nav-item"><a class="nav-link text-secondary" id="profile-icon-tabs" data-bs-toggle="tab"
                    href="#profile-icon" role="tab" aria-controls="profile-icon" aria-selected="false"><i
                        class="fa-solid fa-user"></i>Profile</a></li>
            <li class="nav-item"><a class="nav-link text-secondary" id="contact-icon-tab" data-bs-toggle="tab"
                    href="#contact-icon" role="tab" aria-controls="contact-icon" aria-selected="false"><i
                        class="fa-solid fa-phone"></i>Contact</a></li>
        </ul>
        <div class="tab-content" id="icon-tabContent">
            <div class="tab-pane fade show active" id="icon-home" role="tabpanel" aria-labelledby="icon-home-tab">
                <p class="pt-3"> Not limited to any states, boundaries. All over India providing cutting-edge design and
                    website development services for over 12 years. We provide end to end digital solutions, right from
                    designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search
                    Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.</p>
            </div>
            <div class="tab-pane fade" id="profile-icon" role="tabpanel" aria-labelledby="profile-icon-tabs">

                <div class="flex-space flex-wrap align-items-center"><img class="tab-img" :src="getImages('avtar/7.jpg')"
                        alt="profile">
                    <ul class="d-flex flex-column gap-1">
                        <li> <strong>Visit Us: </strong> 278 Green Avenue Oakland, CA 94612</li>
                        <li><strong>Mail Us:</strong> MichaelMMcGowan@teleworm.us</li>
                        <li><strong>Contact Number: </strong> 510-767-0025</li>
                    </ul>
                </div>

            </div>
            <div class="tab-pane fade" id="contact-icon" role="tabpanel" aria-labelledby="contact-icon-tab">
                <p class="pt-3 mb-0">Us Technology offers web & mobile development solutions for all industry
                    verticals.Include a
                    short form using fields that'll help your business understand who's contacting them. </p>
                <div class="pt-3">
                    <label class="form-label" for="exampleFormControlone">Email address</label>
                    <input class="form-control" id="exampleFormControlone" type="email" placeholder="youremail@gmail.com">
                </div>

            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Use the <code>.nav-link </code>with feather icons. And <code>.show</code> class to tabs change.")
</script>