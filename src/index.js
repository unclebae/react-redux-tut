import React from 'react';
import ReactDOM from 'react-dom';

// 리덕스를 이용하기 위해서는 레이아웃이 되는 컴포넌트를 Provider로 감싸 주어야합니다. 그럼 store 를 공유할 수 있습니다. 
import { Provider } from 'react-redux';

// store를 임포트 합니다. 우리는 이 store를 Provider 에 전달하여, 리덕스 상태관리를 수행할 수 있도록 합니다. 
import store from './redux/store';

// 레이아웃 컴포넌트를 임포트합니다. 
import TodoApp from './TodoApp';

const rootElement = document.getElementById('root');

// 리액트 돔을 생성합니다. 
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    rootElement
);