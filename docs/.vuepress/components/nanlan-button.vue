<template>
  <p class="demo">
    {{ msg }}
    <nl-button></nl-button>
  </p>
</template>

<script>
import btn from "@/components/button/src/button";
export default {
  data() {
    return {
      msg: "Hello this is <demo-component>",
    };
  },
  components: {
    "nl-button": btn,
  },
};
</script>
<style lang="scss">
@import "../../../src/components/theme-chalk/index.scss";
</style>
