<template>
    <div class="modal fade modal-bookmark" id="edit-bookmark" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Edit Bookmark</h3>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="form-bookmark needs-validation" novalidate>
                        <div class="row g-2">
                            <div class="mb-3 mt-0 col-md-12">
                                <label>Web Url</label>
                                <input class="form-control" id="editurl" type="text" required autocomplete="off"
                                    value="http://admin.pixelstrap.com/ltr/index.html">
                            </div>
                            <div class="mb-3 mt-0 col-md-12">
                                <label>Title</label>
                                <input class="form-control" id="edittitle" type="text" required autocomplete="off"
                                    value="Admin Template">
                            </div>
                            <div class="mb-3 mt-0 col-md-12">
                                <label>Description</label>
                                <textarea class="form-control" id="editdesc" required
                                    autocomplete="off"> is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.</textarea>
                            </div>
                            <div class="mb-3 mt-0 col-md-6">
                                <label>Group</label>
                                <select class="js-example-basic-single">
                                    <option value="AL">My Bookmarks</option>
                                </select>
                            </div>
                            <div class="mb-3 mt-0 col-md-6">
                                <label>Collection</label>
                                <select class="js-example-disabled-results">
                                    <option value="general">General</option>
                                    <option value="fs">fs</option>
                                </select>
                            </div>
                        </div>
                        <button class="btn btn-secondary" type="button">Save</button>
                        <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Cancel </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let props = defineProps({
    quickViewProduct: Object,
});
</script>