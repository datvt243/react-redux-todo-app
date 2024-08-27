/* import Search from './Search'; */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCalendar, faHouseCircleCheck, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { enumType } from '../../types/types';

import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterGroup } from '../../redux/slice/filterSlice';

const listSidebar = [
    { text: 'Tasks (All)', icon: faHouseCircleCheck, iconClass: 'text-primary', group: enumType.BLANK },
    { text: 'Quan trọng', icon: faStar, iconClass: 'text-warning', group: enumType.IMPORTANT },
    { text: 'Kế hoạch', icon: faCalendar, iconClass: 'text-info', group: enumType.PLANNED },
    { text: 'Đã hoàn thành', icon: faCheck, iconClass: 'text-success', group: enumType.SUCCESS },
    { text: 'Đã xoá', icon: faTrash, iconClass: 'text-danger', group: enumType.DELETE },
];
function SidebarWrapper() {
    const filter = useSelector((state: RootState) => state.filter.group);
    const dispatch = useDispatch();

    return (
        <div className="sidebar-wrapper py-3">
            <div className="my-2">
                <p className="h4 text-uppercase">Danh sách</p>
                <ul className="list-group list-group-sm list-group-flush">
                    {listSidebar.map((el, idx) => {
                        return (
                            <li
                                className={[
                                    'list-group-item px-2 py-3',
                                    filter === el.group ? 'bg-primary bg-opacity-50' : '',
                                ].join(' ')}
                                key={idx}
                            >
                                <span
                                    className="d-block cursor-pointer hover text-capitalize"
                                    onClick={() => {
                                        dispatch(setFilterGroup(el.group));
                                    }}
                                >
                                    <span className="badge-icon">
                                        <FontAwesomeIcon icon={el.icon} className={el.iconClass || ''} />
                                    </span>
                                    {el.text}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SidebarWrapper;
