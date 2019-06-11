import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ( { todos } ) => (
    <ul className="todo-list">
        {todos && todos.length ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
        }) : "No todos, yay!"}
    </ul>
)

const mapStateToProps = state => {
    return state;
}
export default connect(mapStateToProps)(TodoList);