import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../assets/scss/app.scss';
import { fetchTodos, editTodo, saveTodo } from '../store/todosReducer';
import Table from './Table/Table';

const App = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todosReducer.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <main>
            <section className="container flex align-center valign-center">
                {todos.length ? (
                    <Table
                        attrs={{
                            id: {
                                title: 'Id',
                                edit: false,
                            },
                            userId: {
                                title: 'UserId',
                                edit: true,
                            },
                            title: {
                                title: 'Title',
                                edit: true,
                            },
                        }}
                        items={todos}
                        onChange={(todo) => dispatch(editTodo(todo))}
                        onEditFinished={(todo) => dispatch(saveTodo(todo))}
                    />
                ) : (
                    <h1>It looks like you do not have what to do :)</h1>
                )}
            </section>
        </main>
    );
};

export default App;
