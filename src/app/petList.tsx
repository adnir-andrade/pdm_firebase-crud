import { View, StyleSheet, FlatList, Text } from "react-native";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import useCollection from "../firebase/hooks/useCollection";
import Card from "../components/containers/Card";

type Pet = {
  id?: string;
  type: string;
  name: string;
  age: number;
};

export default function petList() {
  const { data } = useCollection<Pet>("pets");

  const renderItem = ({ item }: { item: Pet }) => (
    <View style={styles.container}>
      <Card>
        <Text style={styles.list}>ID: {item.id}</Text>
        <Text style={styles.list}>Name: {item.name}</Text>
        <Text style={styles.list}>Type: {item.type}</Text>
        <Text style={styles.list}>Age: {item.age}</Text>
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
  list: {
    color: "#fff",
  },
  container: {
    marginBottom: 20,
  },
  view: {
    margin: 25,
  },
});
