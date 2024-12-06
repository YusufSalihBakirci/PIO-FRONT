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
                    <h4 class="theme-name mb-0"><span>Modal 2 - </span>Result Modal</h4>
                    <p>Example of Admiro login form.</p>
                </div>
                <div class="overflow-hidden"><img class="img-fluid" src="@/assets/images/alert/learning.png" alt="learning">
                    <button class="btn btn-primary mx-auto mt-3" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModallogin">Click Out</button>
                </div>
                <div class="modal fade" id="exampleModallogin" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModallogin" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content dark-sign-up">
                            <div class="modal-body social-profile text-start">
                                <div class="modal-toggle-wrapper">
                                    <h4>Admiro Login</h4>
                                    <p class="mb-3">
                                        Fill in your information below to continue.</p>
                                    <form class="row g-3">
                                        <div class="col-md-12">
                                            <label class="form-label mb-1" for="inputEmailEnter">Email</label>
                                            <input class="form-control" id="inputEmailEnter" type="email"
                                                placeholder="Enter Your Email">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="form-label mb-1" for="inputPasswordEnter">Password</label>
                                            <input class="form-control" id="inputPasswordEnter" type="password"
                                                placeholder="Enter Your Password">
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check ps-0">
                                                <input class="checkbox-primary" id="checkout" type="checkbox">
                                                <label class="form-check-label" for="checkout">Check me out</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div></template>