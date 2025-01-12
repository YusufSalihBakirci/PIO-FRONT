<template>
  <template></template>
  <!-- No content -->
</template>
<script>
export default {
  name: 'EmptyComponent',
  mounted() {
    // console.log('TargetJSCreator.vue has been mounted and Has no JSX Code')
    // console.log(this.props)
  },
  props: {
    proxyReq: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props)
  },
}
</script>

//FirePopup(basicInputsData) fonsiyonunda basicInputsData su an icin mobil, masaustu gorseller ve
yonlendirme linkini icerir, popup kurgusu icin olusturulmustur
