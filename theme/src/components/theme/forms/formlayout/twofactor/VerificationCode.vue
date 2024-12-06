<template>
    <div class="col-md-6">
        <div class="card-wrapper border rounded-3 h-100">
            <div class="authenticate">
                <h4>Verification code</h4><img class="img-fluid" src="@/assets/images/forms/authenticate.png"
                    alt="authenticate"><span>We've sent a verification code to</span><span>+91********70</span>
                <form class="row">
                    <div class="col">
                        <h5>Your OTP Code here:</h5>
                    </div>
                    <div class="col otp-generate">
                        <input class="form-control code-input" v-for="(item, index) in code" :key="index" type="text"
                            maxlength="1" :pattern="item.pattern" required>
                    </div>
                    <div class="col">
                        <button class="btn btn-primary w-100" type="submit">Verify</button>
                    </div>
                    <div> <span>Not received your code?</span><span><a href="javascript:void(0)">Resend </a>OR <a
                                href="javascript:void(0)">Call </a></span></div>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { code } from "@/core/data/forms"
</script>