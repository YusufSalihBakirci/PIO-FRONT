<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" cardBodyClass="basic-form"
        preClass="mt-1 mb-0" headerTitle="true" title="Flat Style"
        desc="Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.">
        <form class="form theme-form flat-form">
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="email">Email address</label>
                        <input class="form-control" id="email" type="email" placeholder="name@example.com">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="pwd">Password</label>
                        <input class="form-control mb-3" id="pwd" type="password" placeholder="Password">
                        <input class="form-control" id="pwdre" type="password" placeholder="Re Enter Password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="disable">Disabled</label>
                        <input class="form-control" id="disable" type="text" disabled placeholder="Disabled">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="select">Example select </label>
                        <select class="form-select" id="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="multiselect">Example multiple select</label>
                        <select class="form-select" id="multiselect" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="textarea">Example textarea</label>
                        <textarea class="form-control" id="textarea" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="text-end">
                    <button class="btn btn-primary me-2 btn-square" type="submit">Submit</button>
                    <input class="btn btn-danger btn-square" type="reset" value="Cancel">
                </div>
            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>