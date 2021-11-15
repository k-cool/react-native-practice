import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Empty from './Empty';

import Todo from './Todo';

export default function TodoList(props) {
  const { todoList, deleteTodo } = props;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={todoList}
        renderItem={({ item }) => <Todo todos={item} deleteTodo={deleteTodo} />}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}

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
