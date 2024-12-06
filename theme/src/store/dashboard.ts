import { defineStore } from "pinia";
import { ref, } from "vue";
import { history, invoice, seller, swipers, order, details, tables, swipersitems } from "@/core/data/dashboards"
export const useDashboardStore = defineStore("dashboard", () => {
    let data = ref(history)
    let invoices = ref(invoice)
    let sellers = ref(seller)
    let swiperss = ref(swipers)
    let orders = ref(order)
    let detail = ref(details)
    let table = ref(tables)
    let swipersitem = ref(swipersitems)
    return {
        data,
        invoices,
        sellers,
        swiperss,
        orders,
        detail,
        table,
        swipersitem
    }
})