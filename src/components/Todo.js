import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toogleTodo } from '../redux/actions';

const Todo = ({ todo, removeTodo, toogleTodo }) => (
    <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => toogleTodo(todo.id)}>
        <div>
        {todo && todo.completed ? <span className="badge badge-pill badge-primary">Completed</span> : <span className="badge badge-pill badge-secondary">Not Completed</span>}{" "}
        &nbsp;
        {todo && todo.completed ? <del>todo.content</del> : todo.content}
        </div>
        <span className="badge badge-dark badge-pill" onClick={() => removeTodo(todo.id)}>Remove</span>
    </li>
)

export default connect(null, {removeTodo, toogleTodo} )(Todo);