<template>
    <button class="btn btn-success sweet-22" type="button" @click="textAlert()">Text Input</button>
    <button class="btn btn-warning text-light sweet-8" type="button" @click="emailAlert()">Login Email</button>
    <button class="btn btn-info text-light sweet-23" type="button" @click="urlAlert()">URL</button>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
function textAlert() {
    (async () => {
        const ipAPI = '//api.ipify.org?format=json'
        const inputValue = fetch(ipAPI)
            .then(response => response.json())
            .then(data => data.ip)
        const { value: ipAddress } = await Swal.fire({
            title: 'Enter your IP address',
            input: 'text',
            inputLabel: 'Your IP address',
            inputValue: inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        })
        if (ipAddress) {
            Swal.fire(`Your IP address is ${ipAddress}`)
        }
    })()
}
function emailAlert() {
    (async () => {
        const { value: email } = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'Your email address',
            inputPlaceholder: 'Enter your email address'
        })
        if (email) {
            Swal.fire(`Entered email: ${email}`)
        }
    })()
}
function urlAlert() {
    (async () => {
        const { value: url } = await Swal.fire({
            input: 'url',
            inputLabel: 'URL address',
            inputPlaceholder: 'Enter the URL'
        })
        if (url) {
            Swal.fire(`Entered URL: ${url}`)
        }
    })()
}
</script>