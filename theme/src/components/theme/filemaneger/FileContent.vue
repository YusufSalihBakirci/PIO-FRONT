<template>
    <div class="col-xl-9 col-md-12 box-col-12">
        <div class="file-content">
            <div class="card">
                <div class="card-header d-md-block d-none card-no-border">
                    <div class="d-md-flex d-sm-block align-items-center">
                        <form class="form-inline basic-form" action="#" method="get">
                            <div class="form-group d-flex mb-0 align-items-center"><i
                                    class="fa-solid fa-magnifying-glass"></i>
                                <input class="form-control-plaintext" type="text" placeholder="Search...">
                            </div>
                        </form>
                        <div class="flex-grow-1 text-end">
                            <form class="d-inline-flex">
                                <button class="btn btn-primary plus-square"><vue-feather type="plus-square"></vue-feather>
                                    Add New</button>
                                <div style="height: 0px;width: 0px; overflow:hidden;">
                                    <input id="upfile" type="file" onchange="sub(this)">
                                </div>
                                <button class="btn btn-outline-primary ms-2 upload"><vue-feather
                                        type="upload"></vue-feather>Upload</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card-body file-manager">
                    <h4 class="mb-2">Quick Access</h4>
                    <ul class="quick-file d-flex flex-row">
                        <li v-for="(item, index) in quicks" :key="index">
                            <div class="quick-box"><i :class="item.icon"></i></div>
                            <h6 class="mb-2">{{ item.title }}</h6>
                        </li>
                    </ul>
                    <h4 class="mt-4 mb-2">Folders</h4>
                    <ul class="folder">
                        <li class="folder-box" v-for="(item, index) in folders" :key="index">
                            <div class="d-block"><i :class="item.icon"></i><i
                                    class="fa-solid fa-ellipsis-vertical ellips me-0"></i>
                                <div class="mt-3">
                                    <h6 class="mb-2">{{ item.name }}</h6>
                                    <p>{{ item.file }}<span class="pull-right"> <i class="fa-solid fa-clock"></i>
                                            {{ item.time }}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h4 class="mt-4 mb-2 mb-2 mb-2">Files</h4>
                    <ul class="d-flex flex-row files-content">
                        <li class="folder-box d-flex align-items-center" v-for="(item, index) in files" :key="index">
                            <div class="d-flex align-items-center files-list">
                                <div class="flex-shrink-0 file-left"> <i :class="item.icon"></i>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5 class="f-w-600">{{ item.title }}</h5>
                                    <p>{{ item.store }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { quicks, folders, files } from "@/core/data/filemaneger"
</script>