<template>
    <div class="col-md-6">
        <div class="card-wrapper border rounded-3 h-100">
            <div class="row g-1">
                <div class="col-xxl-4 box-col-5">
                    <div class="authenticate"><img class="img-fluid" src="@/assets/images/forms/email.png" alt=""></div>
                </div>
                <div class="col-xxl-8 box-col-7">
                    <h2>Email verification</h2>
                    <p>A verification code has been sent to your email. This code will be valid for 15 minutes.</p>
                    <div class="input-group mb-2 basic-form">
                        <input class="form-control" type="text" placeholder="Please enter the code here"
                            aria-label="basic-addon2" aria-describedby="basic-addon2"><span
                            class="input-group-text bg-primary" id="basic-addon2">Verify</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>