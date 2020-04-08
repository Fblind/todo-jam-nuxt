<template>
  <v-container>
    <task v-for="task of tasks" :key="task.id" :task="task" />
    <div class="text-center">
      <v-btn class="mx-2" fab color="primary" @click="newTask" :disabled="this.lastTask && this.lastTask.title === ''">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Task from "../components/task";
import uuid from "uuid-random";
import {mapState, mapMutations} from "vuex";

export default {
  name: "Index",
  components: {
    Task
  },
  computed: {
    ...mapState(["tasks"]),
    lastTask() {
      const lastTask = this.tasks[this.tasks.length - 1];
      return lastTask;
    }
  },
  methods: {
    ...mapMutations(["addTask"]),
    newTask() {
      if (this.tasks.length && this.lastTask && this.lastTask.title !== "" || this.tasks.length === 0) {
        this.addTask({ title: '', completed: false, id: uuid() });
      }
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
