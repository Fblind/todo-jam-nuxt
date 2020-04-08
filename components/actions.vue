<template>
  <v-row>
    <v-col :cols="12" align="end">
      <span class="subtitle" @click="resetAll">Reset all</span>
      <span class="subtitle" @click="addGroupToCurrentTasks">Add last list</span>
      <span class="subtitle" @click="saveCurrentGroup">Save current list</span>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Actions",
  methods: {
    ...mapMutations(["resetAll", "saveCurrentGroup", "addGroupToCurrentTasks"]),
  }
}
</script>

<style>

</style>
