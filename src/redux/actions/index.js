import { ADD_TODO, TOGGLE_TODO, SET_FILTER, REMOVE_TODO } from './actionTypes';

let nextTodoItem = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoItem,
        content,
        completed:false
    }
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: {
        id
    }
});

export const toogleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
})