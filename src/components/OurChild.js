import React from "react";
import { View, Text } from "react-native";

const OurChild = (props) =>{
    const {message} =props
    // set prop as an argument in the component itself - we need the curly braces and name of prop to display it
    return(
<View style ={{height: 200, width: 200, backgroundColor: 'red'}}>
    <Text>{message}</Text> 
    {/* message is the name of the prop */}
</View>
    )
}

export default OurChild 