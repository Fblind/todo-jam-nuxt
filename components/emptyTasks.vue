<template>
  <div class="empty-hero text-center">
    <h2>You're in balance</h2>
    <img src="~/assets/MeditatingDoodle.svg" class="empty-img-hero">
    <v-row class="text-center">
      <v-col>
        <v-btn v-bind="size" color="primary" @click="addTask({ title: '', completed: false, id: uuid() });">Add new task</v-btn>
        <template v-if="groups.length !== 0">
          <span> or </span>
          <v-btn v-bind="size" color="primary" @click="$router.push('groups')">Add new group</v-btn>
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
  computed: {
    ...mapState(["groups"]),
    size() {
      const size = { xs: 'x-small', sm: 'small', lg: 'large', xl: 'x-large' }[this.$vuetify.breakpoint.name];
      return size ? { [size]: true } : {};
    }
  },
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
