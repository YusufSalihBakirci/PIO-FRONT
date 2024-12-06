<template>
    <Card3 colClass="col-sm-12 col-xxl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Pills tabs" desc="To set pills-tabs, use the   <code>nav & nav-pills </code> class.">
        <ul class="nav nav-pills nav-primary" id="pills-tab" role="tablist">
            <li class="nav-item"><a class="nav-link" id="pills-aboutus-tab" data-bs-toggle="pill" href="#pills-aboutus"
                    role="tab" aria-controls="pills-aboutus" aria-selected="true">About us</a></li>
            <li class="nav-item"><a class="nav-link" id="pills-contactus-tab" data-bs-toggle="pill" href="#pills-contactus"
                    role="tab" aria-controls="pills-contactus" aria-selected="false">Contact us</a></li>
            <li class="nav-item"><a class="nav-link active" id="pills-blog-tab" data-bs-toggle="pill" href="#pills-blog"
                    role="tab" aria-controls="pills-blog" aria-selected="false">Blog </a></li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade" id="pills-aboutus" role="tabpanel" aria-labelledby="pills-aboutus-tab">
                <p class="pt-3">The ultimate goal of every web design is to create a site that will reach its audience and
                    be useful to them. In order to achieve that, it is necessary to befriend Google's mechanisms and
                    algorithms. There is no use of a pretty website, if it's displayed on a 10th page of search results,
                    because this way no one will ever find it. That brings us to the topic of Google's Website
                    Ranking.Generally speaking, it's a list of pages and their keywords, sorted in the order of search
                    results. The higher your place in the ranking is, the more people are likely to see your page.</p>
            </div>
            <div class="tab-pane fade" id="pills-contactus" role="tabpanel" aria-labelledby="pills-contactus-tab">
                <ul class="d-flex flex-column gap-1 pt-3">
                    <li> Create professional web page design. Responsive, fully customizable with easy Drag-n-Drop Nicepage
                        editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as
                        content and images.</li>
                    <li><strong>Visit Us: </strong> 4 Marigold Close, Glenmore Park, New South Wales, 2745 Australia- 2745
                    </li>
                    <li> <strong>Mail Us:</strong> SamuelMario@armyspy.com</li>
                    <li> <strong>Contact Number: </strong> (02) 4733 6337</li>
                </ul>
            </div>
            <div class="tab-pane fade show active" id="pills-blog" role="tabpanel" aria-labelledby="pills-blog-tab">
                <div class="pt-3 d-flex align-items-center gap-3 pills-blogger">
                    <div class="blog-wrapper"> <img class="blog-img" :src="getImages('dashboard-2/3.png')" alt="head-phone">
                    </div>
                    <div class="blog-content">
                        <p> </p><em class="text-danger fw-bold">Smart headphones</em> — also called smart earbuds or
                        hearable
                        — are high-tech in-ear devices that do more than transmit audio. These headphones are usually
                        wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device.
                        The main appeal of hearables is convenience, as they allow you to complete common tasks without
                        directly accessing your phone or computer. Smart wireless headphones sync up to other devices using
                        Bluetooth technology, and many of their features rely on data from your smartphone or computer.
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>