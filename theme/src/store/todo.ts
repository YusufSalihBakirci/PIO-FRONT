
import { defineStore } from 'pinia'
import { ref } from "vue"

import { data } from "@/core/data/todo"

export const useTodoStore = defineStore('todo', () => {


    const todo = ref(data)
    function taskcomplete(item: number) {

        todo.value.find(function (list: any) {
            if (list.id === item) {
                return list.status = list.status === 'complete' ? 'incomplete' : 'complete';
            }
        });
    }
    function tododelete(index: number) {

        todo.value.splice(index, 1);
    }

    function addtodo(item: any) {

        const todoID: any = []
        todo.value.forEach((element: any) => {
            todoID.push(element.id)
        });

        const id: number = Math.max(...todoID) + 1;

        todo.value.unshift({
            'id': id,
            'title': item.value,
            'priority': "Pending",
            'date': "16 Jan",
            'badgeClass': "badge-light-danger",
            'delete': false,
            'status': 'incomplete'
        })
    }

    return {
        todo,
        taskcomplete,
        tododelete,
        addtodo
    }
})
