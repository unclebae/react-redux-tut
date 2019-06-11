import React from 'react';
import './styles.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}