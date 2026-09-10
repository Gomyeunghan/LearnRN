import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function TodoInput({
  addTodoList,
  visible,
}: {
  addTodoList: (params: { todo: string }) => void;
  visible: boolean;
}) {
  const [todo, setTodo] = useState<string>("");
  function todoInputHandler(enterText: string) {
    setTodo(enterText);
  }

  function addTodoListHandler() {
    addTodoList({ todo });
    setTodo("");
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.todoInputContainer}>
        <TextInput
          placeholder="여기에 할일을 입력해주세요"
          onChangeText={todoInputHandler}
          value={todo}
          style={{ flex: 1 }}
        />
        <Button title="추가하기" onPress={addTodoListHandler} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  todoInputContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
});
