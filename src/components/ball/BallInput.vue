<template >
  <div>
    <input
      class="ball-input"
      autofocus
      autocomplete="off"
      placeholder="이름"
      v-model="name"
      @keypress="handleBall"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
const ballStore = "ballStore";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(ballStore, {
      storeAddBall: "AC_ADD_BALL",
    }),
    handleBall({ keyCode }) {
      const { name } = this;
      //   console.log("handleBall", name);
      if (keyCode === 13 && name !== "") {
        // this.$emit("insertBall", name);
        this.storeAddBall(name);
        this.name = "";
      }
    },
  },
};
</script>
<style >
</style>