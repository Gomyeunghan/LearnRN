import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function TodoInput({
  addTodoList,
  cancelModalHandler,
  visible,
}: {
  addTodoList: (params: { todo: string }) => void;
  cancelModalHandler: () => void;
  visible: boolean;
}) {
  const [todo, setTodo] = useState<string>("");
  function todoInputHandler(enterText: string) {
    setTodo(enterText);
  }

  function addTodoListHandler() {
    try {
      addTodoList({ todo });
      cancelModalHandler();
      setTodo("");
    } catch {
      alert("error");
    }
  }
  function cancelModal() {
    cancelModalHandler();
  }
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.todoInputContainer}>
          <Image
            source={require("../assets/image.webp")}
            style={styles.image}
          />
          <TextInput
            placeholder="여기에 할일을 입력해주세요"
            placeholderTextColor="#8FA8D9"
            onChangeText={todoInputHandler}
            value={todo}
            style={styles.input}
          />
          <View style={styles.buttonBox}>
            <Pressable
              onPress={addTodoListHandler}
              style={({ pressed }) => [
                styles.button,
                styles.primaryButton,
                pressed && styles.primaryButtonPressed,
              ]}
            >
              <Text style={styles.primaryButtonText}>추가하기</Text>
            </Pressable>
            <Pressable
              onPress={cancelModal}
              style={({ pressed }) => [
                styles.button,
                styles.secondaryButton,
                pressed && styles.secondaryButtonPressed,
              ]}
            >
              <Text style={styles.secondaryButtonText}>취소하기</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(20, 40, 80, 0.45)",
    padding: 20,
  },
  todoInputContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    gap: 16,
    shadowColor: "#0B2D6B",
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginInline: "auto",
    borderWidth: 3,
    borderColor: "#BFDBFE",
  },
  input: {
    borderColor: "#BFDBFE",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#123C7A",
    backgroundColor: "#F4F9FF",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#2F6FED",
  },
  primaryButtonPressed: {
    backgroundColor: "#245ACB",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: "#EAF2FF",
    borderWidth: 1.5,
    borderColor: "#BFDBFE",
  },
  secondaryButtonPressed: {
    backgroundColor: "#DCEAFF",
  },
  secondaryButtonText: {
    color: "#2F6FED",
    fontWeight: "700",
    fontSize: 15,
  },
});
