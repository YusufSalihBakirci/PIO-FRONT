<template>
     <Card3 colClass="col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
          title="Simple Breadcrumb" desc="Breadcrumb with page name">
          <nav class="mb-0" aria-label="breadcrumb">
               <ol class="breadcrumb mb-1">
                    <li class="breadcrumb-item"><a href="javascript:void(0)"><i class="iconly-Home icli pe-1"> </i></a> Home
                    </li>
                    <li class="breadcrumb-item">Bonus Ui </li>
                    <li class="breadcrumb-item">Reting</li>
               </ol>
          </nav>
          <nav class="mb-0" aria-label="breadcrumb">
               <ol class="breadcrumb breadcrumb-style3 mb-0">
                    <li class="breadcrumb-item"><a href="javascript:void(0)"><i class="iconly-Home icli pe-1"> </i></a> Home
                    </li>
                    <li class="breadcrumb-item"><a href="javascript:void(0)"><i class="iconly-Info-Circle icli"></i></a> FAQ
                    </li>
               </ol>
          </nav>
     </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>