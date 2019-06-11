import React from 'react';

// 리덕스와 현재 컴포넌트를 연결시켜 줍니다. 
import { connect } from 'react-redux';

// 리스트에서 Todo 아이템을 그려줄 컴포넌트를 임포트 합니다 .
import Todo from './Todo';

// 리스트 컴포넌트를 만들어 줍니다. 
// 역기서는 클래스 형태가 아닌, 함수 형태로 컴포넌트를 만들어 봤습니다. 어떤 방법이든 상관 없습니다. 
// 단 props 를 파라미터로 전달할 수 있기 때문에 우리는 디스트럭쳐 문법을 이용하여 props.todos 에 해당하는 값만 별도로 뽑아 냈습니다. 
// {todos} 를 파라미터로 전달받게 됩니다. 
const TodoList = ( { todos } ) => (
    // 아래 내용을 보면 todos가 존재하는 경우에는 todos.map 을 이용하여 Todo 컴포넌트를 반복해서 그려줍니다. 
    // 그렇지 않은경우 "No todos, yay!" 가 출력이 됩니다. 
    // Todo 를 그릴때 중요하게 생까해야할 부분이 바로 key 부분입니다. 리스트등을 출력할때 리액트 컴포넌트는 반드시 키가 필요합니다. 
    // 이유는? 컴포넌트를 화면에서 제거하고 다시 그리거나, 특정 컴포넌트만 다시 그리고자할때 반드시 유니크한 컴포넌트를 식별할 수 있어야합니다. 
    // 그러므로 유니크한 값으로 key 에 할당해 주어야합니다. 
    <ul className="list-group">
        {todos && todos.length ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
        }) : "No todos, yay!"}
    </ul>
)

// mapStateToProps 함수를 만듭니다. 
// 이 state 에는 store 가 관리하는 state 가 됩니다. 
const mapStateToProps = state => {
    return state;
}

// 리덕스와 현재 컴포넌트를 연결합니다. 
// connect 에는 2개의 파라미터가 있다고 했습니다. 
// 첫번째 파라미터는 mapStateToProps 로 상태값을 나타냅니다. 
// 두번째 파라미터는 mapDispatchToProps 로 액션 디스패치를 나타냅니다. 
// 그리고 이 커넥션을 TodoList 에 연결하겠다는 것을 나타냅니다. 
export default connect(mapStateToProps)(TodoList);