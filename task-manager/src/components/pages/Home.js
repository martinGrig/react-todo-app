import React, { useEffect } from 'react';
import Todos from "../../components/Todos";
import AddTodo from "../../components/AddTodo";
import axios from 'axios'
import { GlobalState} from '../../GlobalStateContextHook';

const useGlobalState = () => React.useContext(GlobalState);

const Home = () => {
  const {todos} = useGlobalState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => GlobalState.set({todos: res.data}))
  }, []);
  
  //Add Todo
  const addTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(res => GlobalState.set({todos: [...todos, res.data]})); 
  }

  return ( 
    <React.Fragment>
        <AddTodo addTodo={addTodo}/>
        <Todos />  
      </React.Fragment>
  );
}
 
export default Home;