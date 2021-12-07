<template >
  <div>
    <ul>
      <li v-for="(ball, idx) in storeBallList" :key="ball.id">
        <span>{{ idx + 1 }} - {{ ball.name }}</span>
        <button @click="handleDeleteBall(ball.id)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

const ballStore = "ballStore";
export default {
  computed: {
    ...mapGetters(ballStore, {
      storeBallList: "GET_SORTED_BALL_LIST",
    }),
  },
  methods: {
    ...mapActions(ballStore, {
      storeDelBall: "AC_DEL_BALL",
    }),
    handleDeleteBall(id) {
      this.storeDelBall(id);
    },
  },
};
</script>
<style >
</style>