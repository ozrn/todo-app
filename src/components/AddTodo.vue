<template>
    <div>
        <h3>Add Todo</h3>
        <div class="form">
            <form>
                <input type="text" v-model="newItem" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>


<script>

export default {
name: 'AddTodo'
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