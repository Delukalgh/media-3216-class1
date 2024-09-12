import { Image, View, StyleSheet} from "react-native"; 
import React from "react";
import Post from "@/assets/images/post-malone-ezgif.com-webp-to-jpg-converter.jpg"

export default function Photo({ photoForLab }) { 
    const styles = StyleSheet.create({
        tinyLogo: {
          width: 500,
          height: 500,
          borderRadius: 30
        },
      });

    return (
        <>
            <View>
            <Image
                style={styles.tinyLogo}
                source={Post
        }
      />
            </View>
        </>
    )
}