<template>
  <v-card tile class="mb-2" :class="task.completed ? 'done' : 'not-done'">
    <v-row>
      <v-col :cols="10">
        <v-card-title v-if="!editing" title="Double click to edit" :class="task.completed ? 'line-through' : ''" @dblclick="editTask(task)">{{ task.title }}</v-card-title>
        <v-card-title v-if="editing">
          <v-text-field :value="task.title"
            @blur="doneEdit"
            @keyup.enter="doneEdit"
            @keyup.esc="cancelEdit"></v-text-field>
        </v-card-title>
      </v-col>
      <v-col :cols="2" :align="'center'" :justify="'center'">
        <v-card-title>
          <v-icon v-if="!task.completed" large color="success" title="Mark task as completed" @click="setCompleted(task)">mdi-check</v-icon>
          <v-icon v-if="task.completed" large color="error" title="Delete task" @click="remove(task)">mdi-delete</v-icon>
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  name: "Task",
  props: ["task"],
  data() {
    return {
      editing: this.task.title === "" || false,
    }
  },
  methods: {
    ...mapMutations(["setCompleted", "remove", "setTitle"]),
    editTask(task) {
      this.editing = true;
    },
    cancelEdit() {
      this.editing = false;
    },
    doneEdit(e) {
      if (e.target && e.target.value) {
        const newTitle = e.target.value;
        this.setTitle({ title: newTitle, task: this.task });
      }
      this.cancelEdit();

    }
  }
}
</script>

<style>
.not-done {
  border-left: 3px solid grey !important;
}

.done {
  border-left: 3px solid green !important;
}

.line-through {
  text-decoration-line: line-through;
}
</style>
