//import libraries to create components

import React from "react";
import { StyleSheet, Text, View } from "react-native";

//create component that return some jsx/ simple function

const HelloWorld = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Hello world</Text>
        </View>
    )
}


//Create Stylesheet to style the component
const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        textAlign: "center",
        backgroundColor: "black",
        margin: 5,
    }
});


//export the file, so that we can use it enywhere in our app
export default HelloWorld;