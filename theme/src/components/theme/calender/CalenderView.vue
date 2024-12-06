<template>
    <div class="col-xxl-3 box-col-12">
        <div class="md-sidebar mb-3"><a class="btn btn-primary md-sidebar-toggle" @click="collapseFilter()"
                href="javascript:void(0)">calendar
                filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div id="external-events">
                    <h4>Draggable Events</h4>
                    <div id="external-events-list">
                        <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event draggableButton">
                            <div class="fc-event-main"> <i class="fa-solid fa-birthday-cake me-2"></i>Birthday Party</div>
                        </div>
                        <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event draggableButton">
                            <div class="fc-event-main"> <i class="fa-solid fa-user me-2"></i>Meeting With Team.</div>
                        </div>
                        <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event draggableButton">
                            <div class="fc-event-main"> <i class="fa-solid fa-plane me-2"></i>Tour & Picnic</div>
                        </div>
                        <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event draggableButton">
                            <div class="fc-event-main"> <i class="fa-solid fa-file-text me-2"></i>Reporting Schedule</div>
                        </div>
                        <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event draggableButton">
                            <div class="fc-event-main"> <i class="fa-solid fa-briefcase me-2"></i>Lunch & Break</div>
                        </div>
                    </div>
                    <p>
                        <input class="checkbox-primary" id="drop-remove" type="checkbox" />
                        <label for="drop-remove" class="ms-2">remove after drop</label>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-9 box-col-12">
        <div class="calendar-default" id="calendar-container">
            <div id="calendar">
                <FullCalendar id="calendar" :options="calendarOptions" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import { INITIAL_EVENTS, createEventId } from "@/core/data/calendardata";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
let filtered = ref<boolean>(false)
const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    initialView: "dayGridMonth",
    initialEvents: INITIAL_EVENTS,
    editable: true, selectable: true,
    selectMirror: true, dayMaxEvents: true, weekends: true,
    select: handleDateSelect, eventClick: handleEventClick,
    droppable: true,
    drop: HandleDrop,
    headerToolbar: {
        left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
}
function HandleDrop(selectInfo: any) {
    let title = selectInfo.draggedEl.outerText
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (title) {
        calendarApi.addEvent({
            id: createEventId(),
            title, start: selectInfo.date, allDay: true
        })
    }
}
function handleDateSelect(selectInfo: any) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (title) {
        calendarApi.addEvent({
            id: createEventId(),
            title, start: selectInfo.startStr, end: selectInfo.endStr, allDay: selectInfo.allDay,
        })
    }
}
function handleEventClick(clickInfo: any) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
    }
}
function collapseFilter() {
    filtered.value = !filtered.value;
}
onMounted(() => {
    let buttons = document.getElementsByClassName('draggableButton')
    for (var i = 0; i < buttons.length; i++) {
        new Draggable(buttons[i]);
    }
})
</script>