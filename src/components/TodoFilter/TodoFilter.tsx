import React from 'react';

import { setActiveFilter } from 'store/todoSlice';
import { useAppDispatch } from 'utils/hooks/useApp';

import StyledTodoFilter from './TodoFilter.style';

const RADIO_BUTTONS = [
  { id: 'all', name: 'All', isDefaultChecked: true },
  { id: 'active', name: 'Active' },
  { id: 'completed', name: 'Completed' },
];

const TodoFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleRadioBtnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    dispatch(setActiveFilter(eventTarget.id));
  };

  return (
    <StyledTodoFilter>
      {RADIO_BUTTONS.map(btn => (
        <React.Fragment key={btn.id}>
          <input
            id={btn.id}
            className="todo-filter__radio-btn"
            type="radio"
            name="radio"
            onClick={handleRadioBtnClick}
            defaultChecked={btn.isDefaultChecked}
          />

          <label htmlFor={btn.id} className="todo-filter__label">
            {btn.name}
          </label>
        </React.Fragment>
      ))}
    </StyledTodoFilter>
  );
};

export default TodoFilter;
