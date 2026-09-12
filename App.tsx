import { useState } from "react";
import { StyleSheet, View, Pressable, Text, FlatList } from "react-native";
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

  function cancelModalHandler() {
    setModalIsVIsible(false);
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setModalIsVIsible(true)}
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.addButtonPressed,
        ]}
      >
        <Text style={styles.addButtonText}>+ 할일 추가하기</Text>
      </Pressable>
      <TodoInput
        addTodoList={addTodoList}
        visible={modalIsVisible}
        cancelModalHandler={cancelModalHandler}
      />
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
    padding: 16,
    paddingTop: 60,
    backgroundColor: "#EAF2FF",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  addButton: {
    backgroundColor: "#2F6FED",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#2F6FED",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  addButtonPressed: {
    backgroundColor: "#245ACB",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  listContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  listContent: {
    gap: 12,
    paddingBottom: 20,
  },
});
