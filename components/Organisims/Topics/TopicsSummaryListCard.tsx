import { View, Text, TouchableOpacity } from "react-native";
import SummaryCard from "../../Molecules/Cards/SummaryCard";
import { makeStyles } from "@rneui/themed";
import { useRouter } from "expo-router";

interface IProps {
  title: string;
  data: {
    title: string;
    imageUrl: string;
    summary: string;
  }[];
}

const TopicSummaryListCard = (props: IProps) => {
  const { title, data } = props;
  const styles = useStyles();
  const {push} = useRouter()

  const handleSeeAll = () => {
    push({pathname:'(tabs)/(topics)/topic-list', params: {title:title}})
  };
  const onSummaryCardPress = () => {};

  return (
      <View style={styles.container} testID="topic-list-summary-card">
        <View style={styles.headers}>
          <Text
          style={[styles.textStyles, {fontWeight: '600'}]}>{title}</Text>
          <TouchableOpacity onPress={handleSeeAll}>
            <Text style={styles.textStyles}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          {data.map((item, index) => (
            <SummaryCard
              key={index}
              imageUri={item.imageUrl}
              title={item.title}
              summary={item.summary}
              onPress={onSummaryCardPress}
            />
          ))}
        </View>
      </View>
  );
};

export default TopicSummaryListCard;

const useStyles = makeStyles((theme) => ({
  container: {},
  headers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 13,
  },
  textStyles: {
    color: theme.colors.text
  }
}));
