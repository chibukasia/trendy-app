import { TouchableOpacity, View } from "react-native";
import { Image, Text } from "@rneui/base";
import {Avatar, makeStyles } from "@rneui/themed";
import React from "react";

interface Props {
  title?: string;
  image: string;
  onPress?: () => void;
}
const CategoryIconCard = (props: Props) => {
  const styles = useStyles(props);
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.container} testID="category-icon-card">
      <Avatar size={75} rounded source={{uri: props.image}}/>
      <Text style={styles.textStyle} testID="category-title">{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryIconCard;

const useStyles = makeStyles((theme, props: Props) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 6
  },
  textStyle: {
    fontWeight: "700",
    fontSize: 15,
    textAlign: "left",
    color: theme.colors.text,
  },
}));
