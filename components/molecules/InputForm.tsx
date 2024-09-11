import {View, TextInput} from "react-native"
import Button from "@/components/atoms/Button"

export default function InputForm({ labelText, buttonText, placeholderText }){
    return(
        <View>
            <Label labelText={labelText}/>
            <TextInput defaultValue={placeholderText}/>
            <Button buttonText={buttonText}/>
        </View>
    )
}