//import libraries to create components

import React from "react";
import { View , Text,StyleSheet} from "react-native";
import HelloWorld from "./components/HelloWorld";


//create component that return some jsx/ simple function

const App = () => {
  return (

    <View>

<HelloWorld></HelloWorld>
<HelloWorld></HelloWorld>

      <Text style={styles.textStyle}> From appjs</Text>
      <HelloWorld></HelloWorld>
    
    </View>
  )
}

//Create Stylesheet to style the component
const styles = StyleSheet.create({
  textStyle: {
      color: "white",
      textAlign: "center",
      backgroundColor: "red",
      marginTop:50,
  }
});


//export the file, so that we can use it enywhere in our app
export default App;