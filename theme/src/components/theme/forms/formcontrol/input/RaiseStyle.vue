<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" cardBodyClass="custom-input"
        preClass="mt-1 mb-0" headerTitle="true" title="Raise Style" :desc="desc">
        <form class="form theme-form raise-form">
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="raiseemail">Email address</label>
                        <input class="form-control" id="raiseemail" type="email" placeholder="name@example.com">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="raisepwd">Password</label>
                        <input class="form-control" id="raisepwd" type="password" placeholder="Password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="raisedisable">Disabled</label>
                        <input class="form-control" id="raisedisable" type="text" disabled="true" placeholder="Disabled">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label class="form-label" for="raiseselect">Example select</label>
                        <select class="form-select" id="raiseselect">
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
                        <label class="form-label" for="raiseselectmulti">Example multiple select</label>
                        <select class="form-select" id="raiseselectmulti" multiple="true">
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
                        <label class="form-label" for="raisetextarea">Example textarea</label>
                        <textarea class="form-control" id="raisetextarea" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="text-end">
                        <button class="btn btn-primary btn-air-light me-2" type="submit">Submit</button>
                        <input class="btn btn-danger btn-air-light" type="reset" value="Cancel">
                    </div>
                </div>
            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref('Give textual form controls like <code>&lt;input&gt;</code>s and ')
</script>