<template>
    <div class="modal fade" id="label-pill-modal" tabindex="-1" aria-labelledby="#label-pill-modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="label-pill-modalLabel">Add Label</h1>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row g-sm-3 g-2 custom-input">
                            <label class="col-sm-2 col-form-label" for="LabelName_modal">Label Name :</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="Email_Modal" type="email" />
                            </div>
                            <label class="col-sm-2 col-form-label" for="LabelName_modal">Email :</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="Color_Modal" type="email" />
                            </div>
                            <label class="form-label col-sm-2" for="exampleColorInput">Label Color :</label>
                            <div class="col-sm-2 col-2">
                                <input class="form-control form-control-color" id="exampleColorInput" type="color"
                                    value="#009DB5" title="Choose your color" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light" type="button" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" type="button">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>