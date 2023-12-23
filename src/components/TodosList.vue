<template>
   <div>
    <h2>TODOS</h2>
    <div class="todos">
      <div v-for="todo in displayedTodos" :key="todo.id" class="todo">{{ todo.title }}</div>
    
    </div>
   </div>  
   
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'TodosList',
  
  computed: {
    ...mapGetters(['displayedTodos'])
},
  methods: {
    ...mapActions(['getTodos'])
  },
  created(){
    this.getTodos()
  }
}

</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #dbe27c;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>


