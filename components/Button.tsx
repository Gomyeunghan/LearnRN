import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={() => console.log("press")}
        android_ripple={{ color: "#3b1026" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 6,
    backgroundColor: "skyblue", // ← 그림자가 붙을 "실체" 필요
    elevation: 4, // Android 그림자
    shadowColor: "black", // iOS 그림자
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // overflow: "hidden" 넣으면 안 됨!
  },
  buttonInnerContainer: {
    borderRadius: 6,
    overflow: "hidden", // 리플/눌림 효과 클리핑은 여기서
    padding: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
