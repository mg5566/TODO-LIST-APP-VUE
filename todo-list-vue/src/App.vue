<template>
  <!-- HEADER -->
  <header-title></header-title>
  <router-view></router-view>
  <!-- BODY -->
  <modal-view v-if="isFormModalView" @close-modal="isFormModalView = false">
    <todo-form @on-submit="submitNewTodo"></todo-form>
  </modal-view>
  <button @click="isFormModalView = true">NEW TODO</button>
  <todo-list :todos="todos" @on-click="clickTodoItem" @set-next-status="setNextStatus" @on-delete="deleteTodo"></todo-list>
  <modal-view v-if="isItemModalView" @close-modal="isItemModalView = false">
    <todo-card :todo-item="todos.filter((item) => item.id === showItemID)"></todo-card>
  </modal-view>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import axios from "axios";
import calcDate from "@/utils/calcDate";
import TodoCard from "@/components/TodoCard";

const FIREBASE_DOMAIN = "https://todoappvue-d3b68-default-rtdb.firebaseio.com/";

export default {
  components: {TodoCard, TodoList, HeaderTitle, TodoForm},
  data() {
    return {
      todos: [],
      isFormModalView: false,
      isItemModalView: false,
      showItemID: null,
    };
  },
  methods: {
    clickTodoItem(id) {
      console.log("id", id);
      this.isItemModalView = true;
      this.showItemID = id;

      const item = this.todos.filter((todo) => todo.id === this.showItemID);
      console.log(item);
    },
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
        // id: title,
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

        this.isFormModalView = false;
      })
          .catch((error) =>
              console.warn("[ERROR]TODO POST", error)
          );

      // todo spec
      /*
      todoItem = {
        id: key,
        title: this.title,
        description: this.description,
        status: "TODO",  // TODO, INPROGRESS, DONE
        date: calcDate();
        //date: "2022.06.13 14:05:46"  // new Date() 를 사용하여 새로운 날짜 생성
      }
      */
    },
    deleteTodo(id) {
      console.log("DELETE ID", id);
      axios.delete(`${FIREBASE_DOMAIN}/todos/${id}.json`)
          .then((response) => {
            if (response.status !== 200) {
              console.log("뭔가 잘못된거임...")
            }
          })
          .catch((error) => console.warn("[ERROR]TODO DELETE", error))
          .then(() => this.loadTodos());
    },
    setNextStatus(id) {
      console.log("clicked id of todo", id);
      const nowTodo = this.todos.filter((todo) => todo.id === id);
      console.log("now status", nowTodo[0].status);
      const newStatus = nowTodo[0].status === "TODO" ? {status: "INPROGRESS"} : {status: "DONE"};

      if (nowTodo[0].status !== "DONE") {
        axios.patch(`${FIREBASE_DOMAIN}/todos/${id}.json`, newStatus)
            .then((response) => {
              console.log("response", response);
              this.loadTodos();
            })
            .catch((error) => {
              console.warn("[ERROR] status PATCH", error);
            });
      }
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
