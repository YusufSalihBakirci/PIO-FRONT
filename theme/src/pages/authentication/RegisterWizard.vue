<template>
    <div class="container-fluid wizard-4">
        <div class="row">
            <div class="col-lg-3 col-md-4 position-relative bg-color">
                <ul class="anchor">
                    <li><router-link class="logo text-start ps-0" to="/"><img class="img-fluid for-light m-auto"
                                src="@/assets/images/logo/logo1.png" alt="looginpage"><img class="img-fluid for-dark"
                                src="@/assets/images/logo/logo-dark.png" alt="logo"></router-link></li>
                    <li>
                        <div class="progresscont">
                            <div class="circleblocks">
                                <div class="user-profile">
                                    <div class="aboutblock">
                                        <div class="circulo activecirculo text-center"><i class="fas fa-user"></i></div>
                                        <div class="user-content" :class="checkedTab.includes(2) ? 'done' : ''">
                                            <h4 class="font-primary">About</h4>
                                            <h6>Add personal details</h6>
                                        </div>
                                    </div>
                                    <div class="addressblock">
                                        <div class="circulo text-center"><i class="fas fa-location-arrow"></i></div>
                                        <div class="user-content" :class="checkedTab.includes(3) ? 'done' : ''">
                                            <h4 class="font-primary">Address</h4>
                                            <h6>Add additional info</h6>
                                        </div>
                                    </div>
                                    <div class="verifyblock">
                                        <div class="circulo text-center"><i class="far fa-id-card"></i></div>
                                        <div class="user-content" :class="checkedTab.includes(4) ? 'done' : ''">
                                            <h4 class="font-primary">Verify</h4>
                                            <h6>Complete.. !</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><img class="img-fluid w-100" src="@/assets/images/login/icon.png" alt="looginpage"></li>
                </ul>
            </div>
            <div class="col-lg-9 col-md-8 p-0">
                <div class="step-container login-card">
                    <div>
                        <div class="wizard-title text-center">
                            <h2>Sign up to account</h2>
                            <h5 class="text-muted mb-4">Enter your email &amp; password to login</h5>
                        </div>
                        <div class="login-main">
                            <div class="progress" style="height: 5px;">
                                <div class="progress-bar" id="progresswizard" role="progressbar" style="width: 15%;"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <RegisterWizardData :showToast="showToast" :active="active" @finish="showNotify"
                                @next="clickToNext" @prev="clickToPrevious" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
import { ref, defineAsyncComponent } from 'vue'
const RegisterWizardData = defineAsyncComponent(() => import("@/components/theme/authantication/RegisterWizardData.vue"))
let active = ref<number>(1)
let checkedTab = ref<number[]>([])
let showToast = ref<boolean>(false)
function clickToNext() {
    if (active.value < 4) {
        active.value++
        checkedTab.value.push(active.value)
    }
}
function clickToPrevious() {
    if (active.value > 0) {
        active.value--
        checkedTab.value.splice(active.value, 1)
    }
}
function showNotify() {
    Swal.fire({
        text: 'Congratulation ! All step Done.',
        icon: 'success',
        showCloseButton: true,
        confirmButtonText: 'Ok',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/authentication/register/wizard';
        }
    });
}
</script>