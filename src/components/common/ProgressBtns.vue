<template>
  <div class="progress-btns">
    <button
      v-for="item in btnContent"
      :key="item"
      class="btn"
      :id="item"
      @click="btnClick(item)"
      :disabled="checkDisabled(item)"
    >
      {{ item }}
    </button>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      btnContent: ["prev", "next"],
      prevDisabeled: false,
      nextDisabeled: true,
    };
  },
  methods: {
    btnClick(item) {
      if (item === this.btnContent[0]) {
        this.$store.commit("prevStep");
      }
      if (item === this.btnContent[1]) {
        this.$store.commit("nextStep");
      }
    },

    checkDisabled(item) {
      if (item == "prev" && this.$store.state.step == 1) {
        // console.log(this.$store.state.step);
        return true;
      }
      if (item == "next" && this.$store.state.step == 4) {
        // console.log(this.$store.state.step);
        return true;
      }
      // console.log(this.$store.state.step);
      return false;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/all.scss";

.btn {
  padding: 8px 30px;
  margin: 5px;
  background-color: $active;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.2rem;

  //按下
  &:active {
    transform: scale(0.98);
  }

  &[disabled] {
    background-color: $progressBg;
    cursor: not-allowed;
  }
}
</style>
