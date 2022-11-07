import todoReducer, {
  initialState,
  addTodo,
  toggleComplete,
  removeTodo,
} from 'store/todoSlice';

describe('todoSlice', () => {
  it('должен возвращаться дефолтный state, когда мы передаем пустой action', () => { 
    const result = todoReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('должен добовляться новый todo, когда мы передаем addTodo action', () => { 
    const action = { type: addTodo.type, payload: 'New todo' };

    const result = todoReducer(initialState, action).list;

    expect(result[0].title).toBe('New todo');
    expect(result[0].isCompleted).toBe(false);
  });

  it('должен меняться статус todo comleted, когда мы передаем toggleComplete action', () => {
    const todos = [{ id: '123', title: 'New todo', isCompleted: false }];
    const action = { type: toggleComplete.type, payload: '123' };
  
    const currentState = { ...initialState, list: todos };
    const result = todoReducer(currentState, action).list;

    expect(result[0].isCompleted).toBe(true);
  });

  it('должен удалять todo, когда мы передаем removeTodo action', () => { 
    const todos = [{ id: '123', title: 'New todo', isCompleted: false }];
    const action = { type: removeTodo.type, payload: '123' };

    const currentState = { ...initialState, list: todos };
    const result = todoReducer(currentState, action).list;

    expect(result).toEqual(initialState.list);
  });
});
