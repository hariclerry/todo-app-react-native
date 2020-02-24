import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const AboutTodo = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
      <Text>About Todos</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#e6e6e6',
    marginVertical: 4,
    marginHorizontal: 16
  },
  title: {
    fontSize: 25
  },
  completed: {
    width: 90,
    padding: 4,
    color: 'green',
    fontSize: 15,
    borderWidth: 0.2,
    borderRadius: 10,
  },
  pending: {
    width: 90,
    padding: 4,
    color: 'red',
    fontSize: 15,
    borderWidth: 0.2,
    borderRadius: 10,
  }
});

export default AboutTodo;
