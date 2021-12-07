<template >
  <div>
    <ul>
      <li v-for="(ball, idx) in balls" :key="ball.id">
        <span>{{ idx + 1 }} - {{ ball.name }}</span>
        <button @click="handleDeleteBall(ball.id)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    balls: { type: Array, default: () => [] },
  },
  methods: {
    // onDeleteBall
    handleDeleteBall(id) {
      this.$emit("onDeleteBall", id);
    },
  },
};
</script>
<style >
</style>