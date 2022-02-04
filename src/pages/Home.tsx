import React, { useState } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    if (newTaskTitle === "") {
      return ToastAndroid.show("O campo não pode esta vazio", ToastAndroid.SHORT)
    }
    setTasks(oldState => [...oldState, data])
    console.log(tasks)
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    console.log(id)
    const updadedTasks = tasks.map(task => ({ ...task }))
    const foudItem = updadedTasks.find(item => item.id === id)
    if (!foudItem) {
      return;
    }
    foudItem.done = !foudItem.done
    setTasks(updadedTasks)

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})