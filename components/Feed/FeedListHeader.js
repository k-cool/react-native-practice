import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

function FeedListHeader(props) {
  const { photos } = props;

  const renderItem = ({ item }) => {
    const { title, url } = item;
    return (
      <View style={styles.container}>
        <Image source={{ uri: url }} style={styles.feedImg} />
        <Text style={styles.text}>{title.slice(0, 8)}</Text>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={photos}
      renderItem={renderItem}
      horizontal
      // ListHeaderComponent={<Text>이름</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginStart: 10,
    marginTop: 15,
    backgroundColor: 'white',
  },

  feedImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  text: {
    fontSize: 18,
  },
});

export default FeedListHeader;
