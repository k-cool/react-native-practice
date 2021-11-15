import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './todoTypes';

const initialState = {
  todoList: [
    { id: 1, task: '잠자기', status: 'YET' },
    { id: 2, task: '커피마시기', status: 'DONE' },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newId = state.todoList.length + 1;
      return {
        ...state,
        todoList: state.todoList.concat({
          id: newId,
          task: action.data,
          status: 'YET',
        }),
      };

    case COMPLETE_TODO:
      const idx = state.todoList.indexOf(
        state.todoList.find(todo => todo.id === action.id)
      );
      const newTodoList = [...state.todoList];
      newTodoList.splice(idx, 1, { ...state.todoList[idx], status: 'DONE' });

      return {
        ...state,
        todoList: newTodoList,
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.id),
      };

    default:
      return state;
  }
};

export default todoReducer;
