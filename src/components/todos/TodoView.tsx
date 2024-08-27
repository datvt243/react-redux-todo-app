import { iTodoItem } from '../../types/types';
import TodoItem from './TodoItem';

import { useDispatch, useSelector } from 'react-redux';
import { markAsImportant, removeTodo, moveToTrash, markAsRead, setEditItem } from '../../redux/slice/todoSlice';
import { todoSelector } from '../../redux/selector/todoSelector';

function TodoListView() {
    const listTodos = useSelector(todoSelector);
    const dispatch = useDispatch();

    function dispatchImportant(id: string) {
        dispatch(markAsImportant(id));
    }
    function dispatchDone(id: string) {
        dispatch(markAsRead(id));
    }
    function dispatchRemove(id: string) {
        dispatch(removeTodo(id));
    }
    function dispatchMoveToTrash(id: string) {
        dispatch(moveToTrash(id));
    }
    function dispatchUpdate(todo: iTodoItem) {
        dispatch(setEditItem(todo));
    }

    return (
        <div className="view-wrapper mb-4">
            <p className="h4 py-2 mb-3 text-uppercase">Danh sách việc cần làm</p>
            {listTodos.length ? (
                <ul className="list-group">
                    {listTodos.map((item) => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            onMoveToTrash={dispatchMoveToTrash}
                            onMarkAsImportant={dispatchImportant}
                            onUpdateTodoRecord={dispatchUpdate}
                            onMarkAsDone={dispatchDone}
                            onDelete={dispatchRemove}
                        />
                    ))}
                </ul>
            ) : (
                <div className="p-5 bg-warning bg-opacity-25 text-center rounded">Chưa có việc cần làm</div>
            )}
        </div>
    );
}

export default TodoListView;
