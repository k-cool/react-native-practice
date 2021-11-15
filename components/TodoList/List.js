import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Empty from './Empty';

import Todo from './Todo';

const List = props => {
  const { type, todoList, completeTodo, deleteTodo } = props;

  const filteredList = (type =>
    type === '할 일 목록'
      ? todoList.filter(list => list.status === 'YET')
      : todoList.filter(list => list.status === 'DONE'))(type);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={filteredList}
        renderItem={({ item }) => (
          <Todo
            type={type}
            todos={item}
            handleTodo={type === '할 일 목록' ? completeTodo : deleteTodo}
          />
        )}
        ListEmptyComponent={<Empty type={type} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  text: {
    marginVertical: 15,
    color: 'blue',
    fontSize: 30,
  },
});

export default List;
