import React from 'react';

// 필요한 컴포넌트들을 로드합니다. 
// 일반적으로 컴포넌트들은 /components 폴더에 추가합니다. 
// AddTodo 는 아이템을 추가하는 컴포넌트입니다. 
import AddTodo from './components/AddTodo';
// TodoList 는 Todo 아이템의 목록을 출력합니다. 
import TodoList from './components/TodoList';

export default function TodoApp() {
    return (
        // 실제 컴포넌트를 배치해 보겠습니다. className 은 react 가 컴파일을 하고 나면 class 태그로 바뀝니다. 
        // 상단에 AddTodo 가 들어오고, 아래 TodoList 가 출력이 될 것입니다. 
        <div className="container todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}