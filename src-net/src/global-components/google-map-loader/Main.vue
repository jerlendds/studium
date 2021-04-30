<template>
  <div ref="mapRef"></div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { initializeMap } from "./index";

export default defineComponent({
  props: {
    init: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const mapRef = ref();
    onMounted(() => {
      props.init(mapConfig => {
        return initializeMap(mapRef.value, mapConfig);
      });
    });

    return {
      mapRef
    };
  }
});
</script>
