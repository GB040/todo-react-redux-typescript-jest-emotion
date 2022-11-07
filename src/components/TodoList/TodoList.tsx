import { useAppSelector } from 'utils/hooks/useApp';

import TodoItem from 'components/TodoItem/TodoItem';

import StyledTodoList from './TodoList.style';

const TodoList: React.FC = () => {
  const { list, activeFilter } = useAppSelector(state => state.todos);

  const getTodos = () => {
    switch (activeFilter) {
      case 'all': return list;
      case 'active': return list.filter(todo => !todo.isCompleted);
      case 'completed': return list.filter(todo => todo.isCompleted);
    }
  };

  const todos = getTodos() || [];

  return (
    <StyledTodoList>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
