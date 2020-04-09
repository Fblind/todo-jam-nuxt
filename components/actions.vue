<template>
  <v-row>
    <v-col :cols="12" align="end">
      <v-icon title="Delete all tasks" @click="resetAll">mdi-delete</v-icon>
      <v-icon title="Add new group" @click="addGroupToCurrentTasks">post_add</v-icon>
      <v-icon title="Save current list" @click="addGroupName" :disabled="!tasks || tasks.length === 0">save</v-icon>
    </v-col>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Group name</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field v-model="groupName" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text :disabled="groupName === ''" @click="saveNewGroup">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import uuid from "uuid-random";

export default {
  name: "Actions",
  data() {
    return {
      dialog: false,
      groupName: "",
    }
  },
  computed: {
    ...mapState(["tasks"])
  },
  methods: {
    ...mapMutations(["resetAll", "saveCurrentGroup", "addGroupToCurrentTasks"]),
    addGroupName() {
      this.dialog = true;
    },
    saveNewGroup() {
      this.saveCurrentGroup({name: this.groupName, id: uuid()});
      this.dialog = false;
      this.groupName = "";
    }
  }
}
</script>

<style>

</style>
