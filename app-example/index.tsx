import {View} from "react-native";
import Label from "@/atoms/Label";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Label/>
        </View>
    )
}