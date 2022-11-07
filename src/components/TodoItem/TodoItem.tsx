import Checkbox from '@mui/material/Checkbox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { useAppDispatch } from 'utils/hooks/useApp';
import { toggleComplete, removeTodo } from 'store/todoSlice';

import StyledTodoItem from './TodoItem.style';

interface TodoItemProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, isCompleted }) => {
  const dispatch = useAppDispatch();

  return (
    <StyledTodoItem>
      <Checkbox
        className="todo-item__checkbox"
        checked={isCompleted}
        onChange={() => dispatch(toggleComplete(id))}
      />

      <span className="todo-item__title">{title}</span>

      <button
        className="todo-item__delete-btn"
        type="button"
        onClick={() => dispatch(removeTodo(id))}
        aria-label="Delete todo."
      >
        <DeleteOutlinedIcon className="todo-item__delete-icon" />
      </button>
    </StyledTodoItem>
  );
};

export default TodoItem;
