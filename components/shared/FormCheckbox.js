import { View, Text } from "react-native";
import React from "react";
import { Checkbox, Center } from "native-base";

const FormCheckbox = () => {
  return (
    <Center>
      <Checkbox onChange={props.onChange} value={props.value}>
        <Text>আমি স্বীকার করছি উপরের সকল তথ্য সঠিক</Text>
      </Checkbox>
    </Center>
  );
};

export default Checkbox;
