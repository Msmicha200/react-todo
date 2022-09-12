import axios from 'axios';

const FILL_TODO = 'FILL_TODO';
const EDIT_TODO = 'EDIT_TODO';
const defaultState = {
    todos: []
};

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FILL_TODO:
            return { ...state, todos: action.payload };
        case EDIT_TODO:
            const idx = state.todos.indexOf[action.payload];

            state.todos[idx] = action.payload;
            return { ...state, todos: [...state.todos] };
        default:
            break;
    }

    return state;
};

export const fillTodos = (payload) => ({ type: FILL_TODO, payload });
export const editTodo = (todo) => ({ type: EDIT_TODO, payload: todo });
export const saveTodo = (payload) => {
    return dispatch => {
        axios.put(`${process.env.REACT_APP_API_URL}/todos/${payload.id}`, payload)
            .then(() => {

            })
            .catch(err => {
                console.log(err);
            });
    };
};
export const fetchTodos = (arg) => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_API_URL}/todos?_limit=25`)
            .then(result => {
                if (!result.data.length) {
                    return false;
                }

                dispatch(fillTodos(result.data));
            });
    };
};
