import { ScrollView, View } from "react-native";
import CategoryIconCard from "../../../components/Atoms/IconCards/CategoryIconCard";
import { Link, useRouter, } from "expo-router";
import { makeStyles, } from "@rneui/themed";

const categories = [
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
  {
    name: "Sports and Entertainment",
    image: "https://source.unsplash.com/random?sig=",
  },
];
const Categories = () => {
  const styles = useStyles();
  const {push} = useRouter();
  const handlePress = (category: string)=>{
    push({pathname:"(swarms)/create-swarm", params:{name: category}})
  }
  return (
    <ScrollView style={styles.cotainer}>
      <View style={styles.categories}>
        {categories.map((item, index) => (
          <View key={index} style={{ width: "30%" }}>
            <CategoryIconCard title={item.name} image={item.image} onPress={()=>handlePress(item.name)}/>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;

const useStyles = makeStyles((theme) => ({
  cotainer: {
    padding: 15,
    backgroundColor: theme.colors.background,
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
}));
