import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slice/todoSlice';

function TodoListForm() {
    const dispatch = useDispatch();

    const [string, setString] = useState('');

    /* const handlerAddToList = () => {
        const newItem: iTodoItem = {
            id: uuidv4(),
            group: filter || '',
            title: string,
            description: '',
            repeat: filter === 'planned' ? 'daily' : '',
            isDone: false,
            created_at: +new Date(),
            deadline: +new Date(),
        };

        newItem.repeat &&
            ((repeat) => {
                newItem.group = 'planned';

                const _date = new Date();

                switch (repeat) {
                    case 'daily':
                        _date.setDate(_date.getDate() + 1);
                        _date.setHours(23, 59, 59, 999);
                        newItem.deadline = +_date;
                        break;

                    default:
                        break;
                }
            })(newItem.repeat);

        onAddToList(newItem);
        setString('');
    }; */

    return (
        <div className="form-wrapper mb-4">
            <div className="input-group m-0">
                <input
                    value={string}
                    onChange={(e) => {
                        setString(e.target.value);
                    }}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Nhập vào việc cần làm ..."
                />
                <span className="input-group-text p-1">
                    <button
                        className="btn btn-success"
                        disabled={!string}
                        onClick={() => {
                            dispatch(addTodo(string));
                            setString('');
                        }}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </span>
            </div>
        </div>
    );
}

export default TodoListForm;
