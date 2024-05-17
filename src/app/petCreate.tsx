import { Button, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import useCollection from "../firebase/hooks/useCollection";
import Card from "../components/containers/Card";
import { useRouter } from "expo-router";
import FormInput from "../components/FormInput";

type Pet = {
  id?: string;
  type: string;
  name: string;
  age: number;
};

export default function petCreate() {
  const { create } = useCollection<Pet>("pets");

  const router = useRouter();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState(0);

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleTypeChange = (type: string) => {
    setType(type);
  };

  const handleAgeChange = (age: number | string) => {
    setAge(Number(age));
  };

  const handleSubmit = async () => {
    const generatedId = await create({
      name: name,
      type: type,
      age: age,
    });
    router.push("/petList");
  };

  return (
    <View>
      <Background>
        <HeaderWithTitle title="Pet Create" />
        <View style={styles.view}>
          <Card>
            <FormInput
              label="Name"
              value={name}
              onChangeText={handleNameChange}
              placeholder="Mr. Meow Meow"
              placeholderTextColor="#999"
            />

            <FormInput
              label="Type"
              value={type}
              onChangeText={handleTypeChange}
              placeholder="Cat"
              placeholderTextColor="#999"
            />
            <FormInput
              label="Age"
              value={age.toString()}
              onChangeText={handleAgeChange}
              placeholder="Age"
              keyboardType="numeric"
            />
            <Button title="Submit" onPress={handleSubmit} />
          </Card>
        </View>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    color: "#fff",
  },
  view: {
    margin: 25,
  },
  container: {
    padding: 4,
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 13,
  },
  focusContainer: {
    borderBottomColor: "#cdab8f",
  },
  text: {
    color: "#cdab8f",
  },
});
