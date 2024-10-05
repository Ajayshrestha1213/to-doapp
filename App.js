import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, Switch } from 'react-native';
import TaskItem from './components/TaskItem';

const App = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isTaskDone, setIsTaskDone] = useState(false); 
  
  const addTask = () => {
    if (taskTitle.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), title: taskTitle, isDone: isTaskDone }]);
      setTaskTitle('');
      setIsTaskDone(false);
    }
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isDone: !task.isDone } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <View style={styles.statusContainer}>
        <Text>{isTaskDone ? 'Status: Done' : 'Status: Due'}</Text>
        <Switch
          value={isTaskDone}
          onValueChange={setIsTaskDone}
        />
      </View>
      <Button title="Add Task" onPress={addTask} disabled={!taskTitle.trim()} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleStatus={() => toggleTaskStatus(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    paddingTop: 60, 
    backgroundColor: '#f5f5f5' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    borderRadius: 5, 
    marginBottom: 10 
  },
  statusContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginBottom: 10 
  }
});

export default App;