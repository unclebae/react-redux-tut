import React from 'react';

// 리덕스와 컴포넌트를 연결하기 위해서는 connect 모듈을 임포트 해야합니다. 
// 이 커넥트는 store 의 상태를 현재 컴포넌트의 props 와 연결하는 기능인 mapStateToProps와 
// 액션 디스패치를 props 와 연결하는 mapDispatchToProps 라는 2가지 파라미터를 가집니다. 
import { connect } from 'react-redux';

// 액션 함수를 로드합니다. 우리는 Todo아이템을 목록에 추가할 것이므로 addTodo 함수만 임포트 했습니다. 
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
    // 현재 컴포넌트를 위한 로컬 state 를 만들었습니다. 
    // input 태그와 연동될 예정입니다. (todo아이템을 가지고 있을 것입니다.)
    constructor(props) {
        super(props);
        this.state = { input: ''};
    }

    // input 박스의 값이 변경이 되면 onChange 이벤트가 발생할 것이고, onChange 이벤트에 대해서 상태값을 변경하도록 합니다. 
    updateInput = input => {
        this.setState( {input} );
    }

    // 이것은 실제로 store 에 있는 action인 addTodo 를 호출하여 값을 전달합니다. 
    // 위에서 설명한것과 같이 addTodo 라는 액션 함수가 현재 컴포넌트의 props 와 연결되어 있습니다. 
    // 그러므로 우리는 this.props.addTodo 로 함수를 호출할 수 있는 것입니다 .
    // 그리고 화면의 입력창은 비워주는 역할을 합니다. 
    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: ''});
    }

    // 화면에 HTML 을 배치합니다. 
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" 
                    placeholder="Enter new Todo item" aria-label="Enter new Todo item" aria-describedby="basic-addon2"
                    // onChange 가 발생하면 this.updateInput 이벤트와 바인딩 되어 호출이 됩니다. 
                    // 이때 arrow 함수인 => 로 함수가 연동되는 것을 꼭 확인해야합니다. 이것은 함수를 자체를 이벤트와 바인딩 해주는 방법입니다. 
                    onChange={ e => this.updateInput(e.target.value) } value={this.state.input}
                    />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2" onClick={this.handleAddTodo} >Add Todo</span>
                </div>
            </div>
        )
    }

}

// 이 부분이 컴포넌트와 store 를 커넥션 해주는 매우 중요한 부분입니다. 
// connect 는 2개의 파라미터를 가집니다. 
// 첫번째 파라미터(여기서는 null) 은 store 의 state와 현재 컴포넌트의 props 와 연결을 할 객체를 나타냅니다. 즉, mapStateToProps 입니다. 
// 두번째 파라미터(여기서는 addTodo) 은 actionDispatch 이며, store 에 지정된 액션과 연결합니다. mapDispatchToProps 에 해당합니다. 
// 그리고 커넥션 대상을 AddTodo 라는 현재 컴포넌트로 연결했습니다. 
export default connect(
    null,
    { addTodo }
)(AddTodo);