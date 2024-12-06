<template>
    <div class="col-xl-8">
        <form class="card">
            <div class="card-header card-no-border pb-0">
                <h3 class="card-title mb-0">Edit Profile</h3>
                <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i
                            class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#"
                        data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
            </div>
            <div class="card-body">
                <div class="row g-3">
                    <div :class="item.class" v-for="(item, index) in edit" :key="index">

                        <label class="form-label">{{ item.title }}</label>
                        <input class="form-control" :type="item.type" :placeholder="item.placeholder">

                    </div>
                    <div class="col-md-5">

                        <label class="form-label">Country</label>
                        <select class="form-control btn-square">
                            <option value="0" v-for="(item, index) in country" :key="index">{{ item.title }}</option>
                        </select>

                    </div>
                    <div class="col-md-12">
                        <div>
                            <label class="form-label">About Me</label>
                            <textarea class="form-control" rows="4" placeholder="Enter About your description"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-primary" type="submit">Update Profile</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { edit, country } from "@/core/data/user"
</script>