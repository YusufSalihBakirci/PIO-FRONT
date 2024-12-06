<template>
    <div class="col-xl-8 xl-50 col-md-7">
        <div class="tab-content" id="v-pills-tabContent" :style="filter ? 'display: none;' : ''">
            <div class="tab-pane contact-tab-0 tab-content-child fade" @click="changeDetails(contact)"
                :class="contact.active ? 'active show' : ''" :id="'v-pills-user' + contact.id" role="tabpanel"
                aria-labelledby="v-pills-user-tab" v-for="(contact, index) in personal" :key="index">
                <div class="profile-mail">
                    <div class="d-flex"><img class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
                            :src="contact.imgUrl || getImages(contact.image)" alt="">
                        <input class="updateimg" type="file" name="img" @change="(event) => { loadFile(event, contact) }">
                        <div class="flex-grow-1 mt-0">
                            <h5><span class="first_name_0">{{ contact.name1 }} </span> <span class="last_name_0">{{
                                contact.name2
                            }}</span></h5>
                            <p class="email_add_0">{{ contact.email }}</p>
                            <ul>
                                <li><a href="javascript:void(0)" @click="collapse()">Edit</a></li>
                                <li><a href="javascript:void(0)" v-on:click="basic_warning_alert(contact, index)">Delete</a>
                                </li>
                                <li><a href="javascript:void(0)" @click="collapseFilter()">History</a></li>
                                <li><a href="javascript:void(0)" @click="contactView(contact)" data-bs-toggle="modal"
                                        data-bs-target="#printModal">Print</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="email-general">
                        <h5 class="mb-3">General</h5>
                        <ul>
                            <li>Name <span class="font-primary first_name_0">{{ contact.name1 }}</span></li>
                            <li>Gender <span class="font-primary">{{ contact.gender }}</span></li>
                            <li>Birthday<span class="font-primary"> <span class="birth_day_0">{{
                                contact.day
                            }}</span><span class="birth_month_0 ms-1">{{ contact.month }}</span><span
                                        class="birth_year_0 ms-1">{{ contact.year }}</span></span></li>
                            <li>Personality<span class="font-primary personality_0">{{ contact.personality }}</span>
                            </li>
                            <li>City<span class="font-primary city_0">{{ contact.city }}</span></li>
                            <li>Mobile No<span class="font-primary mobile_num_0">{{ contact.mobileno }}</span></li>
                            <li>Email Address <span class="font-primary email_add_0">{{ contact.email }} </span></li>
                            <li>Website<span class="font-primary url_add_0">{{ contact.website }}</span></li>
                            <li>Interest<span class="font-primary interest_0">{{ contact.interest }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="contact-editform ps-0" :style="filter ? '' : 'display: none;'">
            <form>
                <EditView :contact="detail" />

                <button class="btn btn-success update-contact me-1" type="button" @click="collapse()">Save</button>
                <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Cancel</button>
            </form>
        </div>
        <div id="right-history" :class="filtered ? 'show' : ''">
            <div class="modal-header p-l-20 p-r-20">
                <h3 class="modal-title w-100">Contact History<span class="pull-right"><a class="closehistory"
                            @click="collapseFilter()"><i class="icofont icofont-close"
                                :class="filtered ? 'show' : ''"></i></a></span></h3>
            </div>
            <ContactHistory />
        </div>
        <PrintView :contact="detail" />
    </div>
</template>
<script lang="ts" setup>
import { useContactsStore } from "@/store/contacts"
import { getImages } from "@/composables/common/getImages"
import { loadFile, filtered, filter, collapseFilter, collapse } from "@/composables/contectCom"
import Swal from 'sweetalert2'
import { ref, defineAsyncComponent } from 'vue'
const PrintView = defineAsyncComponent(() => import("@/components/theme/contacts/PrintView.vue"))
const EditView = defineAsyncComponent(() => import("@/components/theme/contacts/EditView.vue"))
const ContactHistory = defineAsyncComponent(() => import("@/components/theme/contacts/ContactHistory.vue"))
let detail = ref({})
let store = useContactsStore()
let personal = store.personals
function contactView(id: object) {
    detail.value = id
}
function basic_warning_alert(value: object, index: number,) {
    Swal.fire({
        icon: 'warning', title: "Are you sure?", text: 'This contact will be deleted from your Personal Contacts and from the chat list too.',
        showCancelButton: true, cancelButtonText: 'Cancel', confirmButtonText: 'Ok', confirmButtonColor: 'var(--theme-default)',
    }).then((result: { isConfirmed: boolean; isDenied: boolean; }) => {
        if (result.isConfirmed) {
            personal.splice(personal.indexOf(value), 1)
            if (index == personal.length) {
                if (personal.length > 0) {
                    personal[0].active = true;
                }
            }
            if (personal.length != index) {
                personal[index].active = true;
            }
        } else {
            Swal.fire('', 'Your contact is safe!')
        }
    })
}
function changeDetails(details: any) {

    if (!details.active) {

        personal.forEach((data) => {
            if (personal?.includes(details)) {
                data.active = false;
            }

        })
        details.active = !details.active;
    }
}
</script>