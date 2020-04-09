<template>
  <v-row>
    <v-col :cols="12" class="router-menu">
      <nuxt-link class="subtitle mr-4 router-link" :class="$route.name === 'index' ? 'current' : 'non-current'" to="/">My Tasks</nuxt-link>
      <nuxt-link class="subtitle mr-4 router-link" :class="$route.name === 'groups' ? 'current' : 'non-current'" to="/groups">My Groups</nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Router",
}
</script>

<style>
.router-link {
  padding-bottom: 1rem;
  text-decoration: none;
  color: black !important;
}

.current {
  border-bottom: 2px solid #1976d2;
}

.non-current {
  opacity: 0.5;
}

.router-menu {
  padding-top: 0;
  padding-bottom: 1rem;
}

</style>
