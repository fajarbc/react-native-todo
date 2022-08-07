import { StyleSheet, View, Text } from "react-native";
function TodoItem(props) {
  return (
    <View style={styles.todoItemContainer}>
      <Text style={styles.todoItemText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default TodoItem;
