<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-5 login_two_image"></div>
            <div class="col-xl-7 p-0">
                <div class="login-card login-dark login-bg">
                    <div>
                        <div><router-link class="logo" to="/"><img class="img-fluid for-light m-auto"
                                    src="@/assets/images/logo/logo1.png" alt="looginpage"><img class="for-dark"
                                    src="@/assets/images/logo/logo-dark.png" alt="logo"></router-link></div>
                        <div class="login-main">
                            <form class="theme-form">
                                <h2 class="text-center">Sign in to account</h2>
                                <p class="text-center">Enter your email &amp; password to login</p>
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
                                                @click="showPassword"> </span></div>
                                    </div>
                                </div>
                                <div class="form-group mb-0 checkbox-checked">
                                    <div class="form-check checkbox-solid-info">
                                        <input class="form-check-input" id="solid6" type="checkbox">
                                        <label class="form-check-label" for="solid6">Remember password</label>
                                    </div><router-link class="link" to="/authentication/forget_password">Forgot password?
                                    </router-link>
                                    <div class="text-end mt-3">
                                        <button class="btn btn-primary btn-block w-100" type="submit">Sign in </button>
                                    </div>
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
                                <p class="mt-4 mb-0 text-center">Don't have account?<router-link class="ms-2"
                                        to="/auth/register">Create Account</router-link></p>
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