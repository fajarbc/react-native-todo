import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
import Toast from "react-native-root-toast";

function TodoInput(props) {
  const [todoText, setTodoText] = useState("");

  function todoInputHandler(text) {
    setTodoText(text);
  }

  function onAddTodo() {
    if (todoText.length < 1)
      return Toast.show("activity can not be blank", {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
      });

    props.onPress(todoText);
    setTodoText("");
    props.onClose();
  }
  function onClose() {
    props.onClose();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/todo-image.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Type todo activity.."
          style={styles.textInput}
          onChangeText={todoInputHandler}
          value={todoText}
        />
        <View style={styles.actionContainer}>
          <View style={styles.buttonContainer}>
            <Button title="Close" onPress={onClose} color="#9C3D54" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Add Todo!" onPress={onAddTodo} color="#E2703A"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    flex: 1,
    backgroundColor: "#EEB76B",
},
textInput: {
    borderWidth: 1,
    borderColor: "#FFDDBB",
    borderRadius: 6,
    color: "#993300",
    backgroundColor: "#FFDDBB",
    padding: 6,
    width: "100%",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  buttonContainer: {
    padding: 12,
    width: "40%",
  },
  image: {
    width: 120,
    height: 120,
    margin: 12,
  },
});

export default TodoInput;
