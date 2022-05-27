import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ContactInfo from "../components/contact/ContactInfo";

const ContactScreen = ({ information }) => {
  // console.log(information);

  const renderData = (itemData) => {
    // itemData.item itself is an array. so it will map itself, not any array inside of it.
    return (
      <>
        <ContactInfo info={itemData.item} />
      </>
    );
  };

  return (
    <>
      <FlatList
        data={information}
        renderItem={renderData}
        key={(item) => item.id}
        scrollEnabled={true}
      />
    </>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
