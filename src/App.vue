<template>
  <div>
    <!-- <router-view /> -->
    <div v-for="(user, idx) in storeUserList" :key="idx">
      {{ user.name }}
      {{ user.age }}
      <ul>
        <li v-for="(hab, index) in user.habbit" :key="index">
          {{ hab }}
        </li>
      </ul>
    </div>
    <button @click="handleAddUser()">생성</button>
    <button @click="handleDelUser(32)">삭제</button>
  </div>
</template>

<script>
import "./assets/css/main.css";
import { mapGetters, mapActions } from "vuex";

const appStore = "appStore";
export default {
  computed: {
    ...mapGetters(appStore, {
      storeUserList: "GET_USER_LIST",
    }),
  },
  components: {},
  methods: {
    ...mapActions(appStore, {
      storeAddUser: "AC_ADD_USER",
      storeDelUser: "AC_DEL_USER",
    }),
    handleAddUser() {
      this.storeAddUser({
        name: "kim2",
        age: 33,
        habbit: ["baseball2", "golf2"],
      });
    },
    handleDelUser(age) {
      this.storeDelUser(age);
    },
  },
};
</script>

<style>
</style>
