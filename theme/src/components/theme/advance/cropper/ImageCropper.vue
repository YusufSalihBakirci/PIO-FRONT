<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card ">
                <div class="card-header card-no-border pb-0">
                    <h3>Image Cropper</h3>
                    <p class="mb-0 mt-1">
                        Use the image cropper.js</p>
                </div>
                <div class="card-body">

                    <div class="row">
                        <div class="col-xl-9 col-md-12">
                            <div class="img-container">
                                <vue-cropper ref="cropper" :guides="true" :view-mode="viewmodeselected" drag-mode="crop"
                                    :aspectRatio="aspectRatioselected" :auto-crop-area="0.5" :min-container-width="250"
                                    :min-container-height="180" :background="true" :rotatable="true" :movable="true"
                                    :src="getImages(myimgSrc)" alt="Source Image" :ready="ready" :crop="cropImage"
                                    img-preview=".img-preview" :img-style="{ width: '800px', height: '500px' }">
                                </vue-cropper>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-12">
                            <div class="docs-preview clearfix">
                            </div>
                            <div class="docs-data">
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text">X</span>
                                    <input class="form-control digits" type="text" placeholder="x"
                                        :value="convertNumber(imageData?.x)">
                                    <span class="input-group-text">px</span>
                                </div>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text">Y</span>
                                    <input class="form-control digits" type="text" placeholder="y"
                                        :value="convertNumber(imageData?.y)">
                                    <span class="input-group-text">px</span>
                                </div>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text">Width</span>
                                    <input class="form-control digits" type="text" placeholder="width"
                                        :value="convertNumber(imageData?.width)">
                                    <span class="input-group-text">px</span>
                                </div>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text">Height</span>
                                    <input class="form-control digits" type="text" placeholder="height"
                                        :value="convertNumber(imageData?.height)">
                                    <span class="input-group-text">px</span>
                                </div>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text">Rotate</span>
                                    <input class="form-control digits" type="text" placeholder="rotate"
                                        :value="convertNumber(imageData?.rotate)">
                                    <span class="input-group-text">deg</span>
                                </div>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text">ScaleX</span>
                                    <input class="form-control digits" type="text" placeholder="scaleX"
                                        :value="convertNumber(imageData?.scaleX)">
                                </div>
                                <div class="input-group input-group-sm mb-0">
                                    <span class="input-group-text">ScaleY</span>
                                    <input class="form-control digits" type="text" placeholder="scaleY"
                                        :value="convertNumber(imageData?.scaleY)">
                                </div>
                                <img :src="cropImg" v-if="cropImg" class="img-fluid mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="row g-2">
                        <div class="col-xl-9 col-md-12 docs-buttons">
                            <div class="btn-group p-2">
                                <button class="btn btn-primary" type="button" data-method="setDragMode" data-option="move"
                                    title="Move"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)"
                                        v-on:click="moveImage"><span class="fa fa-arrows"></span></span></button>
                                <button class="btn btn-outline-primary" type="button" data-method="setDragMode"
                                    data-option="crop" title="Crop"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                        data-animation="false" @click="cropImage"
                                        title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)"><span
                                            class="fa fa-crop"></span></span></button>
                            </div>
                            <div class="btn-group p-2">
                                <button class="btn btn-primary" type="button" data-method="zoom" data-option="0.1"
                                    title="Zoom In"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                        data-animation="false" title="$().cropper(&quot;zoom&quot;, 0.1)"
                                        v-on:click="zoominImage(0.2)"><span
                                            class="fa fa-search-plus"></span></span></button>
                                <button class="btn btn-outline-primary" type="button" data-method="zoom" data-option="-0.1"
                                    title="Zoom Out"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                        data-animation="false" title="$().cropper(&quot;zoom&quot;, -0.1)"
                                        v-on:click="zoomoutImage(-0.2)"><span
                                            class="fa fa-search-minus"></span></span></button>
                            </div>
                            <div class="btn-group p-2">
                                <button class="btn btn-outline-secondary" type="button" data-method="move" data-option="-10"
                                    data-second-option="0" title="Move Left" v-on:click="moveImageLeft"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;move&quot;, -10, 0)"><span
                                            class="fa fa-arrow-left"></span></span></button>
                                <button class="btn btn-outline-secondary" type="button" data-method="move" data-option="10"
                                    data-second-option="0" title="Move Right" v-on:click="moveImageRight"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;move&quot;, 10, 0)"><span
                                            class="fa fa-arrow-right"></span></span></button>
                                <button class="btn btn-outline-secondary" type="button" data-method="move" data-option="0"
                                    data-second-option="-10" title="Move Up" v-on:click="moveImageUp"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;move&quot;, 0, -10)"><span
                                            class="fa fa-arrow-up"></span></span></button>
                                <button class="btn btn-outline-secondary" type="button" data-method="move" data-option="0"
                                    data-second-option="10" title="Move Down" v-on:click="moveImageDown"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;move&quot;, 0, 10)"><span
                                            class="fa fa-arrow-down"></span></span></button>
                            </div>
                            <div class="btn-group p-2">
                                <button class="btn btn-outline-success" type="button" data-method="rotate"
                                    v-on:click="rotateLeft" data-option="-45" title="Rotate Left"><span class="docs-tooltip"
                                        data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;rotate&quot;, -45)"><span
                                            class="fa fa-rotate-left"></span></span></button>
                                <button class="btn btn-outline-success" type="button" data-method="rotate"
                                    v-on:click="rotateRight" data-option="45" title="Rotate Right"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;rotate&quot;, 45)"><span
                                            class="fa fa-rotate-right"></span></span></button>
                            </div>
                            <div class="btn-group p-2">
                                <button class="btn btn-outline-info" v-on:click="fliphorizontal" type="button"
                                    data-method="scaleX" data-option="-1" title="Flip Horizontal"><span class="docs-tooltip"
                                        data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;scaleX&quot;, -1)"><span
                                            class="fa fa-arrows-h"></span></span></button>
                                <button class="btn btn-outline-info" v-on:click="flipvertical" type="button"
                                    data-method="scaleY" data-option="-1" title="Flip Vertical"><span class="docs-tooltip"
                                        data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;scaleY&quot;, -1)"><span
                                            class="fa fa-arrows-v"></span></span></button>
                            </div>
                            <div class="btn-group p-2">
                                <button class="btn btn-outline-warning" type="button" data-method="crop" title="Crop"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;crop&quot;)"><span
                                            class="fa fa-check"></span></span></button>
                                <button class="btn btn-outline-warning" type="button" data-method="clear" v-on:click="clear"
                                    title="Clear"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;clear&quot;)"><span
                                            class="fa fa-remove"></span></span></button>
                            </div>
                            <div class="btn-group p-2">
                                <button class="btn btn-outline-danger" type="button" v-on:click="disable"
                                    data-method="disable" title="Disable"><span class="docs-tooltip"
                                        data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;disable&quot;)"><span
                                            class="fa fa-lock"></span></span></button>
                                <button class="btn btn-outline-danger" type="button" v-on:click="enable"
                                    data-method="enable" title="Enable"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                        data-animation="false" title="$().cropper(&quot;enable&quot;)"><span
                                            class="fa fa-unlock"></span></span></button>
                            </div>
                            <div class="btn-group p-2">
                                <button class="btn btn-outline-dark" type="button" data-method="reset" v-on:click="reset"
                                    title="Reset"><span class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;reset&quot;)"><span
                                            class="fa fa-refresh"></span></span></button>

                                <button class=" btn btn-outline-dark" id="inputImage" name="file"
                                    accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff"><span class="docs-tooltip"
                                        data-bs-toggle="tooltip" data-animation="false"
                                        title="Import image with Blob URLs"><span
                                            class="fa fa-upload"></span></span></button>

                                <button class="btn btn-outline-dark" type="button" v-on:click="destroy"
                                    data-method="destroy" title="Destroy"><span class="docs-tooltip"
                                        data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;destroy&quot;)"><span
                                            class="fa fa-power-off"></span></span></button>
                            </div>
                            <div class="btn-group btn-group-crop p-2">
                                <button class="btn btn-outline-danger" type="button" data-method="getCroppedCanvas"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;getCroppedCanvas&quot;, { maxWidth: 4096, maxHeight: 4096 })">Get
                                        Cropped
                                        Canvas</span></button>
                                <button class="btn btn-outline-danger" type="button" data-method="getCroppedCanvas"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })">160×90</span></button>
                                <button class="btn btn-outline-danger" type="button" data-method="getCroppedCanvas"><span
                                        class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                        title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })">320×180</span></button>
                            </div>
                            <button class="btn btn-outline-secondary m-2" type="button" data-method="getData" data-option=""
                                data-bs-target="#putData" v-on:click="getCropperdata"><span class="docs-tooltip"
                                    data-bs-toggle="tooltip" data-animation="false"
                                    title="$().cropper(&quot;getData&quot;)">Get
                                    Data</span></button>
                            <button class="btn btn-outline-success m-2" type="button" data-method="setData"
                                data-bs-target="#putData"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                    data-animation="false" title="$().cropper(&quot;setData&quot;, data)">Set
                                    Data</span></button>
                            <button class="btn btn-outline-info m-2" type="button" data-method="getContainerData"
                                data-option="" data-bs-target="#putData" v-on:click="getContainerdata"><span
                                    class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                    title="$().cropper(&quot;getContainerData&quot;)">Get Container
                                    Data</span></button>
                            <button class="btn btn-outline-warning m-2" type="button" data-method="getImageData"
                                data-option="" data-bs-target="#putData" v-on:click="getImagedata"><span
                                    class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                    title="$().cropper(&quot;getImageData&quot;)">Get Image Data</span></button>
                            <button class="btn btn-outline-dark m-2" type="button" data-method="getCanvasData"
                                data-option="" data-bs-target="#putData" v-on:click="getCanvasData"><span
                                    class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                    title="$().cropper(&quot;getCanvasData&quot;)">Get Canvas Data</span></button>
                            <button class="btn btn-outline-secondary m-2" type="button" data-method="getCropBoxData"
                                data-option="" data-bs-target="#putData" v-on:click="getCropBoxData"><span
                                    class="docs-tooltip" data-bs-toggle="tooltip" data-animation="false"
                                    title="$().cropper(&quot;getCropBoxData&quot;)">Get Crop Box Data</span></button>
                            <button class="btn btn-outline-success m-2" type="button" data-method="moveTo" data-option="0"
                                v-on:click="moveImageTo"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                    data-animation="false" title="cropper.moveTo(0)">Move to [0,0]</span></button>
                            <button class="btn btn-outline-info m-2" type="button" data-method="zoomTo" data-option="1"
                                v-on:click="zoom100"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                    data-animation="false" title="cropper.zoomTo(1)">Zoom to
                                    100%</span></button>
                            <button class="btn btn-outline-warning m-2" type="button" data-method="rotateTo"
                                data-option="180" v-on:click="rotate180"><span class="docs-tooltip" data-bs-toggle="tooltip"
                                    data-animation="false" title="cropper.rotateTo(180)">Rotate
                                    180°</span></button>
                            <button class="btn btn-outline-dark m-2" type="button" data-method="scale" data-option="-2"
                                data-second-option="-1" v-on:click="scaleImage"><span class="docs-tooltip"
                                    data-bs-toggle="tooltip" title="cropper.scale(-2, -1)">Scale (-2,
                                    -1)</span></button>
                            <textarea class="form-control" id="putData" rows="1" v-model="putData"
                                placeholder="Get data to here or set data with this value"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import { getImages } from "@/composables/common/getImages"
import { ref, defineAsyncComponent } from "vue"
let myimgSrc = ref<string>('other-images/bg-profile.png')
let imageData = ref()
let containerData = ref<string>('')
let putData = ref<string>('')
let viewmodeselected = ref<number>(0)
let cropImg = ref<string>('')
let aspectRatioselected = ref<number>(1.7777777777777777)
let cropper = ref()
let convertNumber = (num?: number) => num != null ? Math.round(num) : undefined
function ready() {
    containerData.value = cropper.value.getContainerData();
}
function cropImage() {
    if (cropper.value) {
        imageData.value = cropper.value.getData();
        cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
    }
}

function rotate180() {
    cropper.value.rotateTo(180);
}
function zoom100() {
    cropper.value.zoomTo(1);
}
function moveImageTo() {
    cropper.value.moveTo(0);
}
function moveImage() {
    cropper.value.move(1);
}
function zoominImage(percent: string) {
    cropper.value.relativeZoom(percent);
}
function zoomoutImage(percent: string) {
    cropper.value.relativeZoom(percent);
}
function moveImageLeft() {
    cropper.value.move(-10, 0);
}
function moveImageRight() {
    cropper.value.move(10, 0);
}
function moveImageUp() {
    cropper.value.move(0, -10);
}
function moveImageDown() {
    cropper.value.move(0, 10);
}
function rotateLeft() {
    cropper.value.rotate(-45);
}
function rotateRight() {
    cropper.value.rotate(45);
}
function scaleImage() {
    cropper.value.scale(-2, -1);
}
function fliphorizontal() {
    if (imageData.value.scaleX === 1) {
        cropper.value.scale(-1, 1);
    } else {
        cropper.value.scale(1, 1);
    }
}
function flipvertical() {
    if (imageData.value.scaleY === 1) {
        cropper.value.scale(1, -1);
    } else {
        cropper.value.scale(1, 1);
    }
}
function clear() {
    cropper.value.clear();
}
function disable() {
    cropper.value.disable();
}
function enable() {
    cropper.value.enable();
}
function reset() {
    cropper.value.reset();
}
function destroy() {
    cropper.value.destroy();
}

function getCropperdata() {
    if (cropper.value) {
        var data = cropper.value.getData();
    }
    putData.value = '{"x":' + data.x + ',"y":' + data.y + ',"width":' + data.width + ',"height":' + data.height + ',"rotate":' + data.rotate + ',"scaleX":' + data.scaleX + ',"scaleY":' + data.scaleY + '}';
}
function getContainerdata() {
    var data = cropper.value.getContainerData();
    putData.value = '{"width":' + data.width + ',"height":' + data.height + '}';
}
function getImagedata() {
    var data = cropper.value.getImageData();
    putData.value = '{"naturalWidth":' + data.naturalWidth + ',"naturalHeight":' + data.naturalHeight + ',"aspectRatio":' + data.aspectRatio + ',"width":' + data.width + ',"height":' + data.height + ',"left":' + data.left + ',"top":' + data.top + '}';
}
function getCanvasData() {
    var data = cropper.value.getCanvasData();
    putData.value = '{"left":' + data.left + ',"top":' + data.top + ',"width":' + data.width + ',"height":' + data.height + ',"naturalWidth":' + data.naturalWidth + ',"naturalHeight":' + data.naturalHeight + '}';
}
function getCropBoxData() {
    var data = cropper.value.getCropBoxData();
    putData.value = '{"left":' + data.left + ',"top":' + data.top + ',"width":' + data.width + ',"height":' + data.height + '}';
}
</script>