import TodoForm from './TodoForm';
import TodoView from './TodoView';
import ToDoUpdate from './ToDoUpdate';
import ReactModal from '../bases/ReactModal';
import ReactToast from '../bases/ReactToast';

import { useRef } from 'react';

function TodoListWrapper() {
    const refReactToast = useRef<{
        show: () => void;
    }>();

    return (
        <div className="container py-3">
            <TodoForm />
            <TodoView />
            {true && (
                <ReactModal id="refModalUpdate">
                    <ToDoUpdate />
                </ReactModal>
            )}
            <ReactToast ref={refReactToast} text={'Task (Daily) đã được tự động tạo lại thành công'} />
        </div>
    );
}

export default TodoListWrapper;
