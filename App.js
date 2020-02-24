import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes/todoStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import TodoItems from './screens/todoView';
import AboutTodo from './screens/aboutTodo';

const Stack = createStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Todo" component={TodoItems} />
        <Stack.Screen name="About" component={AboutTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
