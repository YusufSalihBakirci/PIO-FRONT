<template>
    <div class="container-fluid p-0">
        <div class="row m-0">
            <div class="col-12 p-0">
                <div class="login-card login-dark">
                    <div>
                        <div><router-link class="logo text-center" to="/"><img class="img-fluid for-light m-auto"
                                    src="@/assets/images/logo/logo1.png" alt="looginpage"><img class="img-fluid for-dark"
                                    src="@/assets/images/logo/logo-dark.png" alt="logo"></router-link></div>
                        <div class="login-main">
                            <form class="theme-form">
                                <h2 class="text-center">Create your account</h2>
                                <p class="text-center">Enter your personal details to create account</p>
                                <div class="form-group">
                                    <label class="col-form-label pt-0">Your Name</label>
                                    <div class="row g-2">
                                        <div class="col-6">
                                            <input class="form-control" type="text" required placeholder="First name">
                                        </div>
                                        <div class="col-6">
                                            <input class="form-control" type="text" required placeholder="Last name">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Email Address</label>
                                    <input class="form-control" type="email" required placeholder="Test@gmail.com">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Password</label>
                                    <div class="form-input position-relative">
                                        <input class="form-control" :type="type" name="login[password]" required
                                            placeholder="*********">
                                        <div class="show-hide"><span :class="type == 'password' ? 'show' : ''"
                                                @click="showPassword"></span></div>
                                    </div>
                                </div>
                                <div class="form-group mb-0 checkbox-checked">
                                    <div class="form-check checkbox-solid-info">
                                        <input class="form-check-input" id="solid6" type="checkbox">
                                        <label class="form-check-label" for="solid6">Agree with</label><router-link
                                            class="ms-3 link" to="/authentication/forget_password">Privacy
                                            Policy</router-link>
                                    </div>
                                    <button class="btn btn-primary btn-block w-100 mt-3" type="submit">Create
                                        Account</button>
                                </div>
                                <div class="login-social-title">
                                    <h6>Or Sign in with </h6>
                                </div>
                                <div class="form-group">
                                    <ul class="login-social">
                                        <li><a href="https://www.linkedin.com" target="_blank"><i
                                                    class="icon-linkedin"></i></a></li>
                                        <li><a href="https://twitter.com" target="_blank"><i class="icon-twitter"></i></a>
                                        </li>
                                        <li><a href="https://www.facebook.com" target="_blank"><i
                                                    class="icon-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com" target="_blank"><i
                                                    class="icon-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <p class="mt-4 mb-0 text-center">Already have an account?<router-link class="ms-2"
                                        to="/auth/login">Sign in</router-link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const type = ref<string>('password')
function showPassword() {
    if (type.value === 'password') {
        type.value = 'text';
    } else {
        type.value = 'password';
    }
}
</script>