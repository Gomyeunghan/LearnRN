import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [todo, setTodo] = useState<string | undefined>("");
  const [todolist, setTodolist] = useState<String[]>([]);

  function todoInputHandler(enterText: string) {
    setTodo(enterText);
  }

  function addTodoList() {
    if (!todo) return;
    setTodolist((prev) => [...prev, todo]);
    setTodo("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.todoInputContainer}>
        <TextInput
          placeholder="여기에 할일을 입력해주세요"
          onChangeText={todoInputHandler}
          value={todo}
          style={{ flex: 1 }}
        />
        <Button title="추가하기" onPress={addTodoList} />
      </View>

      <View style={styles.listContainer}>
        {todolist.map((todo, i) => (
          <View style={styles.list}>
            <Text key={i} style={styles.listText}>
              {todo}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  listContainer: {
    display: "flex",
    gap: 10,
  },

  todoInputContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginBottom: 20,
  },
  list: {
    borderWidth: 1,
    borderColor: "#427D9D",
    backgroundColor: "#427D9D",
    padding: 6,
    borderRadius: 5,
  },

  listText: {
    fontSize: 18,
    color: "white",
  },
});
