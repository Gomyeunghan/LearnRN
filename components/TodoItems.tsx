import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TodoItems({
  Todoitem,
  onDelelteItem,
}: {
  Todoitem: { todo: string; id: string };
  onDelelteItem: (id: string) => void;
}) {
  function deleteItem() {
    onDelelteItem(Todoitem.id);
  }
  return (
    <View style={styles.list}>
      <Pressable
        onPress={deleteItem}
        android_ripple={{ color: "#181818" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.listText}>{Todoitem.todo}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    borderWidth: 1,
    borderColor: "#427D9D",
    backgroundColor: "#427D9D",

    borderRadius: 5,
  },
  listText: {
    fontSize: 18,
    color: "white",
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
