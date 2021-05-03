import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export class AddTodo extends Component {
    state = {
        title:''
    }
    onChange = (e) =>this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <TextField 
                    id="outlined-basic" 
                    label="Add todo.." 
                    type='text' 
                    variant="outlined" 
                    name='title' 
                    style={{flex: '10', padding: '5px', marginTop: '10px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                {/* <input 
                    type='text' 
                    name='title' 
                    placeholder="Add todo.." 
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                /> */}
                <Button 
                    type='submit'
                    variant="contained" 
                    color="primary"
                    style={{flex:'1', padding: '5px', marginTop: '10px'}}
                >Submit</Button>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
