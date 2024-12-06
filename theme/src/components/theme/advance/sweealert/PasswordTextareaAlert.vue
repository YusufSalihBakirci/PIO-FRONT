<template>
  <button class="btn btn-danger sweet-24" type="button" @click="passwordAlert()">Password</button>
  <button class="btn btn-warning text-light sweet-25" type="button" @click="textareaAlert()">Textarea</button>
  <button class="btn btn-primary sweet-26" type="button" @click="selectAlert()">Select Input</button>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
function passwordAlert() {
  (async () => {
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      }
    });
    if (password) {
      Swal.fire(`Entered password: ${password}`);
    }
  })()
}
function textareaAlert() {
  (async () => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    if (text) {
      Swal.fire(text)
    }
  })()
}
function selectAlert() {
  (async () => {
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        'Fruits': {
          apples: 'Apples',
          bananas: 'Bananas',
          grapes: 'Grapes',
          oranges: 'Oranges'
        },
        'Vegetables': {
          potato: 'Potato',
          broccoli: 'Broccoli',
          carrot: 'Carrot'
        },
        'icecream': 'Ice cream'
      },
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            resolve()
          } else {
            resolve('You need to select oranges :)')
          }
        })
      }
    })
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
  })()
}
</script>