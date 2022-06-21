import { StyleSheet, View, Dimensions, Button, Text } from "react-native";
import React, { useState, useEffect } from "react";
import MainTitle from "../shared/MainTitle";
import Input from "../shared/Input";
import * as DocumentPicker from "expo-document-picker";
import MainButton from "../shared/MainButton";
import { Formik } from "formik";
import * as yup from "yup";
import AppLoader from "../shared/AppLoader";
import { formPost } from "./formpost";

const SCREEN_WIDTH = Dimensions.get("window").width;

const complaintDataSchema = yup.object({
  // userfile1: yup.string().required("রশিদ সংযুক্ত করুন*"),
  inst_name: yup.string().required("প্রতিষ্ঠানের নাম আবশ্যক*"),
  inst_address: yup.string().required("প্রতিষ্ঠানের ঠিকানা আবশ্যক*"),
  complaint: yup.string().required("অভিযোগের বিবরণ আবশ্যক*"),
  name: yup.string().required("অভিযোগকারীর নাম আবশ্যক*"),
  f_name: yup.string().required("পিতার নাম আবশ্যক*"),
  m_name: yup.string().required("মাতার নাম আবশ্যক*"),
  p_address: yup.string().required("বর্তমান ঠিকানা আবশ্যক*"),
  permanentAddress: yup.string().required("স্থায়ী ঠিকানা আবশ্যক*"),
  occupation: yup.string().required("পেশার নাম আবশ্যক*"),
  mobile: yup.number().required("মোবাইল নম্বর আবশ্যক*"),
  email: yup.string().email("অনুগ্রহ করে সঠিক ই-মেইল প্রদান করুন*"),
  nid: yup.number().required("জাতীয় পরিচয়পত্র নং আবশ্যক*"),
});

const ComplaintInfo = ({ navigation }) => {
  const [userfile1, setUserfile1] = useState();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setUserfile1(result);
    // console.log(result);
  };

  // const [isSubmitted, setIsSubmitted] = useState(true);
  const [loading, setLoading] = useState(false);

  const [endpoint, setEndpoint] = useState();

  // call for form submission API
  useEffect(() => {
    const uri = `https://exabytelab.com.bd/vokta/rest/api/url`;
    fetch(uri)
      .then((res) => res.json())
      // .then((data) => console.log(data[0].url));
      // set Data to endpoint//
      .then((data) => setEndpoint(data[0].url));
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

    if (userfile1) {
      num_att = 1;
      formData.append("userfile1", {
        type: userfile1.mimeType,
        uri: userfile1.uri,
        name: userfile1.name,
      });
    } else num_att = 0;

    /* append input field values to formData */
    for (let value in values) {
      formData.append(value, values[value]);
    }

    formData.append("num_att", num_att);

    var u_id = "1";
    // static u_id//
    formData.append("u_id", u_id);
    /* Now POST your formData: */
    // formPost(endpoint, formData);
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
            inst_name: "asas",
            inst_address: "asasa",
            c_address: "ddwdwd",
            inst_address: "effee",
            complaint: "asass",
            name: "asasa",
            f_name: "saas",
            m_name: "asas",
            p_address: "ssasa",
            permanentAddress: "sasa",
            occupation: "asasa",
            mobile: "12121212",
            email: "asasa@dncrp.gov.bd",
            nid: "121212",
          }}
          validationSchema={complaintDataSchema}
          onSubmit={(values, actions) => {
            console.log(userfile1);
            if (userfile1) {
              formSubmission(values, actions);
            } else alert("রশিদ সংযুক্ত করুন!");
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
                />
                {/* {props.touched.userfile1 && props.errors.userfile1 && (
                  <Text style={styles.errorMessage}>
                    {props.errors.userfile1}
                  </Text>
                )} */}
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
                  onChangeText={props.handleChange("p_address")}
                  onBlur={props.handleBlur("p_address")}
                  multiline={true}
                  placeholder="বর্তমান ঠিকানা"
                  value={props.values.p_address}
                />
                {props.touched.p_address && props.errors.p_address && (
                  <Text style={styles.errorMessage}>
                    {props.errors.p_address}
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
