import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, Modal, StyleSheet, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Fitness() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  // Load tasks from AsyncStorage when the component mounts
  useEffect(() => {
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

    loadTasks();
  }, []);

  // Save tasks to AsyncStorage whenever the tasks state changes
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error("Failed to save tasks:", error);
      }
    };

    saveTasks();
  }, [tasks]);

  // Function to add a new task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, task: taskInput }]);
      setTaskInput("");
      setModalVisible(false);
    }
  };

  // Function to delete a task by its id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image
        source={require('../assets/dumbbell.png')}  // Use your local image path
        style={styles.logo}
        resizeMode="contain"
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskText}>{item.task}</Text>
            {/* Add a delete (cross) button */}
            <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Floating button to add task */}
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Modal for adding new task */}
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
    flexDirection: 'row', // Arrange task text and delete button in a row
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
    backgroundColor: "#ff6666", // Red background for delete button
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: "#fff", // White cross text
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
    backgroundColor: "#00796b", // Dark teal for the button
    borderRadius: 30,
    elevation: 8,
  },
  fabText: {
    fontSize: 30,
    color: "#fff", // White text for the FAB
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
