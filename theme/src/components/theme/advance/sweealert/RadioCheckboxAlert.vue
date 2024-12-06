<template>
    <button class="btn btn-secondary sweet-27" type="button" @click="radioAlert()">Radio Input</button>
    <button class="btn btn-dark sweet-28" type="button" @click="checkboxAlert()">Checkbox Input</button>
    <button class="btn btn-light font-dark sweet-29" type="button" @click="rangAlert()">Range</button>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
function radioAlert() {
    (async () => {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    '#ff0000': 'Red',
                    '#00ff00': 'Green',
                    '#0000ff': 'Blue'
                })
            }, 1000)
        })
        const { value: color } = await Swal.fire({
            title: 'Select color',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!'
                }
            }
        })
        if (color) {
            Swal.fire({ html: `You selected: ${color}` })
        }
    })()
}
function checkboxAlert() {
    (async () => {
        const { value: accept } = await Swal.fire({
            title: 'Terms and conditions',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
                'I agree with the terms and conditions',
            confirmButtonText:
                'Continue <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
                return !result && 'You need to agree with T&C'
            }
        })
        if (accept) {
            Swal.fire('You agreed with T&C :)')
        }
    })()
}
function rangAlert() {
    Swal.fire({
        title: 'How old are you?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Your age',
        inputAttributes: {
            min: "8",
            max: "120",
            step: "1"
        },
        inputValue: 25
    })
}
</script>