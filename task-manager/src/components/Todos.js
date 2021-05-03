import React from "react";
import TodoItem from './TodoItem';
import { GlobalState} from '../GlobalStateContextHook';
import axios from 'axios'

const useGlobalState = () => React.useContext(GlobalState);

const Todos = () => {
  const {todos} = useGlobalState();
  const markComplete = (id) =>{
    GlobalState.set({todos: todos.map(todo =>{
      if(todo.id === id)
      {
          todo.completed = !todo.completed
      }
      return todo;
    })})
  }
  //Delete Todo
  const delTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => GlobalState.set({todos: [...todos.filter(todo => todo.id !== id)]}));
    GlobalState.set({todos: [...todos.filter(todo => todo.id !== id)]});
  }

  return todos.map((todo) =>(
    <TodoItem 
      key={todo.id} 
      todo={todo} 
      markComplete = {markComplete}
      delTodo = {delTodo}
    />
));
}
export default Todos;
