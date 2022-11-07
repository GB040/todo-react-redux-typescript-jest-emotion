import { useAppSelector } from 'utils/hooks/useApp';

import AddTodo from 'components/AddTodo/AddTodo';
import TodoList from 'components/TodoList/TodoList';
import TodoFooter from 'components/TodoFooter/TodoFooter';

import StyledTodoSection from './TodoSection.style';

const TodoSection: React.FC = () => {
  const todos = useAppSelector(state => state.todos.list);
  
  return (
    <StyledTodoSection>
      <h1 className='todo-section__title'>
        todos
      </h1>

      <AddTodo />
      <TodoList />
      {Boolean(todos.length) && <TodoFooter />}
    </StyledTodoSection>
  );
};

export default TodoSection;
