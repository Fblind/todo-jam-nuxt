<template>
  <v-container>
    <group v-for="group of groups" :key="group.id" :group="group" />
  </v-container>
</template>

<script>
import {mapState} from "vuex";
import Group from "../components/group";

export default {
  name: "Groups",
  components: {Group},
  computed: {
    ...mapState(["groups"]),
  }
}
</script>
