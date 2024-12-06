<template>
    <Breadcrumbs main="Form Controls" mains="Switch" title="Switch" />
    <div class="container-fluid">
        <div class="row">
            <CustomSwitch />
            <IconsSwitch />
            <UncheckedSwitch />
            <BordersIcons />
            <DisabledOutline />
            <VariationSwitches />
            <SwitchSizing />
            <SwitchIcons />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const CustomSwitch = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/CustomSwitch.vue"))
const IconsSwitch = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/IconsSwitch.vue"))
const UncheckedSwitch = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/UncheckedSwitch.vue"))
const BordersIcons = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/BordersIcons.vue"))
const DisabledOutline = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/DisabledOutline.vue"))
const VariationSwitches = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/VariationSwitches.vue"))
const SwitchSizing = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/SwitchSizing.vue"))
const SwitchIcons = defineAsyncComponent(() => import("@/components/theme/forms/formwidgets/switch/SwitchIcons.vue"))
</script>