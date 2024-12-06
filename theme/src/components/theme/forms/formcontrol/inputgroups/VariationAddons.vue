<template>
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header card-no-border pb-0">
                <h3>Variation of addons</h3>
                <p class="mt-1 mb-0">
                    Place one add-on or button on either side of an input. You may also place one on both sides of an
                    input.<code>&lt;label&gt;  </code>outside the input group.</p>
            </div>
            <div class="card-body card-wrapper input-radius variation-input">
                <div class="row">
                    <div class="col">
                        <form>
                            <div class="mb-3 m-form__group">
                                <label class="form-label">Left Addon</label>
                                <div class="input-group"><span class="input-group-text list-light-primary"><i
                                            class="fa-solid fa-pencil text-primary"></i></span>
                                    <input class="form-control" type="text" placeholder="Email">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Right Addon</label>
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Recipient's username"
                                        aria-label="Recipient's username"><span
                                        class="input-group-text list-light-danger"><i
                                            class="fa-solid fa-phone text-danger"></i></span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Joint Addon</label>
                                <div class="input-group"><span class="input-group-text list-light-primary"><i
                                            class="fa-solid fa-link-slash text-primary"></i></span><span
                                        class="input-group-text">0.00</span>
                                    <input class="form-control" type="text" aria-label="Amount (to the nearest dollar)">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Left & Right Addon</label>
                                <div class="input-group mb-3"><span class="input-group-text list-light-danger"><i
                                            class="fa-solid fa-magnifying-glass-minus text-danger"></i></span>
                                    <input class="form-control" type="text"
                                        aria-label="Amount (to the nearest dollar)"><span
                                        class="input-group-text list-light-danger"><i
                                            class="fa-solid fa-magnifying-glass-plus text-danger"></i></span>
                                </div>
                            </div>
                            <div class="mb-3 input-group-square">
                                <label class="form-label">Flat style</label>
                                <div class="input-group"><span class="input-group-text list-light-danger"><i
                                            class="fa-solid fa-credit-card text-danger"></i></span>
                                    <input class="form-control" type="text" placeholder="">
                                </div>
                            </div>
                            <div class="mb-3 input-group-square">
                                <label class="form-label">Raise style</label>
                                <div class="input-group"><span class="input-group-text list-light-primary"><i
                                            class="fa-solid fa-download text-primary"></i></span>
                                    <input class="form-control input-group-air" type="text"
                                        placeholder="https://www.example.com">
                                </div>
                            </div>
                            <div>
                                <label class="form-label">Left & Right Addon</label>
                                <div class="input-group pill-input-group"><span
                                        class="input-group-text list-light-danger"><i
                                        class="fa-solid fa-copy text-danger"></i></span>
                                <input class="form-control" type="text"
                                    aria-label="Amount (to the nearest dollar)"><span
                                    class="input-group-text list-light-danger"><i
                                        class="fa-solid fa-magnifying-glass text-danger"></i></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary m-r-15" type="submit">Submit</button>
            <button class="btn btn-light text-dark ms-2" type="submit">Cancel </button>
        </div>
    </div>
</div></template>