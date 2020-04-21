<template>
  <v-app>
    <v-img :src="'/hero/' + imageName" alt="landscape" class="height-30">
      <v-container class="height-100">
        <v-row class="height-100">
          <v-col cols="12">
            <v-row class="height-100 white-text" align="end">
              <v-col cols="12">
                <h1 class="mb-0 pb-0 display-2">{{ today.number }} {{ today.month }}</h1>
                <h1 class="display-headline">{{ today.day }}</h1>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-content>
      <v-container>
        <router />
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Router from "../components/router";
export default {
  components: {Router},
  data () {
    return {
      today: this.formatDate(new Date()),
      imageName: this.getImageName()
    }
  },
  methods: {
    formatDate(date) {
      const days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
      };

      const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      };

      return {
        number: date.getDate(),
        month: months[date.getMonth()],
        day: days[date.getDay()],
      }
    },
    getImageName () {
      const imageNro = Math.floor(Math.random() * 11) + 1;
      return `${imageNro}.jpg`
    }
  }
}
</script>
<style>
.height-100 {
  height: 100%;
}
.height-30 {
  height: 30vh !important;
}

.white-text {
  color: white;
}
</style>
