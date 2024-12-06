<template>
    <div class="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <div class="common-space">
            <p>Contacts</p>
            <div class="header-top"><a class="btn badge-light-primary f-w-500" href="#!"><i
                        class="fa-solid fa-plus"></i></a>
            </div>
        </div>
        <div class="search-contacts">
            <input class="form-control" type="text" placeholder="Name and phone number" v-model="search"
                v-on:keyup="setSerchUsers">
            <svg>
                <use href="@/assets/svg/icon-sprite.svg#stroke-search"></use>
            </svg><vue-feather class="mic-search" type="mic"></vue-feather>
        </div>
        <div class="contact-wrapper">
            <div v-for="(item, index) in contact" :key="index" class="alphabate-order mt-3">
                <p>{{ item.title }} </p>
                <ul class="border-0">
                    <li class="common-space pb-2" v-for="(items, index) in item.children" :key="index">
                        <div class="chat-time"><img class="img-fluid rounded-circle" v-if="items.img"
                                :src="getImages(items.img)" alt="user">
                            <div class="custom-name " :class="items.bgclass" v-if="items.text">
                                <p class=" f-w-500" :class="items.textclass">{{ items.text }}</p>
                            </div>
                            <div> <span>{{ items.name }}</span>
                                <p>{{ items.number }}</p>
                            </div>
                        </div>
                        <div class="contact-edit">
                            <vue-feather class="dropdown-toggle" type="more-vertical"></vue-feather>
                            <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View
                                    details</a><a class="dropdown-item" href="#!">
                                    Send messages</a><a class="dropdown-item" href="#!">
                                    Add to favorites</a></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { contact, } from "@/core/data/chat"
import { getImages } from "@/composables/common/getImages"
import { ref, defineAsyncComponent, computed } from 'vue'
import { useChatStore } from "@/store/chat"
const store = useChatStore()
const search = ref<string>('')
function setSerchUsers() {
    if (search.value !== '')
        store.setSerchUsers(search.value);
}
</script>