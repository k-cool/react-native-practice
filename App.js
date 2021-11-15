import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './components/Home/Home';
import FormTodoList from './components/TodoList/FormTodoList';
import FeedForm from './components/Feed/FeedForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name='TodoList'
            component={FormTodoList}
            options={{ title: 'Todo List' }}
          />
          <Stack.Screen
            name='Feed'
            component={FeedForm}
            options={{ title: 'Feed' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
