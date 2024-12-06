<template>
    <div class="col-xxl-3 col-xl-4 box-col-6">
        <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                @click="collapseFilter()">contact filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="email-left-aside">
                    <div class="card">
                        <div class="card-body">
                            <div class="email-app-sidebar left-bookmark">
                                <div class="d-flex">
                                    <div class="d-flex-size-email"><img class="me-3 rounded-circle"
                                            src="@/assets/images/user/user.png" alt="" /></div>
                                    <div class="flex-grow-1">
                                        <h4 class="f-w-700">MARK JENCO</h4>
                                        <p>Markjecno@gmail.com</p>
                                    </div>
                                </div>
                                <ul class="nav main-menu contact-options" role="tablist">
                                    <li class="nav-item">
                                        <button class="button-primary btn-block btn-mail w-100" type="button"
                                            data-bs-toggle="modal" data-bs-target="#contectmodel"><vue-feather class="me-2"
                                                type="users"></vue-feather> New Contacts</button>

                                    </li>
                                    <li class="nav-item"><span class="main-title"> Views</span></li>
                                    <li><a id="pills-personal-tab" data-bs-toggle="pill" href="#pills-personal" role="tab"
                                            aria-controls="pills-personal" v-on:click="say('pills_personal')"
                                            aria-selected="true"><span class="title">
                                                Personal</span></a></li>
                                    <li>
                                        <button class="btn btn-category" type="button" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal1"><span class="title"> + Add
                                                Category</span></button>

                                    </li>
                                    <li><a class="show" id="pills-organization-tab" data-bs-toggle="pill"
                                            href="#pills-organization" v-on:click="say('pills_organization')" role="tab"
                                            aria-controls="pills-organization" aria-selected="true"><span class="title">
                                                Organization</span></a></li>
                                    <li><a href="#"><span class="title">Follow up</span></a></li>
                                    <li><a href="#"><span class="title">Favorites</span></a></li>
                                    <li><a href="#"><span class="title">Ideas</span></a></li>
                                    <li><a href="#"><span class="title">Important</span></a></li>
                                    <li><a href="#"><span class="title">Business</span></a></li>
                                    <li><a href="#"><span class="title">Holidays</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-9 col-xl-8 col-md-12 box-col-12">
        <div class="email-right-aside bookmark-tabcontent contacts-tabs">
            <div class="card email-body radius-left dark-contact">
                <div class="ps-0">
                    <div class="tab-content">
                        <div class="tab-pane fade " v-bind:class="(activeclass === 'pills_personal') ? 'active show' : ''"
                            id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
                            <PersonalView />
                        </div>
                        <div class="fade tab-pane"
                            v-bind:class="(activeclass === 'pills_organization') ? 'active show' : ''"
                            id="pills-organization" role="tabpanel" aria-labelledby="pills-organization">
                            <OrganizationView />
                        </div>
                        <AddCategory />
                        <NewContact />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
const PersonalView = defineAsyncComponent(() => import("@/components/theme/contacts/PersonalView.vue"))
const OrganizationView = defineAsyncComponent(() => import("@/components/theme/contacts/OrganizationView.vue"))
const AddCategory = defineAsyncComponent(() => import("@/components/theme/contacts/AddCategory.vue"))
const NewContact = defineAsyncComponent(() => import("@/components/theme/contacts/NewContact.vue"))
let filtered = ref<boolean>(false)
let activeclass = ref<string>('pills_personal')
function collapseFilter() {
    filtered.value = !filtered.value
}
function say(message: string) {
    activeclass.value = message;
}
</script>