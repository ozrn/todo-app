<template>
   <div>
    <h2>List of Todos</h2>
    <div class="todos">
      <div v-for="todo in displayedTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i @click="removeTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
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
    ...mapActions(['getTodos', 'removeTodo'])
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

i {
  position: absolute;
  bottom: 6px;
  right: 6px;
  color: aliceblue;
  cursor: pointer;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>


