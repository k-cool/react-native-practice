import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function Feed(props) {
  const { id, title, url } = props.item;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image source={{ uri: url }} style={styles.thumbnailImg} />
        <View style={styles.textWrapper}>
          <Text>{title.slice(0, 10)}</Text>
          <Text>{id}</Text>
        </View>
      </View>
      <View>
        <Image source={{ uri: url }} style={styles.mainImg} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 10,
    marginVertical: 8,
  },

  textWrapper: {
    flexDirection: 'column',
    marginLeft: 15,
  },

  thumbnailImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  mainImg: {
    width: windowWidth,
    height: windowWidth,
  },
});

export default Feed;
