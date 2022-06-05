import { StyleSheet, View, Dimensions, Button, Text } from "react-native";
import React from "react";
import MainTitle from "../shared/MainTitle";
import Input from "../shared/Input";
import * as DocumentPicker from "expo-document-picker";
import MainButton from "../shared/MainButton";
import { Formik } from "formik";
import * as yup from "yup";

const SCREEN_WIDTH = Dimensions.get("window").width;

const complaintDataSchema = yup.object({
  companyName: yup.string().required("প্রতিষ্ঠানের নাম আবশ্যক*"),
  companyAddress: yup.string().required("প্রতিষ্ঠানের ঠিকানা আবশ্যক*"),
  complaint: yup.string().required("অভিযোগের বিবরণ আবশ্যক*"),
  name: yup.string().required("অভিযোগকারীর নাম আবশ্যক*"),
  fatherName: yup.string().required("পিতার নাম আবশ্যক*"),
  motherName: yup.string().required("মাতার নাম আবশ্যক*"),
  presentAddress: yup.string().required("বর্তমান ঠিকানা আবশ্যক*"),
  permanentAddress: yup.string().required("স্থায়ী ঠিকানা আবশ্যক*"),
  occupation: yup.string().required("পেশার নাম আবশ্যক*"),
  mobile: yup.number().required("মোবাইল নম্বর আবশ্যক*"),
  email: yup.string().email("অনুগ্রহ করে সঠিক ই-মেইল প্রদান করুন*"),
  nid: yup.number().required("জাতীয় পরিচয়পত্র নং আবশ্যক*"),
});

const ComplaintInfo = (props) => {
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    // alert(result);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          companyName: "",
          companyAddress: "",
          complaint: "",
          name: "",
          fatherName: "",
          motherName: "",
          presentAddress: "",
          permanentAddress: "",
          occupation: "",
          mobile: "",
          email: "",
          nid: "",
          document: pickDocument,
        }}
        validationSchema={complaintDataSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            {/* complain about */}
            <View>
              <MainTitle>অভিযোগ</MainTitle>
            </View>

            <View style={styles.inputContainer}>
              <MainButton
                style={styles.button}
                title="প্রমাণস্বরূপ ক্রয়ের ভাউচার/রশিদ সংযুক্ত করতে হবে"
                onPress={pickDocument}
                // value={props.values.pickDocument}
              />
              <Input
                onChangeText={props.handleChange("companyName")}
                onBlur={props.handleBlur("companyName")}
                placeholder="অভিযুক্ত প্রতিষ্ঠানের নাম"
                value={props.values.companyName}
              />
              {props.touched.companyName && props.errors.companyName && (
                <Text style={styles.errorMessage}>
                  {props.errors.companyName}
                </Text>
              )}
              <Input
                onChangeText={props.handleChange("companyAddress")}
                onBlur={props.handleBlur("companyAddress")}
                placeholder="অভিযুক্ত প্রতিষ্ঠানের ঠিকানা"
                value={props.values.companyAddress}
              />
              {props.touched.companyAddress && props.errors.companyAddress && (
                <Text style={styles.errorMessage}>
                  {props.errors.companyAddress}
                </Text>
              )}
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
                  onChangeText={props.handleChange("fatherName")}
                  onBlur={props.handleBlur("fatherName")}
                  placeholder="পিতার নাম"
                  value={props.values.fatherName}
                />
                <Input
                  onChangeText={props.handleChange("motherName")}
                  onBlur={props.handleBlur("motherName")}
                  placeholder="মাতার নাম"
                  value={props.values.motherName}
                />
              </View>
              {props.touched.fatherName && props.errors.fatherName && (
                <Text style={styles.errorMessage}>
                  {props.errors.fatherName}
                </Text>
              )}
              {props.touched.motherName && props.errors.motherName && (
                <Text style={styles.errorMessage}>
                  {props.errors.motherName}
                </Text>
              )}
              <Input
                onChangeText={props.handleChange("presentAddress")}
                onBlur={props.handleBlur("presentAddress")}
                multiline={true}
                placeholder="বর্তমান ঠিকানা"
                value={props.values.presentAddress}
              />
              {props.touched.presentAddress && props.errors.presentAddress && (
                <Text style={styles.errorMessage}>
                  {props.errors.presentAddress}
                </Text>
              )}
              <Input
                onChangeText={props.handleChange("permanentAddress")}
                onBlur={props.handleBlur("permanentAddress")}
                multiline={true}
                placeholder="স্থায়ী ঠিকানা"
                value={props.values.permanentAddress}
              />
              {props.touched.permanentAddress &&
                props.errors.permanentAddress && (
                  <Text style={styles.errorMessage}>
                    {props.errors.permanentAddress}
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
    fontWeight: "bold",
    marginTop: 7,
    paddingBottom: 8,
  },
  emptyView: {
    marginTop: 20,
  },
});
