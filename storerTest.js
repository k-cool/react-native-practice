// import redux from 'redux';
const redux = require('redux');
// const reduxLogger = require('redux-logger');

// actions
// action-type
const ADD_TODO = 'ADD_TODO';
const ADD_COUNT = 'ADD_COUNT';

// action 정의
const addTodo = todo => {
  return {
    type: ADD_TODO,
    data: todo,
  };
};

const addCount = () => {
  return {
    type: ADD_COUNT,
  };
};

// reducers
//state 초기값 정의
const todoState = {
  todoList: [
    { id: 1, task: '잠자기', status: 'YET' },
    { id: 2, task: '커피마시기', status: 'DONE' },
  ],
};

const countState = {
  count: 0,
};

// reducer 정의
const todoReducer = (state = todoState, action) => {
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

    default:
      return state;
  }
};

const countReducer = (state = countState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// reducer 합치기
const combineReducers = redux.combineReducers;
const rootReducer = combineReducers({
  todo: todoReducer,
  count: countReducer,
});

// store + middleware
const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const logger = reduxLogger.createLogger;

const store = createStore(rootReducer);

// subscribe - view
// console.log(store.getState());
store.subscribe(() => console.log('sub', store.getState()));

// dispatch
store.dispatch(addTodo('wow'));
store.dispatch(addTodo('what?'));
store.dispatch(addCount());
