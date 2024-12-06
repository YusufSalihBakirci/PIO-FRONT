import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'
import { simple, flush, multiples, multipledata, iconaccodion, collapse } from "@/core/data/uikits"
import { quik, intell, selling, users } from "@/core/data/faq"
import { news, cancals, shippeds } from "@/core/data/ecommerce"
import { sent, starred, draft, trash, work, support } from "@/core/data/letter-box"
import { datatable } from "@/core/data/table"
import { jobs } from "@/core/data/job"

export const useCommonStore = defineStore('Common', () => {


    let quiks = ref(quik)
    let int = ref(intell)
    let sell = ref(selling)
    let user = ref(users)
    let data = ref(simple)
    let flushes = ref(flush)
    let multiple = ref(multiples)
    let multi = ref(multipledata)
    let icons = ref(iconaccodion)
    let newitem = ref(news)
    let cancal = ref(cancals)
    let shipped = ref(shippeds)
    let isLoading = ref<boolean>(false);
    let sents = ref(sent)
    let starr = ref(starred)
    let items = ref(draft)
    let deletes = ref(trash)
    let works = ref(work)
    let supported = ref(support)
    let table = ref(datatable)
    let job = ref(jobs)


    const toggleLoader = () => {
        isLoading.value = true;
        setTimeout(() => {
            isLoading.value = false
        }, 3000);
    };

    return {
        job,
        data,
        flushes,
        multiple,
        multi,
        icons,
        quiks,
        int,
        sell,
        user,
        newitem,
        cancal,
        shipped,
        isLoading,
        sents,
        starr,
        items,
        deletes,
        works,
        supported,
        table,
        toggleLoader
    }
})
