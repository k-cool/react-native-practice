import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {
  addTodo,
  completeTodo,
  deleteTodo,
} from '../../redux/todos/todoAction';
import { Dimensions } from 'react-native';

import TabButton from './TabButton';
import List from './List';
import TodoInput from './TodoInput';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const FormTodoList = props => {
  const [selectedTab, setSelectedTab] = useState('할 일 목록');
  const { todoList, addTodo, completeTodo, deleteTodo } = props;

  const selectedTabStyle = [
    styles.selected,
    selectedTab === '할 일 목록' ? null : styles.completeSelected,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabButton text='할 일 목록' setSelectedTab={setSelectedTab} />
        <TabButton text='완료 목록' setSelectedTab={setSelectedTab} />
        <View style={selectedTabStyle} />
      </View>
      {selectedTab === '할 일 목록' ? (
        <List
          type='할 일 목록'
          todoList={todoList}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ) : (
        <List
          type='완료 목록'
          todoList={todoList}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      )}
      {selectedTab === '할 일 목록' ? <TodoInput addTodo={addTodo} /> : null}
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  tabContainer: {
    flex: 0.1,
    flexDirection: 'row',
  },

  selected: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth * 0.5,
    height: 11,
    backgroundColor: 'whitesmoke',
    opacity: 0.6,
  },

  completeSelected: {
    transform: [{ translateX: windowWidth * 0.5 }],
  },
});

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: data => dispatch(addTodo(data)),
    completeTodo: id => dispatch(completeTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormTodoList);
