// 액션 타입을 임포트 합니다. 이렇게 하면 오타가 안생기겠죠?
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actionTypes';

// 리듀서 역시 함수 입니다. 
// 단 파라미터 2개를 받습니다. state 와 action 입니다. 
// state 는 이전 상태값을 가지게 됩니다. state = [] 이라고 해준것은 state가 널인경우 (맨처음 로드되었을때) 배열로 초기화 하라는 의미입니다. 
// action 은 dispatch 액션 객체를 나타냅니다. 
export default function(state = [], action) {
    console.log(state);
    // 액션 타입에 따라서 해야할 일을 switch 문으로 구분하고 있습니다. 
    switch(action.type) {
        // 신규 Todo 를 추가합니다. 
        // 페이로드에는 3가지 값을 가진 객체입니다. (아이디, 내용, 완료여부)
        // 리듀서는 새로운 배열을 반환해야하기 때문에 (우리 어플에서는 배열을 반환합니다.) [...state, 새로추가할 아이템] 의 형식으로 새로운 todo 목록 배열을 반환합니다. 
        // ...state 의 의미는, 자바스크립트 문법으로 state 를 복제해서 추가하라는 의미입니다. 
        case ADD_TODO:
            const { id, content, completed } = action.payload;
            return [
                ...state,
                { id, content, completed }
            ]
        // 제거를 위한 처리를 수행합니다. 
        // 제거는 아이디를 전달하므로 아래와 같이 타겟 아이디를 받고, 필터링 처리를 했습니다. 
        // 아이디가 다른 목록들만 반환하고, 동일하면 removedTodos 에서 빠지게 됩니다. 
        // filter 은 배열에서 새로운 값을 만들어 내므로, 이전 상태값이 아닌 새로운 상태값입니다. (이 부분은 매우 중요합니다.)
        // 리덕스에서 리듀스는 반드시 이전 상태값을 변경해서는 안된다는 룰이 있습니다 .
        case REMOVE_TODO: 
            const { id: targetId } = action.payload;

            let removedTodos = state.filter(({id, content}) => id !== targetId);
            return removedTodos;

        // 토글 처리를 수행합니다. 
        // 토글은 맵을 통해서 이전 상태의 값을 순회 하고, 아이디가 동이한경우 이전객체를 복사하고, completed 의 값을 토글링한 새로운 아이템을 생성합니다. 
        case TOGGLE_TODO:
            const { id: toggleTargetId } = action.payload;
            const newTodos = state.map(e => {
                if (e.id === toggleTargetId) {
                    e = {...e, completed: !e.completed}
                }

                return e;
            })

            return newTodos;
        // 액션 타입에 해당하지 않으면 변경없이 받은 상태를 그대로 전달합니다. 
        default:
            return state;
    }
}