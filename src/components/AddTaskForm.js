import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/task';

//import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const AddTaskForm = ({
    addTaskFunc
}) => <div className="block">
        <form onSubmit={addTaskFunc}>
            <h2>Add Task</h2>
            <div>
                <input name="title" placeholder="Title"/>
                <select name="priority">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <input type="date" name="date"/>
            </div>
            <textarea name="descr" placeholder="Description"></textarea>
            <div>
                <button>Add</button>
            </div>
        </form>
        </div>


const mapStateToProps = () => ({
});
  
const mapDispatchToProps = (dispatch) => ({
    addTaskFunc: (event) => dispatch(addTask(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);