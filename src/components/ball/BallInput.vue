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
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleBall({ keyCode }) {
      const { name } = this;
      //   console.log("handleBall", name);
      if (keyCode === 13 && name !== "") {
        this.$emit("insertBall", name);
        this.name = "";
      }
    },
  },
};
</script>
<style >
</style>