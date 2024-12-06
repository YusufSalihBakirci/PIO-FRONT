<template>
    <div class="col-sm-12">
        <div class="card hovercard text-center">
            <div class="cardheader"></div>
            <div class="user-image">
                <div class="avatar"><img alt="" src="@/assets/images/user/7.jpg"></div>
                <div class="icon-wrapper"><i class="icofont icofont-pencil-alt-5"></i></div>
            </div>
            <div class="info">
                <div class="row">
                    <div class="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="ttl-info text-start">
                                    <h6><i class="fa fa-envelope"></i>   Email</h6><span>Marekjecno@yahoo.com</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="ttl-info text-start">
                                    <h6><i class="fa fa-calendar"></i>   BOD</h6><span>02 January 1988</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                        <div class="user-designation">
                            <div class="title"><a target="_blank" href="">Mark jecno</a></div>
                            <div class="desc">designer</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="ttl-info text-start">
                                    <h6><i class="fa fa-phone"></i>   Contact Us</h6><span>India +91 123-456-7890</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="ttl-info text-start">
                                    <h6><i class="fa fa-location-arrow"></i>   Location</h6><span>B69 Near Schoool Demo
                                        Home</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="social-media">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i
                                    class="fa-brands fa-facebook-f"></i></a></li>
                        <li class="list-inline-item"><a href="https://accounts.google.com/" target="_blank"><i
                                    class="fa-brands fa-google-plus-g"></i></a></li>
                        <li class="list-inline-item"><a href="https://twitter.com/" target="_blank"><i
                                    class="fa-brands fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i
                                    class="fa-brands fa-instagram"></i></a></li>
                        <li class="list-inline-item"><a href="https://rss.app/" target="_blank"><i
                                    class="fa-solid fa-rss"></i></a></li>
                    </ul>
                </div>
                <div class="follow">
                    <div class="row">
                        <div class="col-6 text-md-end border-right">
                            <div class="follow-num counter">
                                <number class="counter follow-num" ref="number" :from="0" :to="25869" :duration="5"
                                    :delay="0" easing="Power1.easeOut" />
                            </div><span>Follower</span>
                        </div>
                        <div class="col-6 text-md-start">
                            <div class="follow-num counter">
                                <number class="bold counter follow-num" ref="number1" :from="0" :to="659887" :duration="5"
                                    :delay="0" easing="Power1.easeOut" />
                            </div><span>Following</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>