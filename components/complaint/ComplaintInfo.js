import { StyleSheet, View, Dimensions, Text } from "react-native";
import React, { useState, useEffect } from "react";
import MainTitle from "../shared/MainTitle";
import Input from "../shared/Input";
import MainButton from "../shared/MainButton";
import { Formik } from "formik";
import * as yup from "yup";
import AppLoader from "../shared/AppLoader";
import "react-native-get-random-values";
const { v4: uuidv4 } = require("uuid");

import {
  FormControl,
  Select,
  CheckIcon,
  VStack,
  HStack,
  TextArea,
} from "native-base";
import ImageList from "./ImageList";

const SCREEN_WIDTH = Dimensions.get("window").width;

const complaintDataSchema = yup.object({
  inst_name: yup.string().required("প্রতিষ্ঠানের নাম আবশ্যক*"),
  inst_address: yup.string().required("প্রতিষ্ঠানের ঠিকানা আবশ্যক*"),
  complaint: yup.string().required("অভিযোগের বিবরণ আবশ্যক*"),
  name: yup.string().required("অভিযোগকারীর নাম আবশ্যক*"),
  f_name: yup.string().required("পিতার নাম আবশ্যক*"),
  m_name: yup.string().required("মাতার নাম আবশ্যক*"),
  p_address: yup.string().required("স্থায়ী ঠিকানা আবশ্যক*"),
  c_address: yup.string().required("বর্তমান ঠিকানা আবশ্যক*"),
  occupation: yup.string().required("পেশার নাম আবশ্যক*"),
  mobile: yup.number().required("মোবাইল নম্বর আবশ্যক*"),
  email: yup.string().email("অনুগ্রহ করে সঠিক ই-মেইল প্রদান করুন*"),
  nid: yup.number().required("জাতীয় পরিচয়পত্র নং আবশ্যক*"),
});

const ComplaintInfo = ({ navigation }) => {
  // get device ID and set it as USER ID

  let uuid = uuidv4();
  // await SecureStore.setItemAsync("secure_deviceid", JSON.stringify(uuid));
  // let fetchUUID = await SecureStore.getItemAsync("secure_deviceid");
  JSON.stringify(uuid);
  // console.log(uuid);
  const [userFiles, setUserFiles] = useState([]);
  // console.log(userFiles);

  const [loading, setLoading] = useState(false);

  const [endpoint, setEndpoint] = useState();

  // state for selecting officeAddress //
  const [officeAddress, setOfficeAddress] = useState([]);
  // console.log(officeAddress);

  // state for selecting officeAddress value => email_address//
  let [officeAddressValue, setOfficeAddressValue] = useState();
  let [selectedOfficeIndex, setSelectedOfficeIndex] = useState();

  useEffect(() => {
    // call for form submission API
    const uri = `https://exabytelab.com.bd/vokta/rest/api/url`;
    fetch(uri)
      .then((res) => res.json())
      // .then((data) => console.log(data[0].url));
      .then((data) => setEndpoint(data[0].url));

    // call office address API
    const officeUri = `https://exabytelab.com.bd/vokta/rest/api/office_details`;
    fetch(officeUri)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setOfficeAddress(data));
  }, []);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("home");
    }, 3000);
  };

  const formSubmission = (values, actions) => {
    actions.resetForm();
    // console.log(values);
    /* Then create a new FormData obj */
    let formData = new FormData();
    /* FormData requires name: id */
    formData.append("VO", "complain");

    var num_att;

    if (userFiles) {
      num_att = userFiles.length;
      userFiles.forEach((userfile, index) => {
        // console.log(userfile);
        formData.append(`userfile${index + 1}`, {
          type: userfile.mimeType,
          uri: userfile.uri,
          name: userfile.name,
        });
      });
    } else num_att = 0;

    if (officeAddressValue) {
      console.log(officeAddressValue);
      formData.append(
        "officeAddressValue_email",
        officeAddressValue.email_address
      );
    }

    /* append input field values to formData */
    for (let value in values) {
      formData.append(value, values[value]);
    }

    formData.append("num_att", num_att);

    // device u_id//
    formData.append("u_id", uuid);
    /* Now POST your formData: */
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    xhr.open("POST", endpoint);
    xhr.setRequestHeader("Content-Type", "multipart/form-data");
    console.log(formData);
    xhr.send(formData);

    startLoading();
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <AppLoader />
        </View>
      ) : (
        <Formik
          initialValues={{
            inst_name: "Vokta",
            inst_address: "Dhaka",
            complaint: "Not good product",
            name: "Alim",
            f_name: "father",
            m_name: "mother",
            c_address: "Badda",
            p_address: "Khulna",
            occupation: "Developer",
            mobile: "01222333555",
            email: "alim@dncrp.gov.bd",
            nid: "1234567895",
          }}
          validationSchema={complaintDataSchema}
          onSubmit={(values, actions) => {
            if (userFiles.length > 0 && officeAddressValue) {
              formSubmission(values, actions);
            } else if (!officeAddressValue) {
              alert("কার্যালয় নির্বাচন আবশ্যক!");
            } else if (userFiles.length < 1) {
              alert("রশিদ সংযুক্ত করুন!");
            }
          }}
        >
          {(props) => (
            <View>
              {/* complain about */}
              <View>
                <MainTitle>অভিযোগ</MainTitle>
              </View>

              <View style={{ marginTop: 15 }}>
                <FormControl.Label paddingLeft="22px">
                  প্রমাণস্বরূপ রশিদের ছবি সংযুক্ত করুন
                </FormControl.Label>
                <ImageList userFiles={userFiles} setUserFiles={setUserFiles} />
              </View>

              <View style={styles.inputContainer}>
                <Input
                  onChangeText={props.handleChange("inst_name")}
                  onBlur={props.handleBlur("inst_name")}
                  placeholder="অভিযুক্ত প্রতিষ্ঠানের নাম"
                  value={props.values.inst_name}
                />
                {props.touched.inst_name && props.errors.inst_name && (
                  <Text style={styles.errorMessage}>
                    {props.errors.inst_name}
                  </Text>
                )}
                <Input
                  onChangeText={props.handleChange("inst_address")}
                  onBlur={props.handleBlur("inst_address")}
                  placeholder="অভিযুক্ত প্রতিষ্ঠানের ঠিকানা"
                  value={props.values.inst_address}
                />
                {props.touched.inst_address && props.errors.inst_address && (
                  <Text style={styles.errorMessage}>
                    {props.errors.inst_address}
                  </Text>
                )}

                <HStack paddingTop="15px" paddingBottom="5px">
                  <VStack justifyContent="flex-start" alignItems="center">
                    <FormControl paddingLeft="22px">
                      <FormControl.Label>
                        কার্যালয় নির্বাচন করুন
                      </FormControl.Label>
                      <Select
                        minWidth="200"
                        accessibilityLabel="কার্যালয় সমূহ"
                        placeholder="কার্যালয় সমূহ"
                        _selectedItem={{
                          bg: "white",
                          endIcon: <CheckIcon size={5} />,
                        }}
                        selectedValue={selectedOfficeIndex}
                        value={props.values.officeAddressValue}
                        onValueChange={(itemValue) => {
                          console.log(itemValue);
                          setOfficeAddressValue(officeAddress[itemValue]);
                          setSelectedOfficeIndex(itemValue);
                        }}
                        mt="0.5"
                      >
                        {officeAddress.map((address, idx) => (
                          <Select.Item
                            key={address.sl}
                            label={address.Area}
                            value={idx}
                          />
                        ))}
                      </Select>
                    </FormControl>
                  </VStack>
                </HStack>
                <TextArea
                  h={40}
                  p={3}
                  w="85%"
                  totalLines={6}
                  isDisabled
                  backgroundColor="white"
                  marginLeft="20px"
                  marginTop="20px"
                  marginBottom="5px"
                  placeholder="কার্যালয় ঠিকানা"
                  value={officeAddressValue && officeAddressValue.address}
                />
                <Input
                  onChangeText={props.handleChange("complaint")}
                  onBlur={props.handleBlur("complaint")}
                  placeholder="অভিযোগের বিবরণ"
                  value={props.values.complaint}
                />
                {props.touched.complaint && props.errors.complaint && (
                  <Text style={styles.errorMessage}>
                    {props.errors.complaint}
                  </Text>
                )}
              </View>

              {/* complainer */}
              <View style={styles.emptyView}></View>
              <MainTitle style={styles.text}>অভিযোগকারীর তথ্য</MainTitle>

              <View style={styles.inputContainer}>
                <Input
                  onChangeText={props.handleChange("name")}
                  onBlur={props.handleBlur("name")}
                  placeholder="অভিযোগকারীর নাম"
                  value={props.values.name}
                />
                {props.touched.name && props.errors.name && (
                  <Text style={styles.errorMessage}>{props.errors.name}</Text>
                )}
                <View style={styles.nameInputContainer}>
                  <Input
                    onChangeText={props.handleChange("f_name")}
                    onBlur={props.handleBlur("f_name")}
                    placeholder="পিতার নাম"
                    value={props.values.f_name}
                  />
                  <Input
                    onChangeText={props.handleChange("m_name")}
                    onBlur={props.handleBlur("m_name")}
                    placeholder="মাতার নাম"
                    value={props.values.m_name}
                  />
                </View>
                {props.touched.f_name && props.errors.f_name && (
                  <Text style={styles.errorMessage}>{props.errors.f_name}</Text>
                )}
                {props.touched.m_name && props.errors.m_name && (
                  <Text style={styles.errorMessage}>{props.errors.m_name}</Text>
                )}
                <Input
                  onChangeText={props.handleChange("c_address")}
                  onBlur={props.handleBlur("c_address")}
                  multiline={true}
                  placeholder="বর্তমান ঠিকানা"
                  value={props.values.c_address}
                />
                {props.touched.c_address && props.errors.c_address && (
                  <Text style={styles.errorMessage}>
                    {props.errors.c_address}
                  </Text>
                )}
                <Input
                  onChangeText={props.handleChange("p_address")}
                  onBlur={props.handleBlur("p_address")}
                  multiline={true}
                  placeholder="স্থায়ী ঠিকানা"
                  value={props.values.p_address}
                />
                {props.touched.p_address && props.errors.p_address && (
                  <Text style={styles.errorMessage}>
                    {props.errors.p_address}
                  </Text>
                )}
                <View style={styles.nameInputContainer}>
                  <Input
                    onChangeText={props.handleChange("occupation")}
                    onBlur={props.handleBlur("occupation")}
                    placeholder="পেশা"
                    value={props.values.occupation}
                  />

                  <Input
                    onChangeText={props.handleChange("mobile")}
                    onBlur={props.handleBlur("mobile")}
                    placeholder="মোবাইল নম্বর"
                    keyboardType="numeric"
                    value={props.values.mobile}
                  />
                </View>
                {props.touched.occupation && props.errors.occupation && (
                  <Text style={styles.errorMessage}>
                    {props.errors.occupation}
                  </Text>
                )}
                {props.touched.mobile && props.errors.mobile && (
                  <Text style={styles.errorMessage}>{props.errors.mobile}</Text>
                )}
                <Input
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  placeholder="ই-মেইল(যদি থাকে)"
                  value={props.values.email}
                  keyboardType="email-address"
                />
                {props.touched.email && props.errors.email && (
                  <Text style={styles.errorMessage}>{props.errors.email}</Text>
                )}
                <Input
                  onChangeText={props.handleChange("nid")}
                  onBlur={props.handleBlur("nid")}
                  placeholder="জাতীয় পরিচয়পত্র নং"
                  keyboardType="numeric"
                  value={props.values.nid}
                />
                {props.touched.nid && props.errors.nid && (
                  <Text style={styles.errorMessage}>{props.errors.nid}</Text>
                )}
              </View>

              <MainButton
                onPress={props.handleSubmit}
                style={styles.mainButton}
                title="অভিযোগ করুন"
              />
            </View>
          )}
        </Formik>
      )}
    </View>
  );
};

export default ComplaintInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
  },
  nameInputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mainButton: {
    marginLeft: "5%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
  text: {
    paddingTop: 20,
  },
  errorMessage: {
    marginLeft: "6%",
    color: "crimson",
    fontWeight: "600",
    marginTop: 7,
    paddingBottom: 8,
  },
  emptyView: {
    marginTop: 20,
  },
});
