<template>
  <!-- HEADER -->
  <header-title></header-title>
  <!-- BODY -->
  <todo-form @on-submit="submitNewTodo"></todo-form>
  <todo-list :todos="todos"></todo-list>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import axios from "axios";
import calcDate from "@/utils/calcDate";

const FIREBASE_DOMAIN = "https://todoappvue-d3b68-default-rtdb.firebaseio.com/";

export default {
  components: {TodoList, HeaderTitle, TodoForm},
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    loadTodos() {
      // data fetching
      axios.get(`${FIREBASE_DOMAIN}/todos.json`)
          .then((response) => {
            return response.data;
          }).catch((error) => console.warn("ERROR GET", error))
          .then((data) => {
            // transform
            const transformedData = [];

            for (const key in data) {
              const todoObj = {
                id: key,
                ...data[key],
              };

              transformedData.push(todoObj);
            }

            this.todos = transformedData;
          });
    },
    submitNewTodo(title, desc) {
      console.log("Title", title, "Description", desc);
      // create todo item
      const todoItem = {
        id: title,
        title: title,
        description: desc,
        status: "TODO",
        date: calcDate(),
      };

      // post new todo to Back-end DB
      axios.post(`${FIREBASE_DOMAIN}/todos.json`, todoItem)
          .then((response) =>
              console.log("[SUCCESS]TODO POST", response)
          ).then(() => {
            // call GET request methods
            this.loadTodos();
          })
          .catch((error) =>
              console.warn("[ERROR]TODO POST", error)
          );

      // todo spec
      /*
      todoItem = {
        id: this.title,
        title: this.title,
        description: this.description,
        status: "TODO",  // TODO, INPROGRESS, DONE
        date: calcDate();
        //date: "2022.06.13 14:05:46"  // new Date() 를 사용하여 새로운 날짜 생성
      }
      */
    }
  },
  created() {
    this.loadTodos();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
