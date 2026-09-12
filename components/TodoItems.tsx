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
    backgroundColor: "#2F6FED",
    borderRadius: 14,
    shadowColor: "#0B2D6B",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  listText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    padding: 14,
  },
  pressed: {
    opacity: 0.6,
  },
});
