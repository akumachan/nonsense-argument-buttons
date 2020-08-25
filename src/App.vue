<template>
  <div id="app">
    <div id="message">{{ message }}</div>
    <NonsenseButton name="吾郎" complaint="吉野家が至高だ！" />
    <NonsenseButton name="慎吾" complaint="すき家が最強に決まってる！" />
    <NonsenseButton name="剛" complaint="松屋が究極だろーが！" />
  </div>
</template>

<script>
import store from './store.js'
import NonsenseButton from './components/NonsenseButton'

export default {
  name: 'App',
  components: {
    NonsenseButton
  },
  computed: {
    message () {
      return store.getters.message
    }
  }
}
</script>

<style>
</style>
