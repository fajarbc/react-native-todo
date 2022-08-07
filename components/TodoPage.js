import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import TodoInput from "./TodoInput";
import TodoItemList from "./TodoItemList";

function TodoPage(props) {
  const [todos, setTodos] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  function addTodoHandler(text) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: uuid.v4(),
        text: text,
      },
    ]);
  }

  function onTodoItemDelete(todoItem) {
    setTodos((currentTodos) => {
      return currentTodos.filter((item) => item.id !== todoItem.id);
    });
  }

  function showAddTodoModal() {
    setModalVisibility(true);
  }

  function hideAddTodoModal() {
    setModalVisibility(false);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.todoList}>
        <TodoItemList data={todos} onItemPress={onTodoItemDelete} />
      </View>

      <Pressable onPress={showAddTodoModal} style={styles.buttonAdd}>
        <Text style={styles.buttonAddText}>ADD</Text>
      </Pressable>

      <TodoInput
        visible={modalVisibility}
        onPress={addTodoHandler}
        onClose={hideAddTodoModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 24,
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#EEB76B",
  },
  todoList: {
    flex: 1,
    marginTop: 24,
  },
  buttonAdd: {
    backgroundColor: "#E2703A",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonAddText: {
    color: "#FFF",
  },
});

export default TodoPage;
