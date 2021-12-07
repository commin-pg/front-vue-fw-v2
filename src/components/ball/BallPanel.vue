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
      ],
      filteredType: "NAME_DESC",
    };
  },
  methods: {
    insertBall(name) {
      const nextNum = this.balls.length + 1;
      if (name.indexOf(",") > -1) {
        const strarr = name.split(",");

        for (var i = 0; i < strarr.length; i++) {
          const n = strarr[i];
          if (n === "") continue;

          this.balls = [
            ...this.balls,
            {
              id: new Date().getTime() + i,
              name: n,
              num: nextNum,
              isDel: false,
            },
          ];
        }
      } else {
        this.balls = [
          ...this.balls,
          {
            id: new Date().getTime(),
            name,
            num: nextNum,
            isDel: false,
          },
        ];
      }
    },
    deleteBall(id) {
      this.balls = this.balls.filter((b) => b.id !== id);
    },
    updateFilter(filter) {
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