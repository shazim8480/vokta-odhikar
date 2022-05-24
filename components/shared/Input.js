import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const Input = (props) => {
  return (
    <View style={{ ...props.styles, ...styles.inputContainer }}>
      <TextInput
        style={[props.style, styles.inputField]}
        placeholder={props.placeholder}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        {...props}
        height={props.height}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  inputField: {
    width: "100%",
    marginHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    width: "90%",
    height: 50,
    marginTop: 20,
    paddingLeft: 15,
    borderColor: "#ccc",
  },
  inputText: {
    padding: 10,
    fontSize: 16,
  },
});
