<template>
  <v-tabs
    v-model="activeTab">
    <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
      {{ tab.displayName }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Router",
  data() {
    return {
      activeTab: this.$route.name,
      tabs: [
        { id: 1, displayName: "My Tasks", name: "index", route: `/` },
        { id: 2, displayName: "My Groups", name: "groups", route: `/groups` },
      ]
    }
  }
}
</script>

<style>

</style>
