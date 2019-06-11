// combineReducers 는 여러 리듀서를 스토어에 등록해주는 역할을 합니다. 
import { combineReducers } from 'redux';

// todos.js 라는 리듀서를 임포트 합니다. 
import todos from './todos';

// 이 예제에서는 todos라는 하나의 리듀서만 컴바인 하고 있습니다. 
export default combineReducers({todos});