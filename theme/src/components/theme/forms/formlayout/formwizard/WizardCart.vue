<template>
    <div class="tab-pane fade" id="wizard-cart" role="tabpanel" aria-labelledby="wizard-cart-tab">
        <form class="row g-3 needs-validation custom-input validation-vertical-wizard" novalidate>
            <div class="col-xxl-6">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title fw-bold">Select your payment method</h6>
                    <div class="radio-form">
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault-a">
                            <label class="form-check-label" for="flexRadioDefault1">Visa</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault-a"
                                checked>
                            <label class="form-check-label" for="flexRadioDefault2">MasterCard</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault3" type="radio" name="flexRadioDefault-a"
                                checked>
                            <label class="form-check-label" for="flexRadioDefault3">Paypal</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 vartical-cart">
                <div class="row">
                    <div class="col-12">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username"
                                aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary" id="button-addon2" type="button">Submit</button>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group"><span class="input-group-text" id="basic-addon1">@</span>
                            <input class="form-control" type="text" placeholder="Username" aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <label class="form-label" for="txtCardNumber1">Card number</label>
                <input class="form-control" id="txtCardNumber1" type="number" required placeholder="xxxx xxxx xxxx xxxx">
                <div class="invalid-feedback">Please enter your valid number</div>
                <div class="valid-feedback">
                    Looks's Good!</div>
            </div>
            <div class="col-md-4 col-sm-6">
                <label class="form-label" for="validationDates">Expiration(MM/YY)</label>
                <input class="form-control" id="validationDates" type="number" required placeholder="xx/xx">
                <div class="invalid-feedback">Please enter your valid number</div>
                <div class="valid-feedback">
                    Looks's Good!</div>
            </div>
            <div class="col-md-4 col-sm-6">
                <label class="form-label" for="cvvNumber-b">CVV</label>
                <input class="form-control" id="cvvNumber-b" type="text" required>
                <div class="invalid-feedback">Please enter your valid number</div>
                <div class="valid-feedback">
                    Looks's Good!</div>
            </div>
            <div class="col-md-12 col-sm-6">
                <label class="form-label" for="formFile2">Upload documentation</label>
                <input class="form-control" id="formFile2" type="file" aria-label="file example" required>
                <div class="invalid-feedback">Invalid form file selected</div>
            </div>
            <div class="col-12">
                <div class="form-check mb-0">
                    <input class="form-check-input" id="invalidCheck-b" type="checkbox" value required>
                    <label class="form-check-label" for="invalidCheck-b">All the above information is correct</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary">Previous</button>
                <button class="btn btn-primary">Next</button>
            </div>
        </form>
    </div>
</template>