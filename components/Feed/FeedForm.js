import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';

const FeedForm = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      `http://jsonplaceholder.typicode.com/photos
    `,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }, [photos]);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedForm;
