<template>
  <div>
    <h1>Home</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button @click="goToRoute('/vehicles')">Ir a los vehiculos</b-button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      items: [
        { text: 'Home', active: true },
      ]
    }
  },

  methods: {
    goToRoute(route) {
      this.$router.push(route)
    }
  }
})

</script>

<style scoped>

</style>