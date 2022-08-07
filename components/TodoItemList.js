import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

function TodoItemList(props) {
  return (
    <FlatList
      data={props.todos}
      renderItem={(itemObject) => {
        return <TodoItem text={itemObject.item.text} />;
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}

export default TodoItemList;
