import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

function TodoItemList(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={(itemObject) => {
        return <TodoItem item={itemObject.item} onPress={props.onItemPress}/>;
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
    />
  );
}

export default TodoItemList;
