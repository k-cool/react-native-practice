import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function Todo(props) {
  const { type, todos, handleTodo } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.task}>{todos.task}</Text>
      <TouchableOpacity
        style={styles.completeBtn}
        onPress={() => handleTodo(todos.id)}
      >
        <Text>{type === '할 일 목록' ? '완료' : '삭제'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'skyblue',
  },

  task: {
    fontSize: 20,
  },

  completeBtn: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },

  completeBtnText: {
    fontSize: 15,
  },
});

export default Todo;
