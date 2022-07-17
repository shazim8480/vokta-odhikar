import { View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { IconButton, HStack, VStack } from "native-base";
const SCREEN_WIDTH = Dimensions.get("window").width;

const ImageList = (props) => {
  // const [userFiles, setUserFiles] = useState([]);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
    });
    // setUserFiles(result);
    props.setUserFiles((scr) => {
      return [...scr, result];
    });
    // console.log(result);
    console.log(props.userFiles);
  };

  const renderItem = (item, index) => {
    // console.log(item);
    return (
      <Image
        style={{
          width: SCREEN_WIDTH / 4,
          height: SCREEN_WIDTH / 3,
          borderRadius: 5,
        }}
        key={index}
        source={{ uri: item.item.uri }}
        resizeMode="contain"
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 18,
        borderRadius: 8,
        marginLeft: 20,
        marginTop: 5,
        backgroundColor: "white",
        width: SCREEN_WIDTH - 38,
      }}
    >
      <VStack justifyContent="space-around" alignItems="center">
        <IconButton
          onPress={pickDocument}
          icon={<AntDesign name="plussquareo" size={24} color="black" />}
        />
        <VStack>
          <HStack
            justifyContent="center"
            alignItems="center"
            marginTop="10px"
            padding="10px"
          >
            <Carousel
              layout={"default"}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              data={props.userFiles}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH / 3.5}
              itemHeight={SCREEN_WIDTH / 3}
              renderItem={renderItem}
            />
          </HStack>
        </VStack>
      </VStack>
    </View>
  );
};

export default ImageList;
