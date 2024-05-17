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

export default function petDelete() {
  const { remove } = useCollection<Pet>("pets");

  const [id, setId] = useState("");
  const router = useRouter();

  const handleIdChange = (id: string) => {
    setId(id);
  };

  const handleDelete = async () => {
    await remove(id);
    router.push("/petList");
  };

  return (
    <View>
      <Background>
        <HeaderWithTitle title="Put it to sleep" />
        <View style={styles.view}>
          <Card>
            <FormInput
              label="ID to Delete"
              placeholder="88"
              placeholderTextColor="#999"
              value={id}
              onChangeText={handleIdChange}
            />
            <Button title="Delete" onPress={handleDelete} />
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
