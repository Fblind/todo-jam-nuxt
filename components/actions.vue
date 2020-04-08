<template>
  <v-row>
    <v-col :cols="12" align="end">
      <span class="subtitle" @click="resetAll">Reset all</span>
      <span class="subtitle">Add group</span>
      <span class="subtitle">Save current list</span>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Actions",
  methods: {
    ...mapMutations(["resetAll"])
  }
}
</script>

<style>

</style>
