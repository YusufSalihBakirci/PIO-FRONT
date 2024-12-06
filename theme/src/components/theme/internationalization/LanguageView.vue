<template>
    <Card3 colClass="col-lg-12" cardhaderClass="card-no-border pb-0" headerTitle="true" title="How to add language"
        desc="you can also add other language according to below in js and add lanuage type in langChoice" text="true">
        <pre
            class="theme-scrollbar language px-4"><span class="font-danger">var </span>LANGUAGES = {<br>"English": {<br>"columns": [<br>"Base",<br>"Advance",<br>"scrollable",<br>"Tree View",<br>"Rating",<br>"News",<br>"Tables",<br>"Base",<br>"Advance",<br>"scrollable",<br>"Tree View",<br>"Rating",<br>"News",<br>"Tables"<br>],<br>"heading": "Static Sub Nav",<br>},<br>"German": {<br>"columns": [<br>"Basis",<br>"Fortschritt",<br>"scrollable",<br>"Baumansicht",<br>"Die Einschaltquote",<br>"Nachrichten",<br>"Tische",<br>"Basis",<br>"Fortschritt",<br>"scrollable",<br>"Baumansicht",<br>"Die Einschaltquote",<br>"Nachrichten",<br>"Tische"<br>],<br>"heading": "Statisches U-Boot Nav",<br>},<br>"Russian": {<br>"columns": [<br>"Основа",<br>"Прогресс",<br>"прокручиваемый",<br>"Представление Дерева",<br>"Оценка",<br>"новости",<br>"Столы",<br>"Основа",<br>"Прогресс",<br>"прокручиваемый",<br>"Представление Дерева",<br>"Оценка",<br>"новости",<br>"Столы"<br>],<br>"heading": "Статический Sub Военно - морской",<br>},<br>"Arabic": {<br>"columns": [<br>"قاعدة",<br>"مقدما",<br>"التمرير",<br>"عرض الشجرة",<br>"تصنيف",<br>"أخبار",<br>"الجداول",<br>"قاعدة",<br>"مقدما",<br>"التمرير",<br>"عرض الشجرة",<br>"تصنيف",<br>"أخبار",<br>"الجداول"<br>],<br>"heading": "صافي قيمة الأصول شبه الثابتة",<br>}<br>};</pre>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>