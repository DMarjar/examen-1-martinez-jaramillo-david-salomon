<template>
  <div>
    <b-form @submit.prevent="validateForm" novalidate>
      <b-alert variant="danger" :show="errors.length > 0">
        <b>
          {{
            errors.length > 1
                ? "Por favor, corrija los siguientes errores:"
                : "Por favor, corrija el siguiente  error:"
          }}
        </b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </b-alert>
      <b-form-group id="input-group-1" label="Marca" label-for="brand">
        <b-form-input
            id="brand"
            v-model="brand"
            type="text"
            required
            placeholder="Marca del vehiculo"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Modelo" label-for="model">
        <b-form-input
            id="model"
            v-model="model"
            type="text"
            required
            placeholder="Modelo del vehiculo"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Año de fabricación" label-for="year">
        <b-form-input
            id="year"
            v-model="year"
            type="number"
            required
            placeholder="Año del vehiculo"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Número de serie" label-for="serie">
        <small>El número de serie se debe ver de la siguiente manera donde las X son letras y los 0 números:
          XXXX000-00XX</small>
        <b-form-input
            id="serie"
            v-model="serie"
            type="text"
            required
            placeholder="Número de serie del vehiculo"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Form',
  data() {
    return {
      // Validation
      errors: [],
      // Vehicle
      brand: '',
      model: '',
      year: null,
      serie: '',
    };
  },
  methods: {
    validateForm(event) {
      this.errors = [];

      if (!this.brand) {
        this.errors.push('La marca es requerida');
      } else if (!this.validateRegex(this.brand, /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑüÜ]+$/)) {
        this.errors.push('La marca no puede contener caracteres especiales');
      }

      if (!this.model) {
        this.errors.push('El modelo es requerido');
      } else if (!this.validateRegex(this.model, /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑüÜ]+$/)) {
        this.errors.push('El modelo no puede contener caracteres especiales');
      }

      if (!this.year) {
        this.errors.push('El año es requerido');
      } else if (this.year > new Date().getFullYear()) {
        this.errors.push('El año no puede ser mayor al año actual');
      }

      if (!this.serie) {
        this.errors.push('El número de serie es requerido');
      } else if (!this.validateRegex(this.serie, /^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/)) {
        this.errors.push('El número de serie no cumple con el formato requerido');
      }

      if (!this.errors.length) {
        alert('Formulario correcto');
      } else {
        event.preventDefault();
      }


    },

    validateRegex(value, regex) {
      return regex.test(value);
    },
  },
});

</script>

<style scoped>

</style>