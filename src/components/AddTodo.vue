<template>
    <div>
        <h3>Add Todo</h3>
        <div class="form">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>


<script>

import {mapActions} from 'vuex'

export default {
name: 'AddTodo',

data() {
    return {
        title: ' '
    }
},

methods: {
    ...mapActions(['addTodo']),

    onSubmit(e){
        e.preventDefault()

        this.addTodo(this.title)
    }
}

}

</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #d4da89;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #d1df80;
  color: #fff;
  border: 1px #ced57d solid;
  cursor: pointer;
}
</style>

