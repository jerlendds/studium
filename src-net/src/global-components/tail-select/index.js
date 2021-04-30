import TailSelect from "tail.select";
import _ from "lodash";

const setValue = (el, props) => {
  if (props.modelValue.length) {
    cash(el).val(props.modelValue);
  }
};

const init = (el, props, emit) => {
  TailSelect(el, props.options).on("change", function(item) {
    if (cash(el).attr("multiple") !== undefined) {
      const values = !props.modelValue.includes(item.key)
        ? [...props.modelValue, item.key]
        : _.filter(props.modelValue, key => key !== item.key);
      emit("update:modelValue", values);
    } else {
      emit("update:modelValue", item.key);
    }
  });
};

const reInit = (el, props) => {
  TailSelect(el, props.options).reload();
};

export { setValue, init, reInit };
