import { View, Text, TouchableOpacity, FlatList } from "react-native";
import SummaryCard from "../../Molecules/Cards/SummaryCard";
import { makeStyles } from "@rneui/themed";
import { router, useRouter } from "expo-router";
import React from "react";

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
  const { push } = useRouter();

  const handleSeeAll = () => {
    push("(tabs)/(topics)");
    // push({pathname:'(tabs)/(topics)', params: {title:title}})
  };
  const onSummaryCardPress = () => {
    push("(tabs)/(topics)/post-details")
  };

  return (
    <View style={styles.container} testID="topic-list-summary-card">
      <View style={styles.headers}>
        <Text style={[styles.textStyles, { fontWeight: "600" }]}>{title}</Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text style={styles.textStyles}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        contentContainerStyle={{ gap: 15 }}
        data={data}
        renderItem={({ item }) => (
          <SummaryCard
            imageUri={item.imageUrl}
            title={item.title}
            summary={item.summary}
            onPress={onSummaryCardPress}
          />
        )}
      />
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
  textStyles: {
    color: theme.colors.text,
  },
}));
