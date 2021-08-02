<template>
  <div class="main-progress-bar">
    <progress-circles></progress-circles>
    <progress-btns></progress-btns>
  </div>
</template>
<script>
import ProgressBtns from "../common/ProgressBtns.vue";
import ProgressCircles from "../common/ProgressCircles.vue";
export default {
  components: { ProgressCircles, ProgressBtns },
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.main-progress-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
