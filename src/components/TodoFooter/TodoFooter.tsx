import { useAppDispatch, useAppSelector } from 'utils/hooks/useApp';
import { removeCompletedTodo } from 'store/todoSlice';

import TodoFilter from 'components/TodoFilter/TodoFilter';

import StyledTodoFooter from './TodoFooter.style';

const TodoFooter: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.list);
  
  const leftItems = todos.filter(todo => !todo.isCompleted);
  const isOneItemLeft = leftItems.length === 1; 
  const isClearCompletedBtnVisible = todos.some(todo => todo.isCompleted);

  return (
    <StyledTodoFooter>
      <span className="todo-footer__items-left">
        {`${leftItems.length} ${isOneItemLeft ? 'item' : 'items'} left`}
      </span>

      <TodoFilter />

      {isClearCompletedBtnVisible && (
        <button
          className="todo-footer__clear-btn"
          type="button"
          onClick={() => dispatch(removeCompletedTodo())}
        >
          Clear completed
        </button>
      )}
    </StyledTodoFooter>
  );
}

export default TodoFooter;
