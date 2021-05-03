import React, { Component } from 'react';
import Todos from "../../components/Todos";
import AddTodo from "../../components/AddTodo";
import axios from 'axios'


class Home extends Component {
    state = { 
        todos:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
        
      }
    
      //Toggle complete status
      markComplete = (id) =>{
        this.setState({todos: this.state.todos.map(todo =>{
          if(todo.id === id)
          {
              todo.completed = !todo.completed
          }
          return todo;
        })})
    }
    //Delete Todo
    delTodo = (id) =>{
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }
    //Add Todo
    addTodo = (title) =>{
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false
      }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
       
    }
    render() { 
        return ( 
            <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}/>  
              </React.Fragment>
        );
    }
}
 
export default Home;