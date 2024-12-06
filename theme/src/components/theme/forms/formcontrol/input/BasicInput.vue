<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" cardBodyClass="basic-form"
        preClass="mt-1 mb-0" headerTitle="true" title="Basic Input Type Control"
        desc="<code>.form-select</code> to trigger the custom styles.">
        <form class="theme-form row g-3">
            <div class="col-sm-3">
                <label class="form-label">Place holder</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="text" placeholder="This is for hint only ..!">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Number</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="number" value="50">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Phone Number</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="tel" value="91-(999)-999-999">
            </div>
            <div class="col-sm-3">
                <label class="form-label">URL</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="url" value="https://themeforest.net">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Date and time</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="datetime-local" value="2024-05-01T00:00" min="2024-05-01T00:00">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Date</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="date" value="2024-05-01">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Time</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="time" value="00:00">
            </div>
            <div class="col-sm-3">
                <label class="form-label">File</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="file">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Maximum Length</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control" type="text" maxlength="6" value="Content must be in 6 characters">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Color</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control form-control-color" type="color" value="#2e8e87">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Read only</label>
            </div>
            <div class="col-sm-9">
                <input class="form-control-plaintext" id="staticEmail" type="text" readonly value="email@example.com">
            </div>
            <div class="col-sm-3">
                <label class="form-label">Textarea</label>
            </div>
            <div class="col-sm-9">
                <textarea class="form-control" rows="5" cols="5" placeholder="Default textarea"></textarea>
            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>