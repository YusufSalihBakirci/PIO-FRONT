<template>
    <div class="fade tab-pane" id="pills-favourites" role="tabpanel" aria-labelledby="pills-favourites-tab">
        <div class="card mb-0">
            <div class="card-header d-flex mb-0 card-no-border">
                <h3 class="mb-0">Favourites</h3>
                <ul>
                    <li><a class="grid-bookmark-view"><vue-feather type="grid"
                                @click="liststyle = !liststyle"></vue-feather></a></li>
                    <li><a class="list-layout-view"><vue-feather type="list"
                                @click="liststyle = !liststyle"></vue-feather></a></li>
                </ul>
            </div>
            <div class="card-body pb-0" v-if="favourite.length">
                <div class="details-bookmark text-center" v-bind:class="{ 'list-bookmark': liststyle }">
                    <div class="row" id="bookmarkData">
                        <div class="col-xxl-3 col-md-4 col-ed-4 col-sm-6" v-for="(item, index) in favourite" :key="index">
                            <div class="card card-with-border bookmark-card overflow-hidden">
                                <div class="details-website"><img class="img-fluid" :src='getImages(item.image)' alt="">
                                    <div class="favourite-icon favourite_0" @click="setFavourite(item)"><a
                                            href="javascript:void(0)"><i class="fa fa-star"></i></a></div>
                                    <div class="desciption-data">
                                        <div class="title-bookmark">
                                            <h5 class="title_0">{{ item.title }}</h5>
                                            <p class="weburl_0">{{ item.website_url }}</p>
                                            <div class="hover-block">
                                                <ul>
                                                    <li><a data-bs-toggle="modal"
                                                            data-bs-target="#edit-bookmark"><vue-feather
                                                                type="edit-2"></vue-feather> </a></li>
                                                    <li><a href="#"><vue-feather type="link"></vue-feather></a></li>
                                                    <li><a href="#"><vue-feather type="share-2"></vue-feather></a></li>
                                                    <li><a><vue-feather type="trash-2"
                                                                @click="basic_warning_alert(index)"></vue-feather></a></li>
                                                    <li class="pull-right text-right"><vue-feather type="tag"></vue-feather>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="content-general">
                                                <p class="desc_0"> {{ item.desc }}</p><span
                                                    class="collection_0">General</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body" v-else>
                <div class="details-bookmark text-center">
                    <div class="row" id="favouriteData"></div>
                    <div class="no-favourite"><span>No Bookmarks Found.</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { data } from "@/core/data/bookmark"
import { getImages } from "@/composables/common/getImages"
import { useBookmarkStore } from "@/store/bookmark"
import { ref } from 'vue'
import Swal from 'sweetalert2'
let liststyle = ref<boolean>(false)
let store = useBookmarkStore()
let favourite = store.favourite
function setFavourite(item: number) {
    const objIndex = favourite.findIndex(((obj) => obj.id === item.id));
    if (objIndex > -1) {
        favourite.splice(objIndex, 1);
    } else {
        favourite.push(item);
    }
}
function basic_warning_alert(index: number) {
    Swal.fire({
        icon: 'warning', title: "Are you sure?", text: 'This bookmark will be deleted from your bookmark ',
        showCancelButton: true,
        cancelButtonText: 'Cancel', confirmButtonText: 'Ok', confirmButtonColor: 'var(--theme-default)',
    }).then((result) => {
        if (result.value) {
            favourite.splice(index, 1)
            Swal.fire({
                icon: 'success', text: 'Poof! Your imaginary file has been deleted!',
                confirmButtonColor: 'var(--theme-default)',
            });
        } else {
            Swal.fire({
                text: 'Your contact is safe!', confirmButtonColor: 'var(--theme-default)',
            });
        }
    });
}
</script>