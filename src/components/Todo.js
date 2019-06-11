import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { removeTodo, toogleTodo } from '../redux/actions';

const Todo = ({ todo, removeTodo, toogleTodo }) => (
    <li className="todo-item" onClick={() => toogleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed")}>
                {todo.content}
        </span>
        <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
)

export default connect(null, {removeTodo, toogleTodo} )(Todo);