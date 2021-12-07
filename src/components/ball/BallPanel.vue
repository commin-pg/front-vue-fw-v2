<template >
  <div>
    <BallInput @insertBall="insertBall" />
    <Ball v-bind:balls="filteredList" @onDeleteBall="deleteBall" />
    <BallFilter
      v-bind:filteredType="filteredType"
      @onUpdateFilter="updateFilter"
    />
  </div>
</template>
<script>
import Ball from "./Ball.vue";
import BallInput from "./BallInput.vue";
import BallFilter from "./BallFilter.vue";

export default {
  components: { Ball, BallInput, BallFilter },
  data() {
    return {
      balls: [
        // { name: "김형민", num: 1, id: new Date().getTime(), isDel: false },
        // { name: "이효리", num: 2, id: new Date() + 1, isDel: false },
      ],
      filteredType: "NAME_DESC",
    };
  },
  methods: {
    insertBall(name) {
      //   sortedList = this.balls.sort((a, b) => a.num - b.num).lastIndexOf();

      //   const nextNum = sortedList;
      const nextNum = this.balls.length + 1;
      //   console.log(nextNum);
      this.balls = [
        ...this.balls,
        {
          id: new Date().getTime(),
          name,
          num: nextNum,
          isDel: false,
        },
      ];
    },
    deleteBall(id) {
      this.balls = this.balls.filter((b) => b.id !== id);
    },
    updateFilter(filter) {
      // console.log(this.filteredType, filter);
      this.filteredType = filter;
    },
  },
  computed: {
    filteredList() {
      if (this.filteredType === "NAME_ASC") {
        this.balls.sort((a, b) => {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        });
        return this.balls;
      } else if (this.filteredType === "NAME_DESC") {
        this.balls.sort((a, b) => {
          if (a.name < b.name) return 1;
          else if (a.name > b.name) return -1;
          return 0;
        });
      }

      return this.balls;
    },
  },
};
</script>
<style >
</style>