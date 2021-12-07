<template >
  <div>
    <sapn
      class="filter-li"
      v-for="(filter, idx) in filters"
      :key="idx"
      @click="handleFilter(filter)"
    >
      <a
        href="javascript:;"
        :class="{ selected: storefilterType === filter }"
        >{{ filter }}</a
      >
    </sapn>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

const ballStore = "ballStore";
export default {
  data() {
    return {
      filters: ["NAME_DESC", "NAME_ASC"],
    };
  },
  computed: {
    ...mapGetters(ballStore, {
      storefilterType: "GET_FILTER_TYPE",
    }),
  },
  methods: {
    ...mapActions(ballStore, {
      storeUpdateFilter: "AC_UPDATE_FILTER",
    }),
    handleFilter(filter) {
      this.storeUpdateFilter(filter);
    },
  },
};
</script>
<style >
a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
</style>