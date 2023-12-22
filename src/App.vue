<template>
  <div class="container">
    <TodosList />
  </div>
</template>

<script>

import TodosList from './components/TodosList.vue'

export default {
  name: 'App',
  components: {
    TodosList
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #f1f3dc;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
