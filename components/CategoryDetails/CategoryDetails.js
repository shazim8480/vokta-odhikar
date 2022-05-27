// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

//import for the animation of Collapse and Expand
import * as Animatable from "react-native-animatable";

//import for the Accordion view
import Accordion from "react-native-collapsible/Accordion";
// import FactsCollapsible from "./FactsCollapsible";

const CategoryDetails = ({ facts }) => {
  // default active selector
  const [activeSections, setActiveSections] = useState([]);

  // accordion click on change modifier
  const setSections = (sections) => {
    console.log(sections.length);
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.subtitle}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    // console.log(section.description);
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text
          animation={isActive ? "fadeIn" : undefined}
          style={{ textAlign: "left", fontWeight: "600", color: "gray" }}
        >
          {section.description}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  // main content
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container} />
          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={facts}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //Do you want to expand multiple at a time or single at a time
            renderHeader={renderHeader}
            //Header Component(View) to render
            renderContent={renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={setSections}
            //setting the state of active sections
          />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F5FCFF",
    padding: 15,
    marginBottom: 15,
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    marginLeft: 13,
    fontWeight: "700",
  },
  content: {
    padding: 25,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
});
