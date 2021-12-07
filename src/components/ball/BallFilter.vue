<template >
  <div>
    <sapn
      class="filter-li"
      v-for="(filter, idx) in filters"
      :key="idx"
      @click="handleFilter(filter)"
    >
      <a href="javascript:;" :class="{ selected: filterType === filter }">{{
        filter
      }}</a>
    </sapn>
  </div>
</template>
<script>
export default {
  props: {
    filterType: { Type: String, default: "NAME_DESC" },
  },
  data() {
    return {
      filters: ["NAME_DESC", "NAME_ASC"],
    };
  },
  methods: {
    handleFilter(filter) {
      this.$emit("onUpdateFilter", filter);
    },
  },
};
</script>
<style >
a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
</style>