import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function todoInputHandler(text) {
    setTodoText(text);
  }

  function addTodoHandler() {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: uuid.v4(),
        text: todoText,
      },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.todoList}>
        <FlatList
          data={todos}
          renderItem={(itemObject) => {
            return (
              <View style={styles.todoItemContainer}>
                <Text style={styles.todoItemText}>{itemObject.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type todo activities.."
          style={styles.textInput}
          onChangeText={todoInputHandler}
        />
        <Button title="Add Todo!" onPress={addTodoHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 24,
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#aaa",
    paddingTop: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  todoList: {
    flex: 1,
  },
  todoItemContainer: {
    backgroundColor: "#eee",
    padding: 10,
    marginBottom: 6,
    borderRadius: 6,
  },
  todoItemText: {
    color: "#333",
  },
});
