import { Text, View } from "react-native"

export default function Nametext({ messageText }) {
    return (
        <View>
            <Text style={{color:"purple", fontWeight: 1000, fontSize: 50}}>
                {messageText}
            </Text>
        </View>
    )
}