<template>
  <v-container>
    <actions />
    <task v-for="task of tasks" :key="task.id" :task="task" />
    <div class="text-center">
      <v-btn class="mx-2" fab color="primary" @click="addTask({title: '', completed: false, id: uuid()})">
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
  data() {
    return {
      uuid
    }
  },
  components: {
    Task
  },
  computed: {
    ...mapState(["tasks"])
  },
  methods: {
    ...mapMutations(["addTask"])
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
