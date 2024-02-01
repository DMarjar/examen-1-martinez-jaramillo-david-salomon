<script setup>

</script>

<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Input label" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="inputValue"
          type="text"
          required
          placeholder="Enter something..."
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<style scoped>

</style>