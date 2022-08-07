import { RootSiblingParent } from "react-native-root-siblings";
import TodoPage from "./components/TodoPage";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <RootSiblingParent>
        <TodoPage />
      </RootSiblingParent>
    </>
  );
}
