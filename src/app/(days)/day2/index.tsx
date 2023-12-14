import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const day2 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>day2</Text>
      <Link href={"/day2/onboarding"} asChild>
      <Button title="Go to onboarding" />
      </Link>
    </View>
  );
};

export default day2;
