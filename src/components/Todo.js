import React from 'react';

// 리덕스와 컴포넌트를 연결하기 위해서 connect를 임포트 합니다. 
import { connect } from 'react-redux';

// 여기에서 액션은 2가지가 일어납니다. 
// Todo를 목록에서 제거하기
// Todo를 토글링하기 (완료/미완료) 시키기
// 즉 2개의 액션이 현재 컴포넌트에 연결된다는 의미입니다. 
import { removeTodo, toogleTodo } from '../redux/actions';

// Todo도 함수 타입으로 컴포넌트를 만들었습니다 .
// state 에서 todo, removeTodo, toggleTodo 를 디스트럭쳐 문법을 이용하여 추출해서 전달합니다 .
const Todo = ({ todo, removeTodo, toogleTodo }) => (
    // 리스트를 클릭하면 toggleTodo 가 동작하며 todo.id 를 전달합니다. 
    // todo.completed 내용을 확인하고, 토글링에 따라 화면에 보여주는 방식을 달리 하고 있습니다. 
    // 그리고 remove 배지를 클릭하면 removeTodo가 동작하며 todo.id 를 전달해서, 아이템을 학제하도록 액션을 발생 시킵니다. 
    <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => toogleTodo(todo.id)}>
        <div>
        {todo && todo.completed ? <span className="badge badge-pill badge-primary">Completed</span> : <span className="badge badge-pill badge-secondary">Not Completed</span>}{" "}
        &nbsp;
        {todo && todo.completed ? <del>todo.content</del> : todo.content}
        </div>
        <span className="badge badge-dark badge-pill" onClick={() => removeTodo(todo.id)}>Remove</span>
    </li>
)

// 실제로 리덕스와 컴포넌트를 연결합니다 .
// connect 를 이용하면 리덕스 스토어의 상태, 액션이 props 에 바인드 된다고 했습니다. 
// 여기서는 props 로 todo 아이템을 TodoList 에서 전달 받았으므로, mapDispatchToProps 만 처리합니다. 
// 우리의 Dispatch 는 {removeTodo, toggleTodo} 입니다. 
export default connect(null, {removeTodo, toogleTodo} )(Todo);