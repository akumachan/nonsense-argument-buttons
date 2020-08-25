<template>
  <button id="nonsense" @click="cry">{{ name }}</button>
</template>

<script>
import store from '../store'
export default {
  name: 'NonsenseButton',
  props: {
    name: String,
    complaint: String
  },
  methods: {
    cry () {
      const current = store.state.message
      store.dispatch('doUpdate', `${current} ${this.complaint}`)
    }
  }
}
</script>

<style scoped>
</style>
