<template>
    <div class="card mb-0">
        <div class="card-header d-flex">
            <h3>Organization</h3><span class="f-14 pull-right mt-0">{{ contacts.length }} Contacts</span>
        </div>
        <div class="card-body p-0">
            <div class="row list-persons">
                <div class="col-xl-4 xl-50 col-md-5">
                    <div class="nav flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical"><a
                            class="nav-link " :class="contact.active" id="v-pills-iduser-tab"
                            v-for="(contact, index) in contacts" :key="index" data-bs-toggle="pill"
                            :href="'#v-pills-iduser' + contact.id" role="tab" aria-controls="v-pills-iduser"
                            aria-selected="true">
                            <div class="d-flex"><img class="img-50 img-fluid m-r-20 rounded-circle"
                                    :src="getImages(contact.image)" alt="">
                                <div class="flex-grow-1">
                                    <h3>{{ contact.name1 }} {{ contact.name2 }}</h3>
                                    <p>{{ contact.email }}</p>
                                </div>
                            </div>
                        </a></div>
                </div>
                <OrganizationDetail />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
import { useContactsStore } from "@/store/contacts"
import { getImages } from "@/composables/common/getImages"
const OrganizationDetail = defineAsyncComponent(() => import("@/components/theme/contacts/OrganizationDetail.vue"))
const store = useContactsStore()
const contacts = store.organizations
</script>