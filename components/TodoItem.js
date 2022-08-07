import { StyleSheet, Text, Pressable } from "react-native";
function TodoItem(props) {
  return (
    <Pressable
      onPress={props.onPress.bind(this, props.item)}
      android_ripple={{ color: "#E2703A" }}
      style={({ pressed }) => {
        return pressed ? styles.itemOnPress : styles.todoItemContainer;
      }}
    >
      <Text style={styles.todoItemText}>{props.item.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  todoItemContainer: {
    backgroundColor: "#F5E8E4",
    padding: 10,
    marginBottom: 6,
    borderRadius: 6,
  },
  itemOnPress: {
    padding: 10,
    marginBottom: 6,
    borderRadius: 6,
    backgroundColor: "#DDD",
  },
  todoItemText: {
    color: "#993300",
  },
});

export default TodoItem;
