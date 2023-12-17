import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0); //array destructuring
  const [newCount, setNewCount] = useState(0); //array destructuring
  useEffect(() => {
    // console.log(`Our count value is ${count}`)
    console.log(`Count changed`);
  }, [count]);
  //this useeffect only runs only if value changes between renders, if no array the code inside useeffect runs after every render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        color={"green"}
        title={"Decrease the count"}
        onPress={() => setCount(count - 1)}
      />
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          setNewCount(count + 1);
        }}
      />
      <Button
        color={"green"}
        title={"Decrease the count"}
        onPress={() => setNewCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 250,
  },
});
export default Counter;
