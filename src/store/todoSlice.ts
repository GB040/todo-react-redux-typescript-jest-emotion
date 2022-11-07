import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodosState {
  list: Todo[];
  activeFilter: string;
}

export const initialState: TodosState = {
  list: [],
  activeFilter: 'all',
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        isCompleted: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.isCompleted = !toggledTodo.isCompleted;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    removeCompletedTodo(state) {
      state.list = state.list.filter(todo => !todo.isCompleted);
    },
    setActiveFilter(state, action: PayloadAction<string>) {
      state.activeFilter = action.payload
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
  removeCompletedTodo,
  setActiveFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
