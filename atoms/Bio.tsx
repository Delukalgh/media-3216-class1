import { Text, View } from "react-native";

export default function Bio({bioText}) {
    return(
        <View>
            <Text>
                {bioText}
            </Text>
        </View>
    )
}