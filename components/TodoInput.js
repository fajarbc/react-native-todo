import { StyleSheet, TextInput, Button, View } from "react-native";
import { useState } from "react";
import Toast from "react-native-root-toast";

function TodoInput(props) {
  const [todoText, setTodoText] = useState("");

  function todoInputHandler(text) {
    setTodoText(text);
  }

  function onPressHandler() {
    if (todoText.length < 1)
      return Toast.show("activity can not be blank", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
      });

    props.onPress(todoText);
    setTodoText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Type todo activity.."
        style={styles.textInput}
        onChangeText={todoInputHandler}
        value={todoText}
      />
      <Button title="Add Todo!" onPress={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default TodoInput;
