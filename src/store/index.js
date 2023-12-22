import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos:[]
  },
  
  getters: {},

  mutations: {},

  actions: {
    async getTodos(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      
      console.log(response.data)
    }
  }
})



