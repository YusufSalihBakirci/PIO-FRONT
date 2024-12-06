<template>
    <Card1 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="Kick start your project development !">
        <p>Getting start with your project custom requirements using a ready template which is quite difficult and time
            taking process, Admiro Admin provides useful features to kick start your project development with no efforts !
        </p>
        <ul>
            <li v-for="(item, index) in kick" :key="index">
                <p>{{ item.title }}</p>
            </li>

        </ul>
    </Card1>
    <Card1 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="What is starter kit ?">
        <p>Starter kit is a set of pages with different layouts, useful for your next project to start development process
            from scratch with no time.</p>
        <ul>
            <li v-for="(item, index) in kit" :key="index">
                <p>{{ item.title }}</p>
            </li>

        </ul>
    </Card1>
    <Card1 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="How to use starter kit ?">
        <p><span class="f-w-600">HTML</span></p>
        <p>If you know just HTML, select your choice of layout from starter kit folder, customize it with optional
            changes like colors and branding, add required dependency only.</p>
        <p><span class="f-w-600">PUG</span></p>
        <p>To use PUG it required node.js and basic knowledge of using it. Using PUG as template engine to generate
            whole template quickly with your selected layout and other custom changes. To getting start with PUG
            usage & template generating process please refer template documentation.</p>
        <div class="alert alert-primary inverse" role="alert"><i class="icon-info-alt"></i>
            <h4>Tips!</h4>
            <p>Hideable navbar option is available for fixed navbar with static navigation only. Works in top and
                bottom positions, single and multiple navbars.</p>
        </div>
    </Card1>
    <Card1 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="Simple Card">
        <h6>HTML Ipsum Presents</h6>
        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas
            semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien
            ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi.
            Aenean
            fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a
                href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
        </p>
        <h6>Header Level 2</h6>
        <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>
        <div class="figure d-block">
            <blockquote class="blockquote">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet
                    congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
                    mollis, tellus est malesuada
                    tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
                </p>
            </blockquote>
        </div>
        <h4>Header Level<span> 3</span></h4>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
        <pre>#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}</pre>
        <dl>
            <dt>Definition list</dt>
            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
            <dt>Lorem ipsum dolor sit amet</dt>
            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
        </dl>
    </Card1>
    <Card1 colClass="col-md-6" cardhaderClass="card-no-border pb-0" title="With Header">
        <h4>Content title</h4>
        <p v-for="(item, index) in header" :key="index" v-html="item.title"></p>
    </Card1>

    <Card1 colClass="col-md-6" cardhaderClass="card-no-border pb-0 card-no-border" title="With Header & No Border">
        <h4>Content title</h4>
        <p v-for="(item, index) in boder" :key="index" v-html="item.title"></p>
    </Card1>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { kick, kit, header, boder } from "@/core/data/dashboard"
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>