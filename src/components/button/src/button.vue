<template>
  <button
    class="nl-button"
    :class="[
        type ? 'nl-button--' + type:'',
        buttonSize ? 'nl-button--' + buttonSize: '',
        {
             'is-disabled': buttonDisabled,
             'is-loading': loading,
             'is-plain': plain,
             'is-round': round,
        }
      ]"
  >
    <!-- loading图标 -->
    <i class="nl-icon-loading" v-if="loading"></i>
    
    <!-- 按钮图标-->
    <i :class="icon" v-if="icon && !loading"></i>

    <span v-if="$slots.default">
      <slot></slot>
    </span>
    
  </button>
</template>
<script>
export default {
  name: "nl-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean
  },
  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
  }
};
</script>
