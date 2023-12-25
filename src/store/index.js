import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos:[]
  },
  
  getters: {
    displayedTodos: state => state.todos
  },

  actions: {
    async getTodos({commit}){
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      
      commit('setTodos', response.data)
    },
    
    async addTodo({commit}, title){
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, 
        completed: false})
  
        commit('createTodo', response.data)
      }
      catch(err){
        console.log(err)
      }
      
    },

    async removeTodo({commit}, id){
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) // this will remove from back-end

      commit('deleteTodo', id)
    }
  },

  mutations: {
    setTodos: (state, todos) => (state.todos = todos),

    createTodo: (state, todo) => (state.todos.unshift(todo)),

    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id) // this will remove from UI

  }
})





