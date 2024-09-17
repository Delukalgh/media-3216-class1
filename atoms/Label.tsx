import {Text, View} from "react-native"

export default function Label({ labelText }){

    return(
        <View>
            <Text style={{
                fontSize: 50
            }}>
                {labelText}
            </Text>
        </View>
    )
}