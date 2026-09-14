import { StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";

export default function StartGameScreen() {
  return (
    <View style={styles.confirmContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonWrapper}>
        <View style={{ flex: 1 }}>
          <Button>Reset</Button>
        </View>
        <View style={{ flex: 1 }}>
          <Button>Confirm</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  confirmContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 15,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 70,
    width: 70,
    fontSize: 32,
    padding: 10,
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    textAlign: "center",
    fontWeight: "bold",
    color: "yellow",
    marginVertical: 8,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
