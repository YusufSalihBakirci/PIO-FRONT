<template>
    <Breadcrumbs main="Apps" mains="Contacts" title="Contacts" />
    <div class="container-fluid">
        <div class="email-wrap bookmark-wrap">
            <div class="row">
                <ContactSildebar />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const ContactSildebar = defineAsyncComponent(() => import("@/components/theme/contacts/ContactSildebar.vue"))
</script>