<template >
  <div>
    <BallInput />
    <BallFilter />
    <Ball />
  </div>
</template>
<script>
// import Ball from "./Ball.vue";
import Ball from "./Ball.vue";
import BallInput from "./BallInput.vue";
import BallFilter from "./BallFilter.vue";

export default {
  components: {
    Ball,
    BallInput,
    BallFilter,
  },
  methods: {},
};
</script>
<style >
</style>