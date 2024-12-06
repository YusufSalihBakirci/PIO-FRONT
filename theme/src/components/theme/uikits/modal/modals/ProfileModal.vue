<template>
    <div class="col-xl-4 col-md-6 custom-alert text-center">
        <div class="card-wrapper border rounded-3 h-100">
            <div class="demo-img">
                <ul class="dot-group pb-3 pt-0">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="title-wrapper pb-3 modal-heading">
                    <h4 class="theme-name mb-0"><span>Modal 1 -</span>Profile Modal</h4>
                    <p>Example of Admiro dashboard profile card.</p>
                </div>
                <div class="overflow-hidden"><img class="img-fluid" src="@/assets/images/alert/social.png" alt="social">
                    <button class="btn btn-primary mx-auto mt-3" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModallaptop1">Click Out</button>
                </div>
                <div class="modal fade" id="exampleModallaptop1" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModallaptop1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="col-xl-12">
                                <div class="card social-profile mb-0">
                                    <div class="card-body">
                                        <div class="social-img-wrap">
                                            <div class="social-img"><img src="@/assets/images/avtar/3.jpg" alt="profile">
                                            </div>
                                            <div class="edit-icon">
                                                <div class="icon"><vue-feather class="stroke-primary"
                                                        type="check-circle"></vue-feather>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="social-details">
                                            <h4 class="mb-1"><router-link class="fs-20" to="/pages/social_app">Brooklyn
                                                    Simmons</router-link>
                                            </h4><span class="font-dark">@brookly.simmons</span>
                                            <ul class="social-follow">
                                                <li>
                                                    <h4 class="mb-0">1,908</h4><span class="font-dark">Posts</span>
                                                </li>
                                                <li>
                                                    <h4 class="mb-0">34.0k</h4><span class="font-dark">Followers</span>
                                                </li>
                                                <li>
                                                    <h4 class="mb-0">897</h4><span class="font-dark">Following</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>