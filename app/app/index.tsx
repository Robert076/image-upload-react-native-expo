import { View, Image, Button } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const index = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // you can also do ['images', 'videos']
      allowsEditing: false, // up to you
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default index;
