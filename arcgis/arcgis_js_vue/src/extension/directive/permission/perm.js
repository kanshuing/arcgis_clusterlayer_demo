/** 权限指令*/
/** ./本目录*/
/** @/代表src/*/
import hasPerm from "./hasPerm";

export default {
  bind: function(el, binding) {
    if (el && binding.value) {
      if (!hasPerm(binding.value)) {
        el.parentNode.removeChild(el);
      }
    }
  }
};
