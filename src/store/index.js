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
    }
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos)

  }
})



