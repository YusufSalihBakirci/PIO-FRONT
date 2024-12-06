<template>
    <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-picture bg-success"><i class="icon-image"></i></div>
        <div class="cd-timeline-content">
            <div class="timeline-wrapper">
                <div class="badge bg-info">Designer</div>
            </div>
            <h5 class="f-w-600 m-0">Research about most recent design trends.</h5>
            <p class="mb-0">
                Spend some time looking up current design trend. </p>
            <div class="carousel slide" id="carouselExampleIndicators" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button class="active" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active"><img class="d-block w-100" src="@/assets/images/banner/2.jpg"
                            alt="office-work"></div>
                    <div class="carousel-item"><img class="d-block w-100" src="@/assets/images/banner/1.jpg"
                            alt="office-work"></div>
                    <div class="carousel-item"><img class="d-block w-100" src="@/assets/images/banner/3.jpg"
                            alt="office-work"></div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Previous</span></button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span
                    class="visually-hidden">Next</span></button>
        </div><span class="cd-date">April 23 2024</span>
    </div>
</div></template>