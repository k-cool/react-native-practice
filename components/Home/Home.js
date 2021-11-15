import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import logo from '../../assets/dino.png';

export default function Home({ navigation }) {
  const [selectedImg, setPickedImg] = useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('카메라 접근 허가가 필요합니다!');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled) return;
    setPickedImg(pickerResult);
  };

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('아이쿠! 지원하지 않는 환경이에요!');
      return;
    }
    await Sharing.shareAsync(selectedImg.uri);
  };

  return (
    <ScrollView style={styles.scrollWrapper}>
      <View style={styles.container}>
        <Image
          source={selectedImg ? { uri: selectedImg.uri } : logo}
          style={styles.dino}
        />
        <Text>크다란 스토어</Text>
        <Text style={styles.texta}>크다란 스토어에 오신것을 환영합니다!</Text>
        <TouchableOpacity
          onPress={selectedImg ? openShareDialogAsync : openImagePickerAsync}
          style={styles.touchBtn}
        >
          <Text>{selectedImg ? '공유하기' : '이미지 고르기'}</Text>
        </TouchableOpacity>
        <Button
          title='Todo List'
          onPress={() => navigation.navigate('TodoList')}
        />
        <Button title='Feed' onPress={() => navigation.navigate('Feed')} />
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },

  texta: {
    color: 'green',
    marginHorizontal: 20,
  },

  dino: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

  touchBtn: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
  },
});
