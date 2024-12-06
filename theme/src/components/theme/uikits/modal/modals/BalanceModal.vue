<template>
    <div class="col-xl-4 col-md-12 custom-alert text-center">
        <div class="card-wrapper border rounded-3 h-100">
            <div class="demo-img">
                <ul class="dot-group pb-3 pt-0">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="title-wrapper pb-3 modal-heading">
                    <h4 class="theme-name mb-0"><span>Modal 3 - </span>Balance Modal</h4>
                    <p>Example of Admiro dashboard balance card.</p>
                </div>
                <div class="overflow-hidden balance-modal"><img class="img-fluid" src="@/assets/images/alert/balance.png"
                        alt="balance">
                    <button class="btn btn-primary mx-auto mt-3" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModalbalancebox">Click Out</button>
                </div>
                <div class="modal fade" id="exampleModalbalancebox" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalbalancebox" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="col-xl-12">
                                <div class="card balance-box mb-0">
                                    <div class="card-body">
                                        <div class="balance-profile">
                                            <div class="balance-img"><img src="@/assets/images/avtar/4.jpg"
                                                    alt="user vector"><router-link class="edit-icon" to="/users/profile">
                                                    <div class="icon"><vue-feather class="stroke-primary"
                                                            type="edit-2"></vue-feather> </div>
                                                </router-link></div><span class="font-dark d-block">Your Balance </span>
                                            <h4 class="mt-1">$768,987.90</h4>
                                            <ul>
                                                <li>
                                                    <div class="balance-item">
                                                        <div class="balance-icon-wrap bg-light-danger">
                                                            <div class="balance-icon bg-danger">
                                                                <div class="icon"><vue-feather
                                                                        type="arrow-down-right"></vue-feather> </div>
                                                            </div>
                                                        </div>
                                                        <div> <span class="fs-12 font-dark">Investment </span>
                                                            <h4>78.8K</h4><span
                                                                class="badge badge-light-danger rounded-pill">-11.67%</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="balance-item">
                                                        <div class="balance-icon-wrap bg-light-success">
                                                            <div class="balance-icon bg-success">
                                                                <div class="icon"><vue-feather
                                                                        type="arrow-up-right"></vue-feather> </div>
                                                            </div>
                                                        </div>
                                                        <div> <span class="fs-12 font-dark">Cash Back</span>
                                                            <h4>19.7K</h4><span
                                                                class="badge badge-light-success rounded-pill">+10.67%</span>
                                                        </div>
                                                    </div>
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