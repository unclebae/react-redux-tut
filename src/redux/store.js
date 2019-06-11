// createStore 를 하면 상태관리를 하는 store 를 만들 수 있습니다. 
import { createStore } from 'redux';

// store 는 반드시 하나의 리듀서를 가져야합니다. 
// reducer 는 새로운 상태를 만들어 내는 역할을 합니다. (그래서 과거 상태를 파라미터로 전달받고, 새로운 상태를 반환하면) store가 반영을 해줍니다. 
import rootReducer from './reducers';

// 이제 store 를 생성했습니다. 파라미터로 루트 리듀서를 전달했습니다. 
export default createStore(rootReducer);