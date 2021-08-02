<template>
  <div class="circle">
    <slot name="step"></slot>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/all.scss";
.circle {
  background-color: #fff;
  color: #999;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid $progressBg;
  transition: 0.3s ease;
}

.active {
  border-color: $active;
}
</style>
