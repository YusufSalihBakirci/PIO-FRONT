<template>
    <div class="row">
        <div class="col-xxl-8 col-xl-6 box-col-12">
            <h4 class="f-w-700 my-2">Search result for "Pixelstrap"</h4>

            <div class="info-block" v-for="(item, index) in data" :key="index"><a href="">{{ item.link }}</a>
                <h6>{{ item.title }}</h6>
                <p>{{ item.desc }}
                </p>
                <div class="star-ratings">
                    <ul class="search-info">
                        <li v-if="item.rating" v-html="stars(item.rating)"></li>
                        <li>3 stars</li>
                        <li>590 votes</li>
                        <li>Theme</li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="col-xxl-4 col-xl-6 box-col-12 mt-4">
            <div class="card overflow-hidden">
                <div class="blog-box blog-shadow"><img class="img-fluid" src="@/assets/images/blog/blog.jpg" alt="">
                    <div class="blog-details">
                        <p>25 July 2024</p>
                        <h4>Accusamus et iusto odio dignissimos ducimus qui blanditiis.</h4>
                        <ul class="blog-social">
                            <li><i class="icofont icofont-user"></i>Mark Jecno</li>
                            <li><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="info-block" v-for="(item, index) in data1" :key="index"><a href="">{{ item.link }}</a>
                <h6>{{ item.title }} </h6>
                <p>{{ item.desc }}</p>
                <div class="star-ratings">
                    <ul class="search-info">
                        <li v-html="stars(item.rating)"></li>
                        <li>3 stars</li>
                        <li>590 votes</li>
                        <li>Theme</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 mt-4">
            <nav aria-label="...">
                <ul class="pagination pagination-primary">
                    <li class="page-item disabled"><a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">2<span
                                class="sr-only">(current)</span></a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { data, data1 } from "@/core/data/search-result"
function stars(count: number) {
    var stars = '';

    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa-solid fa-star"></i>';
        } else {
            stars = stars + '<i class="fa-regular fa-star"></i>';
        }
    }

    return stars;
}
</script>