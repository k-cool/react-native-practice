import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TabButton = props => {
  const { text, selectedTab, setSelectedTab } = props;

  return (
    <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab(text)}>
      <Text style={styles.tabText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
    color: 'white',
    backgroundColor: 'tomato',
  },

  tabText: {
    color: 'white',
    fontSize: 20,
  },
});

export default TabButton;
