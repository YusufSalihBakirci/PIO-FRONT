<template>
  <div class="authentication-main mt-0">
    <div class="row">
      <div class="col-12">
        <div class="login-card login-dark">
          <div>
            <div><router-link class="logo" to="/"><img class="img-fluid for-light" src="@/assets/images/logo/logo1.png"
                  alt="looginpage"><img class="img-fluid for-dark" src="@/assets/images/logo/logo-dark.png"
                  alt="logo"></router-link></div>
            <div class="login-main">
              <form class="theme-form">
                <h2 class="mb-0">Unlock </h2>
                <div class="form-group">
                  <UnlockUserSvg />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Enter your Password</label>
                  <div class="form-input position-relative">
                    <input class="form-control" :type="type" name="login[password]" required placeholder="*********">
                    <div class="show-hide"><span :class="type == 'password' ? 'show' : ''" @click="showPassword"> </span>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-0 checkbox-checked">
                  <div class="form-check checkbox-solid-info">
                    <input class="form-check-input" id="solid6" type="checkbox">
                    <label class="form-check-label" for="solid6">Remember password</label>
                    <button class="btn btn-primary btn-block w-100 mt-3" type="submit">Unlock</button>
                  </div>
                </div>
                <p class="mt-4 mb-0">Already Have an account?<router-link class="ms-2" to="/auth/login">Sign
                    in</router-link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const UnlockUserSvg = defineAsyncComponent(() => import("@/components/theme/authantication/UnlockUserSvg.vue"))
const type = ref<string>('password')
function showPassword() {
  if (type.value === 'password') {
    type.value = 'text';
  } else {
    type.value = 'password';
  }
}
</script>