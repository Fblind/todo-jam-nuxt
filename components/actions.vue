<template>
  <v-row>
    <v-speed-dial v-model="fab" bottom right fixed transition="slide-y-transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="primary" fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn fab small color="primary" v-on="on">
            <v-icon title="Add new group" :disabled="groups.length === 0" @click="$router.push('groups')">mdi-plus-box-multiple</v-icon>
          </v-btn>
        </template>
        <span>Add new group</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn fab small color="primary" v-on="on">
            <v-icon title="Save current list" @click="addGroupName" :disabled="!tasks || tasks.length === 0">mdi-content-save</v-icon>
          </v-btn>
        </template>
        <span>Save current list</span>
      </v-tooltip>
    </v-speed-dial>
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
      fab: false,
    }
  },
  computed: {
    ...mapState(["tasks", "groups"]),
    lastTask() {
      const lastTask = this.tasks[this.tasks.length - 1];
      return lastTask;
    },
  },
  methods: {
    ...mapMutations(["resetAll", "saveCurrentGroup", "addGroupToCurrentTasks", "addTask"]),
    addGroupName() {
      this.dialog = true;
    },
    saveNewGroup() {
      this.saveCurrentGroup({name: this.groupName, id: uuid()});
      this.dialog = false;
      this.groupName = "";
    },
    newTask() {
      if (this.tasks.length && this.lastTask && this.lastTask.title !== "" || this.tasks.length === 0) {
        this.addTask({ title: '', completed: false, id: uuid() });
      }
    }
  }
}
</script>

<style>

</style>
