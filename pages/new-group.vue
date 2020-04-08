<template>
  <v-container>
    Add new group flow
    {{ groups }}
  </v-container>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "NewGroup",
  computed: {
    ...mapState(["groups"]),
  }
}
</script>
