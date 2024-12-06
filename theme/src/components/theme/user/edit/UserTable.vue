<template>
    <div class="col-md-12">
        <div class="card">
            <div class="card-header card-no-border pb-0">
                <h3 class="card-title mb-0">Add projects And Upload</h3>
                <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i
                            class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#"
                        data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
            </div>
            <div class="table-responsive add-project custom-scrollbar">
                <table class="table card-table table-vcenter text-nowrap">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in useredit" :key="index">
                            <td><a class="text-inherit" href="#">{{ item.title }}</a></td>
                            <td>{{ item.date }}</td>
                            <td><span class="status-icon " :class="item.class"></span> {{ item.status }}</td>
                            <td>{{ item.price }}</td>
                            <td class="text-end"><a class="icon" href="javascript:void(0)"></a><a
                                    class="btn btn-primary btn-sm" href="javascript:void(0)"><i class="fa fa-pencil"></i>
                                    Edit</a><a class="icon" href="javascript:void(0)"></a><a
                                    class="btn btn-transparent btn-sm" href="javascript:void(0)"><i class="fa fa-link"></i>
                                    Update</a><a class="icon" href="javascript:void(0)"></a><a class="btn btn-danger btn-sm"
                                    href="javascript:void(0)"><i class="fa fa-trash"></i> Delete</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useredit } from "@/core/data/user"
</script>