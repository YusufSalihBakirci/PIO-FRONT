<template>
    <div class="tab-pane fade custom-input" id="wizard-banking" role="tabpanel" aria-labelledby="wizard-banking-tab">
        <form class="row g-3 mb-3 needs-validation custom-input vartical-validation validation-vertical-wizard" novalidate>
            <div class="col-md-12">
                <div class="accordion dark-accordion" id="accordionExample-a">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne-a">
                            <button class="accordion-button collapsed accordion-light-primary text-primary" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne-a" aria-expanded="true"
                                aria-controls="collapseOne-a">NET BANKING<i class="fa-solid fa-chevron-down ms-auto me-0"></i></button>
                        </h2>
                        <div class="accordion-collapse collapse" id="collapseOne-a" aria-labelledby="headingOne-a"
                            data-bs-parent="#accordionExample-a">
                            <div class="accordion-body weight-title">
                                <h6 class="sub-title">SELECT YOUR BANK</h6>
                                <div class="row ">
                                    <div class="col-sm-6">
                                        <div class="form-check radio radio-primary">
                                            <input class="form-check-input" id="flexRadioDefault-z" type="radio"
                                                name="flexRadioDefault-v">
                                            <label class="form-check-label" for="flexRadioDefault-z">Industrial & Commercial
                                                Bank</label>
                                        </div>
                                        <div class="form-check radio radio-primary">
                                            <input class="form-check-input" id="flexRadioDefault-y" type="radio"
                                                name="flexRadioDefault-v">
                                            <label class="form-check-label" for="flexRadioDefault-y">Agricultural
                                                Bank</label>
                                        </div>
                                        <div class="form-check radio radio-primary">
                                            <input class="form-check-input" id="flexRadioDefault-x" type="radio"
                                                name="flexRadioDefault-v" checked>
                                            <label class="form-check-label" for="flexRadioDefault-x">JPMorgan Chase &
                                                Co.</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-check radio radio-primary">
                                            <input class="form-check-input" id="flexRadioDefault-w" type="radio"
                                                name="flexRadioDefault-v">
                                            <label class="form-check-label" for="flexRadioDefault-w">Construction Bank
                                                Corp.</label>
                                        </div>
                                        <div class="form-check radio radio-primary">
                                            <input class="form-check-input" id="flexRadioDefault-v" type="radio"
                                                name="flexRadioDefault-v">
                                            <label class="form-check-label" for="flexRadioDefault-v">Bank of America</label>
                                        </div>
                                        <div class="form-check radio radio-primary">
                                            <input class="form-check-input" id="flexRadioDefault-u" type="radio"
                                                name="flexRadioDefault-v">
                                            <label class="form-check-label" for="flexRadioDefault-u">HDFC Bank</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <textarea class="form-control" id="validationTextarea24" placeholder="Your Feedback" required></textarea>
                <div class="invalid-feedback">Please enter a message in the textarea.</div>
            </div>
            <div class="col-12">
                <div class="form-check mb-0">
                    <input class="form-check-input" id="invalidCheck67" type="checkbox" value required>
                    <label class="form-check-label mb-0" for="invalidCheck67">Agree to terms and conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-success">Finish</button>
            </div>
        </form>
    </div>
</template>