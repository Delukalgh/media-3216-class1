import Label from "@/atoms/Label";
import Image from "@/atoms/Image";
import Bio from "@/atoms/Bio";
import { View } from "react-native";

export default function Profile() {
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
        }}>
            <Label labelText={"AleMunden"}/>
            <Image/>
            <Bio bioText={"Hi! I'm a 19 year old student from Vancouver, currently attending the British Columbia Institute of Technology!"}/>
        </View>
    )
}