<template>
  <v-card tile class="mb-2">
    <v-row>
      <v-col :cols="8" :xl="10" :lg="10" :md="10" :sm="10">
        <v-card-title class="non-break" title="Group name">{{ group.name }}</v-card-title>
      </v-col>
      <v-col :cols="4" :xl="2" :lg="2" :md="2" :sm="2" align="center" justify="center">
        <v-card-title>
          <v-icon class="center" large title="Add" @click="add(group)">mdi-plus</v-icon>
          <v-icon class="center" large title="Delete group" color="error" @click="remove(group)">mdi-delete</v-icon>
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: "Group",
  props: ["group"],
  methods: {
    ...mapMutations(["addGroupToCurrentTasks", "removeGroup"]),
    remove(group) {
      this.removeGroup(group)
    },
    add(group) {
      this.addGroupToCurrentTasks(group);
      this.$router.push("/");
    }
  }
}
</script>
