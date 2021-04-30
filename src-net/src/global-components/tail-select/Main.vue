<template>
  <select v-select="{ props, emit }" class="select">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setValue, init, reInit } from "./index";

export default defineComponent({
  directives: {
    select: {
      mounted(el, { value }) {
        setValue(el, value.props);
        init(el, value.props, value.emit);
      },
      updated(el, { value }) {
        setValue(el, value.props);
        reInit(el, value.props);
      }
    }
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    modelValue: {
      type: [String, Number, Array],
      default: ""
    }
  },
  setup(props, context) {
    return {
      props,
      ...context
    };
  }
});
</script>
