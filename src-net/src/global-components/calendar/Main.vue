<template>
  <div ref="calendarRef" class="full-calendar"></div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { Calendar } from "@fullcalendar/core";

export default defineComponent({
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const calendarRef = ref();
    const init = () => {
      let calendar = new Calendar(calendarRef.value, props.options);

      calendar.render();
    };

    onMounted(() => {
      init();
    });

    return {
      calendarRef
    };
  }
});
</script>
