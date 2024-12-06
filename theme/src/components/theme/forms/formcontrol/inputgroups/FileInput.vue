<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0"
        cardbodyClass="main-custom-form input-group-wrapper custom-input-file" preClass="mt-1 mb-0" headerTitle="true"
        title="Custom file input"
        desc=" Input groups include support for custom selects and custom  <code>file uploads</code>">
        <div class="input-group">
            <label class="input-group-text" for="inputGroupFile01">Upload</label>
            <input class="form-control" id="inputGroupFile01" type="file">
        </div>
        <div class="input-group">
            <input class="form-control" id="inputGroupFile02" type="file">
            <label class="input-group-text" for="inputGroupFile02">Verify</label>
        </div>
        <div class="input-group">
            <button class="btn btn-outline-success" id="inputGroupFileAddon03" type="button"><i
                    class="fa-solid fa-file"></i></button>
            <input class="form-control" id="inputGroupFile03" type="file" aria-describedby="inputGroupFileAddon03"
                aria-label="Upload">
        </div>
        <div class="input-group">
            <input class="form-control" id="inputGroupFile04" type="file" aria-describedby="inputGroupFileAddon04"
                aria-label="Upload">
            <button class="btn btn-outline-success" id="inputGroupFileAddon04" type="button">Submit</button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>