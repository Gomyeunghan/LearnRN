import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScareen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  function picknumberHandler({ pickNumber }: { pickNumber: number }) {
    console.log(pickNumber);
    setUserNumber(pickNumber);
  }

  return (
    <View style={styles.rootScreen}>
      {userNumber ? (
        <GameScreen />
      ) : (
        <StartGameScreen onPickNumber={picknumberHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "grey",
  },
});
