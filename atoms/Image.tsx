import {View, Image} from "react-native"
import defaultProfile from "@/assets/images/gray-photo-placeholder-icon.jpg"

export default function myImage({  }){
    return(
        <View>
            <Image
                source={defaultProfile}
                style={{
                    width: 250,
                    height: 250
                }}
            />
        </View>
    )
}