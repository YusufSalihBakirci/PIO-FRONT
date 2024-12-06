<template>
    <div class="modal fade" id="exampleModalgetbootstrap" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalgetbootstrap" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Information</h5>
                    <button class="btn-close py-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-12">
                            <label class="form-label" for="validationCustom01">Name</label>
                            <input class="form-control" id="validationCustom01" type="text" placeholder="Enter your name"
                                required>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="col-12">
                            <label class="form-label" for="validationAddress-a">Address</label>
                            <textarea class="form-control" id="validationAddress-a" rows="3"
                                placeholder="Enter your address..."></textarea>
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="col-12">
                            <label class="form-label w-100" for="addressType-a">Address Type
                                <select class="form-select" id="addressType-a" required>
                                    <option selected value>Home</option>
                                    <option>Office</option>
                                </select>
                            </label>
                        </div>
                        <div class="col-12">
                            <label for="contact">Contact No</label>
                            <input class="form-control" id="contact" type="number" placeholder="123456789">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn m-0" type="button" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-primary m-0" type="button">Save</button>
                </div>
            </div>
        </div>
</div></template>