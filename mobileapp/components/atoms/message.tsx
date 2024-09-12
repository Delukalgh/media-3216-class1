import { Text, View } from "react-native"

export default function Message({ messagepost }) {
    return (
        <View>
            <Text style={{color:"purple", fontWeight: 1000, fontSize: 50}}>
                {messagepost}
            </Text>
        </View>
    )
}