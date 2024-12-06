<template>
  <Card3 colClass="col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
    title="With Icons Breadcrumb" desc="You can set icons breadcrumb using <code>.breadcrumb </code>class.">
    <nav class="breadcrumb-icon mb-3" aria-label="breadcrumb">
      <ol class="breadcrumb bg-white p-l-0 mb-0">
        <li class="breadcrumb-item"><a href="javascript:void(0)"><i class="iconly-Home icli"></i></a></li>
        <li class="breadcrumb-item active">Ui Kits</li>
      </ol>
    </nav>
    <nav class="breadcrumb-icon breadcrumb-style4 mb-0" aria-label="breadcrumb">
      <ol class="breadcrumb bg-white m-b-0 p-b-0 p-l-0 mb-0">
        <li class="breadcrumb-item"><a href="javascript:void(0)"><i class="iconly-Home icli"></i></a></li>
        <li class="breadcrumb-item">Ui Kits</li>
        <li class="breadcrumb-item active">Avatars</li>
      </ol>
    </nav>
  </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>