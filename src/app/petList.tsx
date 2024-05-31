import { View, StyleSheet, FlatList, Text } from "react-native";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import useCollection from "../firebase/hooks/useCollection";
import Card from "../components/containers/Card";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

type Pet = {
  id?: string;
  type: string;
  name: string;
  age: number;
};

export default function petList() {
  const { data } = useCollection<Pet>("pets");
  const app = useContext(AppContext);

  const renderItem = ({ item }: { item: Pet }) => (
    <View style={styles.container}>
      <Card>
        <Text style={[{color: app!.textColor}]}>ID: {item.id}</Text>
        <Text style={[{color: app!.textColor}]}>Name: {item.name}</Text>
        <Text style={[{color: app!.textColor}]}>Type: {item.type}</Text>
        <Text style={[{color: app!.textColor}]}>Age: {item.age}</Text>
      </Card>
    </View>
  );

  return (
    <View>
      <Background>
        <HeaderWithTitle title="Pet List" />
        <View style={styles.view}>
          <Card>
            <FlatList data={data} renderItem={renderItem} />
          </Card>
        </View>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  view: {
    margin: 25,
  },
});
