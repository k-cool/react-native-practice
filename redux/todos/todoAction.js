import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './todoTypes';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    data: todo,
  };
};

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    id: id,
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};
