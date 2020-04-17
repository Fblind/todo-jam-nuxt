<template>
  <div class="empty-hero text-center">
    <h2>You're in balance</h2>
    <img src="~/assets/MeditatingDoodle.svg" class="empty-img-hero">
    <v-row class="text-center">
      <v-col>
        <v-btn color="primary" @click="addTask({ title: '', completed: false, id: uuid() });">Add new task</v-btn>
        <template v-if="groups.length !== 0">
          <span>&nbsp&nbsp or &nbsp&nbsp</span>
          <v-btn color="primary" @click="$router.push('groups')">Add new group</v-btn>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import uuid from "uuid-random";
import {mapState, mapMutations} from "vuex";
export default {
  name: "EmptyTask",
  data() {
    return {
      uuid
    }
  },
  computed: {...mapState(["groups"])},
  methods: {
    ...mapMutations(["addTask"]),
  }
}
</script>

<style>
.empty-hero {
  height: 40vh;
}
.empty-img-hero {
  height: 100%;
}
</style>
