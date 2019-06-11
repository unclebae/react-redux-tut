// 액션 타입을 임포트 합니다. 
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

// 아이템의 번호를 나타냅니다. 
let nextTodoItem = 0;

// 액션은 단순한 객체를 반환하는 함수입니다. 
// 객체에는 type과 payload 가 일반적인 기본 요소 입니다. 

// Todo 아이템을 추가하는 액션을 만듭니다. 
// 여기에서는 nextTodoItem 을 하나 증가하여 아이디를 만들고, 전달받은 컨텐츠, 그리고 완료 여부를 담고있는 객체를 페이로드로 담았습니다 .
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoItem,
        content,
        completed:false
    }
});

// 제거를 위한 액션입니다. 
// 타입과, 아이디를 전달합니다. 
export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: {
        id
    }
});

// 토글을 위한 액션입니다. 
// 타입과, 아이디를 전달합니다. 
export const toogleTodo = id => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});
