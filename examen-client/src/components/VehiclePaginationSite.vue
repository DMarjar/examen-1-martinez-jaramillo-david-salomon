<template>
  <div>
    <b-container class="mt-5">
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

        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import vehicleService from "../services/Vehicle";

export default Vue.extend({
  name: "VehiclePaginationSite",
  data() {
    return {
      filter: null,
      sortBy: "model",
      sortDesc: false,
      perPage: 5,
      currentPage: 1,
      rows: 0,
      vehicles: [],
      fields: [
        { key: "model", label: "Modelo", sortable: true },
        { key: "brand", label: "Marca", sortable: true },
        { key: "year", label: "Año", sortable: true },
        { key: "serie", label: "Número de serie", sortable: true },
      ],
    };
  },

  methods: {
    async getVehicles() {
      try {
        const response = await vehicleService.getVehiclesPaginated(
            parseInt(this.currentPage),
            parseInt(this.perPage),
            this.sortBy
        );
        this.vehicles = response.data;
        this.rows = this.vehicles.length;
      } catch (error) {
        console.error(error);
      }
    },

    onFiltered(filteredItems) {
      this.rows = filteredItems.length;
    },
  },

  mounted() {
    this.getVehicles();
  },
});

</script>

<style scoped>

</style>