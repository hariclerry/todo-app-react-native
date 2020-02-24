import React from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const TodoItems = () => {
  const todoData = [
    {
      id: '1',
      title: 'React-native',
      completed: false
    },
    {
      id: '2',
      title: 'NodeJs',
      completed: true
    },
    {
      id: '3',
      title: 'VueJs',
      completed: true
    },
    {
      id: '4',
      title: 'Machine learning',
      completed: true
    }
  ];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={styles.container}>
      <Text>Lists of Todos</Text>
        <FlatList
          data={todoData}
          renderItem={({ item }) => {
            const completedItem = item.completed == true ? 'Pending' : 'Completed'
            const completedStyles = item.completed ? styles.pending : styles.completed
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={completedStyles}>{completedItem}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
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

export default TodoItems;
