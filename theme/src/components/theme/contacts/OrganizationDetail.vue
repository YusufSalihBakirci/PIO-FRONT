<template>
    <div class="col-xl-8 xl-50 col-md-7">
        <div class="tab-content" id="v-pills-tabContent1">
            <div class="tab-pane fade " :class="contact.active" :id="'v-pills-iduser' + contact.id" role="tabpanel"
                v-for="(contact, index) in contacts" :key="index" aria-labelledby="v-pills-iduser-tab">
                <div class="profile-mail">
                    <div class="d-flex"><img class="img-100 img-fluid m-r-20 rounded-circle update_img_5"
                            :src="getImages(contact.image)" alt="">
                        <div class="flex-grow-1 mt-0">
                            <h5><span class="first_name_5">{{ contact.name1 }}</span> <span class="last_name_5">{{
                                contact.name2
                            }}</span></h5>
                            <p class="font-primary email_add_5">{{ contact.email }}</p>
                            <ul>
                                <li><a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#printModal1"
                                        @click="contactView(contact)">Print</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="email-general">
                        <h6>General</h6>
                        <p>Email Address: <span class="font-primary email_add_5">{{ contact.email }}</span></p>
                        <div class="gender">
                            <h6>Personal</h6>
                            <p>Gender: <span>{{ contact.gender }}</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <OrganizationModal :contacts="details" />
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { useContactsStore } from "@/store/contacts"
import { getImages } from "@/composables/common/getImages"
import { defineAsyncComponent } from 'vue';
const OrganizationModal = defineAsyncComponent(() => import("@/components/theme/contacts/OrganizationModal.vue"))
let details = ref({})
let store = useContactsStore()
let contacts = store.organizations
function contactView(id: object) {
    details.value = id
}
</script>