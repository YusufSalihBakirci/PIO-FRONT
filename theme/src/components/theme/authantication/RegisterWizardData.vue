<template>
    <form class="theme-form">
        <input type="hidden" name="_token" value="iJquRbgH4Np4OcWzjk8Bd03CaexHzse7gz2vHrml">
        <div class="registration-content">
            <div id="aboutcont" data-progress="15%" :class="active == 1 ? 'd-block' : 'd-none'">
                <div class="form-group">
                    <label class="col-form-label" for="firstname">First Name</label>
                    <input class="form-control" id="firstname" type="text" name="firstname" required placeholder="Johan">
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="lastname">Last Name </label>
                    <input class="form-control" id="lastname" type="text" name="lastname" required placeholder="Deo">
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="phone">phone</label>
                    <input class="form-control" id="phone" type="text" name="phone" required placeholder="123456745">
                </div>
            </div>
            <div id="addrescont" data-progress="50%" :class="active == 2 ? 'd-block' : 'd-none'">
                <div class="form-group">
                    <label class="col-form-label" for="email">Email address</label>
                    <input class="form-control" id="email" type="text" name="email" required
                        placeholder="name@example.com"><small class="form-text text-muted" id="emailHelp">We&apos;ll
                        never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="password">Password</label>
                    <input class="form-control" id="password" type="text" name="password" required placeholder="password">
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="repassword">Confirm Password</label>
                    <input class="form-control" id="repassword" type="text" name="repassword" required
                        placeholder="Enter again">
                </div>
            </div>
            <div id="verifycont" data-progress="85%" :class="active == 3 ? 'd-block' : 'd-none'">
                <div class="form-group">
                    <label class="col-form-label" for="birthday">Birthday:</label>
                    <input class="form-control" id="birthday" type="date">
                </div>
                <div class="form-group">
                    <label class="col-form-label" for="state">State</label>
                    <input class="form-control" id="state" type="text" name="state" value="Ontario" required>
                </div>
                <div class="form-group">
                    <label class="col-form-label">Country </label>
                    <select class="selectpicker countrypicker form-control" name="country_residence">
                        <option value="">Canada</option>
                        <option value="">United States</option>
                        <option value="">United Kingdom</option>
                        <option value="">Germany</option>
                        <option value="">France</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="mb-3 wizard-navigation">
            <div class="p-2">
                <button class="btn m-1 btn-outline-primary btn-lg" id="prevbtn" type="button"
                    :class="active == 1 ? 'd-none' : ''" @click="clickToPrevious()">Previous</button>
            </div>
            <div>
                <button class="btn m-1 btn-primary btn-lg btn-lg text-center" :class="active == 3 ? 'd-none' : ''"
                    @click="clickToNext()" id="nextbtn" type="button">Next</button>
                <button class="btn btn-primary btn-lg" :class="active == 3 ? 'd-block' : ''" id="submitForm"
                    @click="showNotify()" name="submitForm" type="button">Finish</button>
            </div>
        </div>
    </form>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue'
let props = defineProps({
    active: Number, showToast: Boolean
})
let emit = defineEmits(['finish', 'next', 'prev'])
function showNotify() {
    emit('finish');
}
function clickToNext() {
    emit('next');
}
function clickToPrevious() {
    emit('prev');
}
</script>