<template>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggle" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLongTitle">Two-factor authentication</h3>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="modal-toggle-wrapper">
                        <p>
                            To log into your account, you'll also need to enter your username, password, and a
                            code that was sent to you through SMS or an app.</p>
                        <div class="authentication-options">
                            <div class="form-check radio radio-primary ps-0">
                                <ul class="radio-wrapper">
                                    <li>
                                        <input class="form-check-input" id="radioOptionWizard1" type="radio" name="radio2"
                                            value="option2">
                                        <label class="form-check-label mb-0" for="radioOptionWizard1"><i
                                                class="fa fa-spin fa-cog"></i><span class="d-flex flex-column"><span>2FA
                                                    Authenticator</span><span>Obtain codes from a authy/google
                                                    authenticator/ios 15 etc.</span></span></label>
                                    </li>
                                    <li>
                                        <input class="form-check-input" id="radioOptionWizard2" type="radio" name="radio2"
                                            value="option2" checked>
                                        <label class="form-check-label mb-0" for="radioOptionWizard2"><i
                                                class="fa fa-comments"></i><span
                                                class="d-flex flex-column"><span>SMS</span><span>The backup
                                                    login method will be sent to you via SMS if you require
                                                    it.</span></span></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button class="btn btn-dark rounded-pill w-100 mt-3" data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal" data-bs-dismiss="modal">Next</button>
                        <button class="btn rounded-pill w-100 pb-0 dark-toggle-btn" type="button"
                            data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggle2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLongTitle1">Scan QR code</h3>
                    <button class="btn-close py-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body main-qr-code">
                    <div class="modal-toggle-wrapper">
                        <p>
                            Scan the QR code using an authenticator app and website such as abc authenticator, OTP xyz, or
                            pqr authenticator. You must input the six-digit code it generates below.</p>
                        <div class="modal-img">
                            <div class="qr-img"><img src="@/assets/images/forms/qr-code.png" alt="qr-code"></div>
                            <div class="qr-content">
                                <div class="alert alert-light-dark light alert-dismissible fade show text-dark border-left-wrapper"
                                    role="alert"><i class="fa fa-exclamation-triangle"></i>
                                    <div><span>If your qr code is not working then enter this code in your input
                                            field.</span><span class="f-w-500">TYU78DE29OLAAWCVNTYFGESWQ31098QW</span></div>
                                    <button class="btn-close" type="button" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                        <form class="needs-validation" novalidate>
                            <input class="form-control" id="AccountName" type="text" required placeholder="Enter QR Code">
                            <div class="valid-feedback">Looks good!</div>
                        </form>
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>