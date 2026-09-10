import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import TodoItems from "./components/TodoItems";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todolist, setTodolist] = useState<{ todo: string; id: string }[]>([]);
  const [modalIsVisible, setModalIsVIsible] = useState<boolean>(false);

  function addTodoList({ todo }: { todo: string }) {
    if (!todo) return;
    setTodolist((prev: { todo: string; id: string }[]) => [
      ...prev,
      { todo: todo, id: Math.random().toString() },
    ]);
  }

  function onDelelteItem(id: string) {
    setTodolist(() => todolist.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Button
        title="할일 추가하기"
        color={"blue"}
        onPress={() => setModalIsVIsible(true)}
      />
      <TodoInput addTodoList={addTodoList} visible={modalIsVisible} />
      <View style={styles.listContainer}>
        <FlatList
          renderItem={({ item }) => {
            return <TodoItems Todoitem={item} onDelelteItem={onDelelteItem} />;
          }}
          data={todolist}
          contentContainerStyle={styles.listContent}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
  },

  listContent: {
    gap: 20,
  },
});
