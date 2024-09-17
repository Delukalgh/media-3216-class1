import { Text, View } from "react-native";
import Profile from "@/molecules/Profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile/>
    </View>
  );
}
