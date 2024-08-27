import type { RootState } from '../../redux/store.ts';
import { updateTodo } from '../../redux/slice/todoSlice.ts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function ToDoUpdate() {
    const item = useSelector((state: RootState) => state.todo.edit);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({ ...item });

    useEffect(() => {
        setTodo(item);
    }, [item]);

    return (
        <div className="htmlForm-wrapper">
            {todo && (
                <form action="">
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={todo.title}
                            onChange={(e) => {
                                setTodo({ ...todo, title: e.target.value });
                            }}
                            placeholder="Tiêu đề"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Ghi chú
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            value={todo.description}
                            onChange={(e) => {
                                setTodo({ ...todo, description: e.target.value });
                            }}
                            placeholder="Thêm ghi chú"
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Lặp lại
                        </label>
                        <select
                            className="form-select"
                            value={todo.repeat}
                            onChange={(e) => {
                                const _repeat = e.target.value;
                                const _todo = { ...todo, repeat: _repeat };
                                if (_repeat !== 'none') {
                                    _todo.group = 'planned';
                                }
                                setTodo(_todo);
                            }}
                        >
                            <option value="none">Không</option>
                            <option value="daily">Mỗi ngày</option>
                            <option value="weekly">Mỗi tuần</option>
                            <option value="monthly">Mỗi tháng</option>
                        </select>
                    </div>
                    <div className="text-right mt-3">
                        <div className="btn-group" role="group" aria-label="">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                Đóng
                            </button>
                            <button
                                type="button"
                                className={['btn btn-success', !todo.title ? 'disabled' : ''].join(' ')}
                                onClick={() => {
                                    dispatch(updateTodo(todo));
                                }}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Lưu thay đổi
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default ToDoUpdate;
