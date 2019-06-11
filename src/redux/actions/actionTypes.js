// 액션타입을 만드는 이유는 이 액션 타입이 src/redux/actions/index.js 에서 이용되며, 또한
// src/redux/reducers/todos.js 에서도 이용되기 때문입니다. 
// 텍스트로만 작성하다보면, 오타가 나게 될 것이기 때문에 이렇게 액션 타입을 만들어주면 오타없이 액션 처리를 할 수 있습니다. 

// Todo추가용 타입
export const ADD_TODO = "ADD_TODO";
// 토글용 타입
export const TOGGLE_TODO = "TOGGLE_TODO";
// Todo 제거용 타입 
export const REMOVE_TODO = "REMOVE_TODO";