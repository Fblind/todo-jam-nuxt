<template>
  <v-card tile class="mb-2" :class="task.completed ? 'done' : 'not-done'">
    <v-row>
      <v-col :cols="editing ? 12 : 8" :xl="editing ? 12 : 10" :lg="editing ? 12 : 10" :md="editing ? 12 : 10" :sm="editing ? 12 : 10">
        <v-card-title v-if="!editing" class="non-break" title="Double click to edit" :class="task.completed ? 'line-through' : ''" @click="editTask(task)">{{ task.title }}</v-card-title>
        <v-card-title v-if="editing">
          <v-text-field :value="task.title"
            ref="editText"
            @blur="doneEdit"
            @keyup.enter="doneEdit"
            @keyup.esc="cancelEdit"></v-text-field>
        </v-card-title>
      </v-col>
      <v-col v-if="!editing" :cols="4" :xl="2" :lg="2" :md="2" :sm="2" :align="'center'" :justify="'center'">
        <v-card-title>
          <v-icon
            v-if="!task.completed"
            class="center"
            large
            color="success"
            title="Mark task as completed"
            @click="setCompleted(task)"
          >
            mdi-check
          </v-icon>
          <v-icon v-if="task.completed" class="center" large title="Undo" @click="undoCompleted(task)">mdi-replay</v-icon>
          <v-icon v-if="task.completed" class="center" large color="error" title="Delete task" @click="remove(task)">mdi-delete</v-icon>
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
  mounted() {
    if (this.editing) {
      this.$nextTick(() => { this.$refs.editText.focus() })
    }
  },
  methods: {
    ...mapMutations(["setCompleted", "remove", "setTitle", "undoCompleted"]),
    editTask(task) {
      this.editing = true;
      this.$nextTick(() => {this.$refs.editText.focus()})
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

.center {
  margin: 0 auto;
}

.non-break {
  word-break: break-word;
}
</style>
