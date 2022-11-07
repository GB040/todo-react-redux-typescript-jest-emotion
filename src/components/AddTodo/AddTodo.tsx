import { useState } from 'react';

import { useAppDispatch } from 'utils/hooks/useApp';
import { addTodo } from 'store/todoSlice';

import StyledAddTodo from './AddTodo.style';

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState('');

  const addNewTodo = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  };
 
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addNewTodo();
    }
  };

  return (
    <StyledAddTodo>
      <input
        className="add-todo__input"
        placeholder="What needs to be done?"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleEnter}
      />

      <button
        className="add-todo__add-btn"
        type="button"
        onClick={addNewTodo}
      >
        Add Todo
      </button>
    </StyledAddTodo>
  );
};

export default AddTodo;
