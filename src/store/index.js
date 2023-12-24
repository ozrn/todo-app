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
      
    }
  },

  mutations: {
    setTodos: (state, todos) => (state.todos = todos),

    createTodo: (state, todo) => (state.todos.unshift(todo))

  }
})





