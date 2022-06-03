import { StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Text,
  Center,
  VStack,
  Stack,
} from "native-base";

import styled from "styled-components/native";

const SCREEN_WIDTH = Dimensions.get("window").width;

// image container //

const ImageContainer = styled.View`
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_WIDTH / 2}px;
`;

const ContactInfo = ({ info }) => {
  return (
    <Box alignItems="center">
      <Box
        maxW={SCREEN_WIDTH}
        rounded="lg"
        overflow="hidden"
        backgroundColor="white"
        borderColor="coolGray.200"
        borderWidth="1"
        m="2"
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <ImageContainer>
              <Image
                style={{
                  width: SCREEN_WIDTH,
                  height: "100%",
                }}
                resizeMode="cover"
                source={info.image}
                alt="image"
              />
            </ImageContainer>
          </AspectRatio>
          <Center
            bg="green.900"
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {info.subtitle}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="sm" ml="-1">
              {info.address}
            </Heading>
          </Stack>
          <VStack
            alignItems="flex-start"
            space={3}
            justifyContent="space-between"
          >
            {info.phone != null && (
              <Text fontWeight="400" color="coolGray.600">
                <Text style={{ fontWeight: "600" }}>ফোন: </Text>
                {info.phone}
              </Text>
            )}
            {info.fax != null && (
              <Text fontWeight="400" color="coolGray.600">
                <Text style={{ fontWeight: "600" }}>ফ্যাক্স: </Text>
                {info.fax}
              </Text>
            )}
            {info.mobile != null && (
              <Text fontWeight="400" color="coolGray.600">
                <Text style={{ fontWeight: "600" }}>মোবাইল: </Text>
                {info.mobile}
              </Text>
            )}
            {info.hotline != null && (
              <Text fontWeight="400" color="coolGray.600">
                <Text style={{ fontWeight: "600" }}>হটলাইন: </Text>
                {info.hotline}
              </Text>
            )}
            {info.email != null && (
              <Text fontWeight="400" color="coolGray.600">
                <Text style={{ fontWeight: "600" }}>ই-মেইল: </Text>
                {info.email}
              </Text>
            )}
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({});
