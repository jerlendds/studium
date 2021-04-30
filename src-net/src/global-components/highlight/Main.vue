<template>
  <pre v-highlight>
    <slot></slot>
    <textarea v-model="copySource" class="fixed w-1 h-1"></textarea>
  </pre>
</template>

<script>
import { defineComponent } from "vue";
import { copySource } from "./index";
import jsBeautify from "js-beautify";
import hljs from "highlight.js";
import _ from "lodash";

export default defineComponent({
  directives: {
    highlight: {
      beforeMount(el) {
        let source = cash(el)
          .find("code")
          .find("textarea")
          .html();

        // Format for beautify
        source = _.replace(source, /&lt;/g, "<");
        source = _.replace(source, /&gt;/g, ">");

        // Beautify code
        source = jsBeautify.html(source);

        // Save for copy code function
        copySource.value = source;

        // Format for highlight.js
        source = _.replace(source, /</g, "&lt;");
        source = _.replace(source, />/g, "&gt;");

        cash(el)
          .find("code")
          .html(source);

        hljs.highlightBlock(cash(el).find("code")[0]);
      }
    }
  },
  setup() {
    return {
      copySource
    };
  }
});
</script>

<style scoped>
textarea {
  margin-left: 1000000px;
}
</style>
