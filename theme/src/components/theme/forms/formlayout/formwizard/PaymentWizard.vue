<template>
    <div class="tab-pane fade shipping-wizard" id="payment-wizard" role="tabpanel" aria-labelledby="payment-wizard-tab">
        <h5 class="f-w-600">Payment Information</h5>
        <p>Fill up the following information to send you the order</p>
        <div class="payment-info-wrapper">
            <div class="row shipping-method g-3">
                <div class="col-12">
                    <div class="card-wrapper border rounded-3 ">
                        <div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="shipping-choose5" type="radio" name="radio3"
                                    value="option1" checked>
                                <label class="form-check-label mb-0 f-w-500" for="shipping-choose5">Paypal</label>
                            </div>
                            <p>You will be taken to the paypal website to finish your transaction safely</p>
                        </div>
                        <div> <img src="@/assets/images/ecommerce/paypal.png" alt="paypal"></div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card-wrapper border rounded-3 pay-info ">
                        <div>
                            <div>
                                <div class="form-check radio radio-primary">
                                    <input class="form-check-input" id="shipping-choose6" type="radio" name="radio3"
                                        value="option1">
                                    <label class="form-check-label mb-0 f-w-500" for="shipping-choose6">Credit Card</label>
                                </div>
                                <p>Transferring money securely through your bank account. Mastercard, Visa, Discover, and
                                    Stripe are all accepted</p>
                            </div>
                            <div> <img src="@/assets/images/forms/credit-card.png" alt="card"></div>
                        </div>
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-12">
                                <label class="form-label" for="placeholdername">Card Holder</label>
                                <input class="form-control" id="placeholdername" type="text" required
                                    placeholder="Enter card holder name">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" for="holdernumber">Card Number</label>
                                <input class="form-control" id="holdernumber" type="text" required
                                    placeholder="xxxx xxxx xxxx xxxx">
                                <div class="invalid-feedback">Please enter your valid number</div>
                                <div class="valid-feedback">
                                    Looks's Good!</div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" for="expirationdates">Expiration(MM/YY)</label>
                                <input class="form-control" id="expirationdates" type="number" required placeholder="xx/xx">
                                <div class="invalid-feedback">Please enter your valid number</div>
                                <div class="valid-feedback">
                                    Looks's Good!</div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" for="cvvNumber-c">CVV</label>
                                <input class="form-control" id="cvvNumber-c" type="text" required>
                                <div class="invalid-feedback">Please enter your valid number</div>
                                <div class="valid-feedback">
                                    Looks's Good!</div>
                            </div>
                            <div class="col-12">
                                <label class="form-label" for="formFile3">Upload Documentation</label>
                                <input class="form-control" id="formFile3" type="file" aria-label="file example" required>
                                <div class="invalid-feedback">Invalid form file selected</div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" id="invalidCheck-c" type="checkbox" value required>
                                    <label class="form-check-label" for="invalidCheck-c">All the above information is
                                        correct</label>
                                    <div class="invalid-feedback">You must agree before submitting.</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card-wrapper border rounded-3 ">
                        <div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="shipping-choose7" type="radio" name="radio3"
                                    value="option1">
                                <label class="form-check-label mb-0 f-w-500" for="shipping-choose7">Cash On Delivery</label>
                            </div>
                            <p>After your order is delivered, make a cash payment</p>
                        </div>
                        <div> <img src="@/assets/images/forms/delivery.png" alt="delivery"></div>
                    </div>
                </div>
                <div class="col-12 text-end">
                    <button class="btn btn-primary">Proceed to Next<i class="fa fa-truck proceed-next pe-2"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>