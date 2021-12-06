<template>
  <div>
    <button @click="subCounter">-</button> // vuex 의 action 을 일으킵니다
    <button @click="addCounter">+</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addCounter", "subCounter"]),
  },
};
</script>

<style>
</style>