<template>
    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Simple tabs"
        desc="Use the  <code>.nav-link</code> with <code>.active  </code>class to jump particular tabs.">
        <ul class="simple-wrapper nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item"><a class="nav-link text-primary" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                    aria-controls="home" aria-selected="true">Home</a></li>
            <li class="nav-item"><a class="nav-link active text-primary" id="profile-tabs" data-bs-toggle="tab"
                    href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a></li>
            <li class="nav-item"><a class="nav-link text-primary" id="contact-tab" data-bs-toggle="tab" href="#contact"
                    role="tab" aria-controls="contact" aria-selected="false">Contact</a></li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                <p class="pt-3">Tabs have long been used to show alternative views of the same group of information
                    tabs in software. Known as<em class="text-danger"> “module tabs”</em>, these are still used today
                    in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module
                    tabs to enable the user to switch between bookings for flights, hotels and car hire.</p>
            </div>
            <div class="tab-pane fade show active mt-4" id="profile" role="tabpanel" aria-labelledby="profile-tabs">

                <div class="flex-space flex-wrap align-items-center"><img class="tab-img" :src="getImages('avtar/3.jpg')"
                        alt="profile">
                    <ul class="d-flex flex-column gap-1">
                        <li> <strong>Visit Us:</strong> 2600 Hollywood Blvd,Florida, United States-33020</li>
                        <li> <strong>Mail Us:</strong> contact@us@gmail.com</li>
                        <li><strong>Contact Number: </strong> (954) 357-7760</li>
                    </ul>
                </div>

            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <ul class="pt-3 d-flex flex-column gap-1">
                    <li>Us Technology offers web & mobile development solutions for all industry verticals.Include a
                        short form using fields that'll help your business understand who's contacting them.</li>
                    <li> <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020</li>
                    <li> <strong>Mail Us:</strong> contact@us@gmail.com</li>
                    <li> <strong>Contact Number: </strong> (954) 357-7760</li>
                </ul>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>