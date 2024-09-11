import { View } from "react-native";
import Button from "@/components/atoms/button";
import Label from "@/components/atoms/Label";
import InputForm from "@/components/molecules/inputForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm 
        textForLabel="Me label"
        textForButton="Me button"
        textForPlaceholder="me placeholder"
      />
      <Button buttonText="Hey :)" />
      <Label labelText="YIPEEE!!!!" />

    </View>
  );
}
