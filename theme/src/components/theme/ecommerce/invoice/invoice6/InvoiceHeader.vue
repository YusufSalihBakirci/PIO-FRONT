<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="d-flex">
                    <div class="media-left"><img class="media-object for-light img-80"
                            src="@/assets/images/other-images/logo-login.png" alt="" /><img
                            class="media-object for-dark img-80" src="@/assets/images/other-images/dark-logo-login.png"
                            alt="" /></div>
                    <div class="text-start m-l-20 text-right">
                        <p>hello@Admiro.in<br /><span>289-335-6503</span></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="text-md-end text-xs-center">
                    <h3>Invoice #<span class="counter" id="count1">
                            <number class="bold counter" ref="number1" :from="0" :to="1069" :duration="5" :delay="0"
                                easing="Power1.easeOut" />
                        </span></h3>
                    <p>Issued: May<span> 27, 2015</span><br /> Payment Due: June <span>27, 2015</span></p>
                </div>
            </div>
        </div>
</div></template>