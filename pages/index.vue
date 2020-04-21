<template>
  <v-container>
    <empty-task v-if="!tasks || tasks.length === 0" />
    <template v-else>
      <actions />
      <v-row>
        <v-col align="center">
          <v-btn fab small color="green" v-on="on">
            <v-icon title="Add new task" @click="newTask" :disabled="lastTask && lastTask.title === ''" color="white">mdi-plus</v-icon>
          </v-btn>
          <v-btn fab small color="red" v-on="on">
            <v-icon title="Delete all tasks" @click="resetAll" color="white">mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <task v-for="task of tasksByOrderByCompleted" :key="task.id" :task="task" />
    </template>
  </v-container>
</template>

<script>
import Actions from "../components/actions";
import Task from "../components/task";
import EmptyTask from "../components/emptyTasks";
import uuid from "uuid-random";
import {mapState, mapMutations} from "vuex";

function uncompletedFirst(task, otherTask) {
  if (task.title === "" || otherTask.title === "") {
    return -1;
  }
  if (!task.completed && otherTask.completed) {
    return -1;
  }
  if (task.completed && !otherTask.completed) {
    return 1;
  }
  return 0;
}

export default {
  name: "Index",
  data() {
    return {
      fab: false,
    }
  },
  components: {
    Task,
    Actions,
    EmptyTask
  },
  computed: {
    ...mapState(["tasks"]),
    lastTask() {
      const lastTask = this.tasks[this.tasks.length - 1];
      return lastTask;
    },
    tasksByOrderByCompleted() {
      const sortedTasks = [...this.tasks]
      return sortedTasks.sort(uncompletedFirst);
    }
  },
  methods: {
    ...mapMutations(["addTask", "resetAll"]),
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
