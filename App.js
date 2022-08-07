import { StyleSheet, View } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import TodoInput from "./components/TodoInput";
import TodoItemList from "./components/TodoItemList";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(text) {
    console.log("addTodoHandler", text);
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: uuid.v4(),
        text: text,
      },
    ]);
  }

  return (
    <RootSiblingParent>
      <View style={styles.appContainer}>
        <View style={styles.todoList}>
          <TodoItemList todos={todos} />
        </View>
        <TodoInput onPress={addTodoHandler} />
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 24,
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  todoList: {
    flex: 1,
  },
});
