import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            // marginLeft: '1rem'
            textAlign: 'left'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title} */}
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
    // backgroundColor: '#ff0000',
    // color: 'fff',
    padding: '5px',
    border: 'none',
    // borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    "@media (max-width: 469px)": {
        float: '',
    }
}


//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem;
