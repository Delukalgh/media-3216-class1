import {Button, View} from "react-native"

export default function myButton({ buttonText }){
    return(
        <View>
            <Button title={buttonText}/>
        </View>
    )
}