import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const TodoInput = props => {
  const [textInput, setTextInput] = useState('');

  const { addTodo } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Add To do!'
        onChangeText={text => setTextInput(text)}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => addTodo(textInput)}
      >
        <Text>추가</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    height: 80,
    marginBottom: 0,
    padding: 10,
    backgroundColor: 'tomato',
  },

  input: {
    flex: 0.9,
    height: 40,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 20,
  },

  addBtn: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },

  addBtnText: {
    fontSize: 15,
  },
});

export default TodoInput;
