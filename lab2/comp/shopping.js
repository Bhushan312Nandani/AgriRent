import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, Modal, StyleSheet, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function Shopping() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

 
  useEffect(() => {
    loadTasks();
  }, []);

 
  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      } 
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  
  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks:", error);
    }
  };

 
  const addTask = () => {
    if (taskInput.trim()) {
      const newTasks = [...tasks, { id: tasks.length + 1, task: taskInput }];
      setTasks(newTasks);
      saveTasks(newTasks); 
      setTaskInput("");
      setModalVisible(false);
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/shopping.png')}  
        style={styles.logo}
        resizeMode="contain"
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskText}>{item.task}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Enter task"
              placeholderTextColor="#aaa"
              value={taskInput}
              onChangeText={setTaskInput}
              style={styles.input}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
              <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  task: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  taskText: {
    color: "#000",
  },
  deleteButton: {
    backgroundColor: "#ff6666", 
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "red", 
    borderRadius: 30,
    elevation: 8,
  },
  fabText: {
    fontSize: 30,
    color: "#fff", 
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#00796b",
    marginBottom: 10,
    color: "#000",
  },
  addButton: {
    backgroundColor: "#00796b",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
  },
});
