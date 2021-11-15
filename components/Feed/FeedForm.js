import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';

import FeedListHeader from './FeedListHeader';
import Feed from './Feed';

const FeedForm = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setPhotos(data.slice(0, 10)));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={photos}
        renderItem={({ item }) => <Feed item={item} />}
        ListHeaderComponent={<FeedListHeader photos={photos} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default FeedForm;
