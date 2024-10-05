import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  return (
    <View style={styles.task}>
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskStatus}>
          {task.isDone ? 'Status: Done' : 'Status: Due'}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Switch 
          value={task.isDone} 
          onValueChange={onToggleStatus} 
        />
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: { 
    padding: 10, 
    backgroundColor: '#fff', 
    borderRadius: 5, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  taskContent: { 
    flex: 1, 
    marginRight: 10 
  },
  taskTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  taskStatus: { 
    fontSize: 14, 
    color: '#555',
    marginTop: 5
  },
  actionContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  deleteText: { 
    color: 'red', 
    fontWeight: 'bold', 
    marginLeft: 10 
  }
});

export default TaskItem;