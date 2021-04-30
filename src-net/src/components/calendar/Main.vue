<template>
  <FullCalendar :options="options" />
</template>

<script>
import { defineComponent } from "vue";
import "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

export default defineComponent({
  setup() {
    const options = {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
      droppable: true,
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      },
      initialDate: "2021-01-12",
      navLinks: true,
      editable: true,
      dayMaxEvents: true,
      events: [
        {
          title: "Vue Vixens Day",
          start: "2021-01-05",
          end: "2021-01-08"
        },
        {
          title: "VueConfUS",
          start: "2021-01-11",
          end: "2021-01-15"
        },
        {
          title: "VueJS Amsterdam",
          start: "2021-01-17",
          end: "2021-01-21"
        },
        {
          title: "Vue Fes Japan 2019",
          start: "2021-01-21",
          end: "2021-01-24"
        },
        {
          title: "Laracon 2021",
          start: "2021-01-24",
          end: "2021-01-27"
        }
      ],
      drop: function(info) {
        if (
          cash("#checkbox-events").length &&
          cash("#checkbox-events")[0].checked
        ) {
          cash(info.draggedEl)
            .parent()
            .remove();

          if (cash("#calendar-events").children().length == 1) {
            cash("#calendar-no-events").removeClass("hidden");
          }
        }
      }
    };

    return {
      options
    };
  }
});
</script>
