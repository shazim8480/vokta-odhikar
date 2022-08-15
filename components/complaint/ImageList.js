import { View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import DocumentPicker from "react-native-document-picker";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { IconButton, HStack, VStack } from "native-base";

const SCREEN_WIDTH = Dimensions.get("window").width;

const ImageList = ({ userFiles, setUserFiles }) => {
  const [updatedUserFiles, setUpdatedUserFiles] = useState(userFiles);
  // console.log(updatedUserFiles.length);

  /////// issue here: /// pickDocument does not work when updated selection//
  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.pickMultiple();
      setUserFiles(result);
      // setUserFiles((scr) => {
      //   return [...scr, result];
      // });
      // console.log(result);
      console.log(userFiles);
    } catch (error) {
      console.error(error);
    }
  };

  // onPress iconButton delete document handler //
  // ISSUE HERE : DOESN'T WORK //
  // setUpdatedUserFiles(
  //   updatedUserFiles.filter(
  //     (updatedItem) => updatedItem.name !== userFiles.name
  //   )
  // );
  const deleteDocument = (uri) => (e) => {
    setUserFiles(userFiles.filter((updatedItem) => updatedItem.uri !== uri));
    console.log(updatedUserFiles);
  };

  const renderItem = (item, index) => {
    // console.log(item);
    return (
      <VStack justifyContent="center" alignItems="center">
        <Image
          style={{
            width: SCREEN_WIDTH / 4,
            height: SCREEN_WIDTH / 3,
            borderRadius: 5,
            position: "relative",
          }}
          key={index}
          source={{ uri: item.item.uri }}
          resizeMode="contain"
        />
        {userFiles && (
          <IconButton
            onPress={deleteDocument}
            icon={<AntDesign name="delete" size={24} />}
            _icon={{
              color: "red",
            }}
          />
        )}
      </VStack>
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
            justifyContent="flex-start"
            alignItems="center"
            marginTop="10px"
            padding="10px"
          >
            <Carousel
              layout={"default"}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              data={userFiles}
              sliderWidth={SCREEN_WIDTH - 38}
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
