import { View, TextInput } from "react-native";
import Button from "@/components/atoms/button";
import Nametext from "@/components/atoms/Label";
import Photo from "../atoms/photo";
import Message from "../atoms/message";

export default function InputForm({ textForMessage, textForButton, textForPlaceholder}) {
    return (
        <View
            style={{
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                borderWidth: 4,
                borderRadius: 30,
                padding: 30,
                paddingBottom: 30,
                backgroundColor: "lightblue"

                
            }}
        >
            {/* <Label messageText={textForMessage} />
            <TextInput defaultValue={textForPlaceholder} />
            <Button buttonText={textForButton} /> */}
            <Photo /> 
            <Nametext messageText="Deluka" />
            <Message messagepost="This is a Post of Post...           Malone" />
        </View>
    )
}