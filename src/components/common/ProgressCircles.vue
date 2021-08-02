<template>
  <div class="progress-circles">
    <!-- 裝飾 -->
    <div
      class="progress"
      id="progress"
      :style="{ width: setWidth + '%' }"
    ></div>
    <progress-circle
      v-for="item in circlesContent"
      :key="item"
      :class="{ active: item <= $store.state.step }"
    >
      <template v-slot:step>{{ item }}</template>
    </progress-circle>
  </div>
</template>
<script>
import ProgressCircle from "./ProgressCircle.vue";
export default {
  components: { ProgressCircle },
  name: "",
  data() {
    return {
      currentIdx: 1,
      circlesContent: [1, 2, 3, 4],
      bgWidthSize: 33.33,
    };
  },
  computed: {
    setWidth() {
      if (this.$store.state.step == 1) {
        return 0;
      } else if (this.$store.state.step == 2) {
        return 33.33;
      } else if (this.$store.state.step == 3) {
        return 66.66;
      } else {
        return 99.99;
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/all.scss";
.progress-circles {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
  position: relative;

  //not active background
  &::before {
    content: "";
    background-color: $progressBg;
    width: 100%;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
    z-index: -1;
  }

  //active blue line
  .progress {
    background-color: $active;
    width: 100%;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 0;
    z-index: -1;
    transition: 0.3s ease;
  }
}
</style>
