import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Empty = props => {
  const { type } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${
        type === '할 일 목록' ? '할 일' : '완료'
      } 목록이 없어요! 😮`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  text: {
    fontSize: 30,
  },
});

export default Empty;
