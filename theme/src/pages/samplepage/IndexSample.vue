<template>
    <Breadcrumbs main="Pages" mains="Sample Page" title="Sample Page" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
                headerTitle="true" title="Sample Card" desc="Here you can enter a sub-title for your card."
                titleClass="mb-0">
                <p><strong>Web Design Trends: </strong> Stay up-to-date with the latest trends in web design, such as the
                    use of animations, micro-interactions, dark mode, and unique navigation techniques.Keep your website's
                    navigation simple and intuitive, allowing users to find what they need easily without overwhelming them
                    with options.</p>
                <p><strong>Design Tools: </strong> Information on popular design software like Adobe Photoshop, Sketch,
                    Figma, or Adobe XD, along with tips and tricks for efficient workflow and collaboration.Compress and
                    optimize images to improve website loading speed and overall performance, providing a better user
                    experience.</p>
                <p><strong>Front-End Development: </strong> A basic understanding of HTML, CSS, and JavaScript can enhance
                    your web design skills, enabling you to create interactive and dynamic elements.Ensure sufficient
                    contrast between text and background colors to enhance readability and accessibility, especially for
                    users with visual impairments.</p>
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>