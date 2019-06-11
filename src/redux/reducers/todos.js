import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actionTypes';

export default function(state = [], action) {
    console.log(state);
    switch(action.type) {
        case ADD_TODO:
            const { id, content, completed } = action.payload;
            return [
                ...state,
                { id, content, completed }
            ]
        case REMOVE_TODO: 
            const { id: targetId } = action.payload;

            let removedTodos = state.filter(({id, content}) => id !== targetId);
            return removedTodos;

        case TOGGLE_TODO:
            const { id: toggleTargetId } = action.payload;
            const newTodos = state.map(e => {
                if (e.id === toggleTargetId) {
                    e = {...e, completed: !e.completed}
                }

                return e;
            })

            return newTodos;
        
        default:
            return state;
    }
}