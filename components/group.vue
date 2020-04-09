<template>
  <v-card tile class="mb-2">
    <v-row>
      <v-col :cols="8">
        <v-card-title class="non-break" title="Group name">{{ group.name }}</v-card-title>
      </v-col>
      <v-col :cols="4" :align="'center'" :justify="'center'">
        <v-card-title></v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Group",
  props: ["group"],
}
</script>
