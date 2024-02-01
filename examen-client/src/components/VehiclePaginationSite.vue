<template>
  <div>
    <h1>Vehiculos</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button class="mb-2" @click="goToRoute('/vehicles/form')">Agregar nuevo</b-button>
    <b-input placeholder="Buscar" v-model="filter"></b-input>
    <b-table
        id="vehicle-table"
        :items="vehicles"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        label-sort-asc=""
        label-sort-desc=""
        small
        :filter="filter"
        @filtered="onFiltered"
    >
    </b-table>
    <div class="overflow-auto">
      <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Página actual: {{ currentPage }}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vehicleService from "../services/Vehicle";

export default Vue.extend({
  name: "VehiclePaginationSite",
  data() {
    return {
      items: [
        {text: "Home", active: false, href: "/"},
        {text: "Vehiculos", active: true},
      ],

      filter: null,
      sortBy: "model",
      sortDesc: false,
      perPage: 5,
      currentPage: 1,
      rows: 0,
      vehicles: [],
      fields: [
        {key: "model", label: "Modelo", sortable: true},
        {key: "brand", label: "Marca", sortable: true},
        {key: "year", label: "Año", sortable: true},
        {key: "serie", label: "Número de serie", sortable: true},
      ],
    };
  },

  methods: {
    async getVehicles() {
      try {
        const data = await vehicleService.getVehiclesPaginated(
            parseInt(this.currentPage) - 1,
            parseInt(this.perPage),
            this.sortBy
        );
        this.vehicles = data.content;
        this.rows = this.vehicles.length;
      } catch (error) {
        console.error(error);
      }
    },

    onFiltered(filteredItems) {
      this.rows = filteredItems.length;
    },

    goToRoute(route) {
      this.$router.push(route);
    },
  },

  mounted() {
    this.getVehicles();
  },
});

</script>

<style scoped>

</style>