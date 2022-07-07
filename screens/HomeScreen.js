import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "../constants/colors";
import Dashboard from "../components/dashboard/Dashboard";

import modalImage from "../assets/modal.jpg";

import { Modal, Center, AspectRatio } from "native-base";

const HomeBackground = styled.View`
  background-color: ${colors.body};
  width: 100%;
  flex: 1;
  flex-direction: row;
  padding: 20px;
  align-items: flex-start;
`;

const SCREEN_WIDTH = Dimensions.get("window").width;

// modal image container //

const ImageContainer = styled.View`
  margin-top: 10px;
`;

const HomeScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  const ModalShow = () => {
    return (
      <Center>
        <Modal size="xl" isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content>
            <Modal.Header>
              <Modal.CloseButton />
              <Modal.Body>
                <AspectRatio ratio={16 / 9}>
                  <ImageContainer>
                    <Image
                      style={{
                        width: SCREEN_WIDTH,
                        height: SCREEN_WIDTH / 1.7,
                      }}
                      resizeMode="cover"
                      source={modalImage}
                      alt="modalImage"
                    />
                  </ImageContainer>
                </AspectRatio>
              </Modal.Body>
            </Modal.Header>
          </Modal.Content>
        </Modal>
      </Center>
    );
  };

  useEffect(() => {
    setTimeout(() => setShowModal(true), 4000);
  }, []);

  return showModal == true ? (
    <HomeBackground>
      <ModalShow />
      <Dashboard navigation={navigation} />
    </HomeBackground>
  ) : (
    <HomeBackground>
      <Dashboard navigation={navigation} />
    </HomeBackground>
  );
};

export default HomeScreen;
