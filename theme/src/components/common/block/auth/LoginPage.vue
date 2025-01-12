<template>
    <div class="container-fluid p-0">
        <div class="row m-0">
            <div class="col-12 p-0">
                <div class="login-card login-dark">
                    <div>
                        <div><router-link class="logo" to="/"><img class="img-fluid for-light m-auto"
                                    src="@/assets/images/logo/logo1.png" alt="looginpage"><img class="img-fluid for-dark"
                                    src="@/assets/images/logo/logo-dark.png" alt="logo"></router-link></div>
                        <div class="login-main">
                            <form class="theme-form">
                                <h2 class="text-center">Sign in to account</h2>
                                <p class="text-center">Enter your email &amp; password to login</p>
                                <div class="form-group">
                                    <label class="col-form-label">Email Address</label>
                                    <input class="form-control" type="email" required v-model="email"
                                        placeholder="Test@gmail.com">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Password</label>
                                    <div class="form-input position-relative">
                                        <input class="form-control" v-model="password" :type="type" name="login[password]"
                                            required placeholder="*********">
                                        <div class="show-hide"><span :class="type == 'password' ? 'show' : ''"
                                                @click="showPassword"> </span></div>
                                    </div>
                                </div>
                                <div class="form-group mb-0 checkbox-checked">
                                    <div class="form-check checkbox-solid-info">
                                        <input class="form-check-input" id="solid6" type="checkbox">
                                        <label class="form-check-label" for="solid6">Remember password</label>
                                    </div><router-link class="link" to="/authentication/forget_password">Forgot
                                        password?</router-link>
                                    <div class="text-end mt-3">
                                        <button class="btn btn-primary btn-block w-100" type="button" @click="doLogin">Sign
                                            in </button>
                                    </div>
                                </div>
                                
                                <!-- <div class="login-social-title">
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
                                </div> -->
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
import { ref } from "vue"
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useRouter } from 'vue-router'
import { loginUser } from '@/api/auth'
import CryptoJS from "crypto-js"; 
import axios, { AxiosResponse } from 'axios';
let type = ref<string>('password')
let email = "";
let password = "";
let router = useRouter()
function showPassword() {
    if (type.value === 'password') {
        type.value = 'text';
    } else {
        type.value = 'password';
    }
}
async function doLogin() {
    // if (email === "test@admin.com" && password === "test@123456") {

    //     localStorage.setItem('user', email)
    //     localStorage.setItem("SidebarType", 'compact-wrapper')
    //     router.push('/');
    //     toast.success('Login Successfully ', { position: 'top-right', autoClose: 2000 });
    // }
    // else {
    //     toast.error('Opps... Invalid email and password ', { position: 'top-right', autoClose: 2000 });
    // }

    // try {
    //     const response = await loginUser(email, password);
    //     if (response.data) { 
    //         localStorage.setItem('user', email);
    //         localStorage.setItem("SidebarType", 'compact-wrapper');
    //         router.push('/');
    //         toast.success('Login Successfully', { position: 'top-right', autoClose: 2000 });
    //     }
    // } catch (error) {
    //     toast.error('Opps... Invalid email and password', { position: 'top-right', autoClose: 2000 });
    //     console.error('Login error:', error);
    // }

    let user = false;
		const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
		console.log(user , email)
		axios.post('https://localhost:7228/api/Login/login', {
        email: email,
        password: hashedPassword
      })
      .then(response => {
        console.log('API Yanıtı:', response.data);
        localStorage.setItem('user', email);
        localStorage.setItem("SidebarType", 'compact-wrapper');
        router.push('/');
        toast.success('Login Successfully', { position: 'top-right', autoClose: 2000 });
      })
      .catch(error => {
        toast.error('Opps... Invalid email and password', { position: 'top-right', autoClose: 2000 });
        console.error('Hata:', error);
      });
 
           console.log("run");


}
</script>