import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

export class TodoItem extends Component {
    getStyle = () =>{
        return{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none',
            textAlign: 'left'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={completed}
                            onChange={this.props.markComplete.bind(this, id)}
                            color="primary"
                        />
                        }
                        label={title}
                        style={itemStyle}
                    />
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={this.props.delTodo.bind(this, id)} 
                        style={btnStyle}
                        startIcon={<DeleteIcon />}
                    />
                </p>
            </div>
        )
    }

}

const itemStyle = {
    marginRight: '5rem'
}

const btnStyle = {
    padding: '5px',
    border: 'none',
    cursor: 'pointer',
    float: 'right',
    "@media (maxWidth: 469px)": {
        float: '',
    }
}

export default TodoItem;
