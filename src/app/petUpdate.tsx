import { Button, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import useCollection from "../firebase/hooks/useCollection";
import Card from "../components/containers/Card";
import FormInput from "../components/FormInput";
import { useRouter } from "expo-router";

type Pet = {
  id?: string;
  type: string;
  name: string;
  age: number;
};

export default function petUpdate() {
  const { update } = useCollection<Pet>("pets");

  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState(0);

  const handleIdChange = (id: string) => {
    setId(id);
  };

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
    await update(id, {
      name,
      type,
      age,
    });

    router.push("/petList");
  };

  return (
    <View>
      <Background>
        <HeaderWithTitle title="Pet Update" />
        <View style={styles.view}>
          <Card>
            <FormInput
              label="ID"
              value={id}
              onChangeText={handleIdChange}
              placeholder="88"
              placeholderTextColor="#999"
            />
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
              placeholderTextColor="#999"
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
});
