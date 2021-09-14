<template>
  <app-reg-form :countries="countriesList"></app-reg-form>
</template>

<script>
import AppRegForm from './components/AppRegForm.vue'
import countries from './data/countries.js'

export default {
  data () {
    return {
      countriesList: countries
    }
  },

  components: {
    'app-reg-form': AppRegForm
  },
  created () {
    document.title = 'BestRest site'
  }
}
</script>

<style>
</style>
