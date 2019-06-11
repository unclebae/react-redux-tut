import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: ''};
    }

    updateInput = input => {
        this.setState( {input} );
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: ''});
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" 
                    placeholder="Enter new Todo item" aria-label="Enter new Todo item" aria-describedby="basic-addon2"
                    onChange={ e => this.updateInput(e.target.value) } value={this.state.input}
                    />
                <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2" onClick={this.handleAddTodo} >Add Todo</span>
                </div>
            </div>
        )
    }

}

export default connect(
    null,
    { addTodo }
)(AddTodo);