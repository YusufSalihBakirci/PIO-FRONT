<template>
    <div class="col-md-12 project-list">
        <div class="card">
            <div class="row">
                <div class="col-md-6">
                    <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="top-home-tab" data-bs-toggle="tab"
                                href="#top-home" role="tab" aria-controls="top-home" aria-selected="true"><vue-feather
                                    type="target"></vue-feather>All</a></li>
                        <li class="nav-item"><a class="nav-link" id="profile-top-tab" data-bs-toggle="tab"
                                href="#top-profile" role="tab" aria-controls="top-profile"
                                aria-selected="false"><vue-feather type="info"></vue-feather>Doing</a></li>
                        <li class="nav-item"><a class="nav-link" id="contact-top-tab" data-bs-toggle="tab"
                                href="#top-contact" role="tab" aria-controls="top-contact"
                                aria-selected="false"><vue-feather type="check-circle"></vue-feather>Done</a></li>
                    </ul>
                </div>
                <div class="col-md-6 d-md-block d-none">
                    <div class="form-group mb-0 me-0"></div><router-link class="btn btn-primary"
                        to="/project/project_create"><vue-feather type="plus-square"></vue-feather>Create New
                        Project</router-link>
                </div>
            </div>
        </div>
    </div>
    <Card3 colClass="col-sm-12">
        <div class="tab-content" id="top-tabContent">
            <AllProjects />
            <DoingProject />
            <DoneProject />
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const AllProjects = defineAsyncComponent(() => import("@/components/theme/project/projectlist/AllProjects.vue"))
const DoingProject = defineAsyncComponent(() => import("@/components/theme/project/projectlist/DoingProject.vue"))
const DoneProject = defineAsyncComponent(() => import("@/components/theme/project/projectlist/DoneProject.vue"))
</script>