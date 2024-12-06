<template>
    <div class="tab-pane fade" id="private-pill" role="tabpanel" aria-labelledby="private-pill-tab">
        <div v-if="store.isLoading" class="email-loader"></div>
        <div class="mail-body-wrapper" v-else>
            <ul>
                <li class="inbox-data">
                    <div class="inbox-user">
                        <div class="form-check form-check-inline m-0">
                            <input class="form-check-input checkbox-primary" id="emailCheckbox1" type="checkbox"
                                value="option1" />
                            <label class="form-check-label" for="emailCheckbox1"></label>
                        </div>
                        <svg class="important-mail" @click="toggleStar()" :class="[{ active: activeStars }]">
                            <use href="@/assets/svg/icon-sprite.svg#fill-star"></use>
                        </svg>
                        <div class="rounded-border">
                            <div>
                                <p class="txt-primary">AD</p>
                            </div>
                        </div>
                        <p>Asther Dolly</p>
                    </div>
                    <div class="inbox-message">
                        <div class="email-data" @click="toogle()"><span>Confirm your booking id -<span>craft beer labore wes
                                    anderson cred
                                    nesciunt sapiente ea proident...</span></span>
                            <div class="badge badge-light-primary">new</div>
                            <div class="badge badge-light-success">Task</div>
                        </div>
                        <div class="email-timing"><span>1:00 PM</span></div>
                        <div class="email-options">
                            <div @click="toggleEmail()">
                                <i class="fa-regular fa-envelope envelope-1" :class="activeEmail ? 'hide' : 'show'"></i><i
                                    class="fa-solid fa-envelope-open-text envelope-2 "
                                    :class="activeEmail ? 'show' : 'hide'"></i>
                            </div>
                            <i class="fa-solid fa-trash-can trash-3"></i><i class="fa-solid fa-print"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits, } from 'vue'
import { useCommonStore } from "@/store/common"
let activeStars = ref<boolean>(false)
let emit = defineEmits(['selected'])
let activeEmail = ref<boolean>()
let store = useCommonStore()
function toggleStar() {
    activeStars.value = !activeStars.value;
}
function toogle() {
    emit('selected');
}
function toggleEmail() {
    activeEmail.value = !activeEmail.value;
}

</script>