<template>
  <div ref="draggableRef">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { Draggable } from "@fullcalendar/interaction";

export default defineComponent({
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const draggableRef = ref();
    const init = () => {
      new Draggable(draggableRef.value, props.options);
    };

    onMounted(() => {
      init();
    });

    return {
      draggableRef
    };
  }
});
</script>
