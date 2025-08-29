import { makeStyles } from "@rneui/themed";
import { View, TouchableOpacity, Text } from "react-native";
import { Avatar } from "@rneui/base";
import React from "react";

interface IProps {
  content: string;
  icon?: string;
  abbreviation?: string;
  avatar?: string;
  backgroundColor?: string;
  border?: boolean;
  onPress?: ()=>void;
}
const AvatarWithText = (props: IProps) => {
  const { content, icon, abbreviation, avatar, onPress } = props;
  const styles = useStyles(props);
  return (
    <View style={styles.container} testID="avatar-with-text">
      <View style={styles.avatarViewStyles} testID="avatar-image">
        {abbreviation ? (
          <Text style={styles.AbbreviationTextStyles}>{abbreviation}</Text>
        ) : avatar ? (
          <Avatar source={{ uri: avatar }} rounded size={30}/>
        ) : (
          ""
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.contentViewStyles}>
          <Text style={styles.textStyles}>{content}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AvatarWithText;

const useStyles = makeStyles((theme, props: IProps) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: props.border ? 2 : 0,
    borderBottomColor: theme.colors.stroke1,
    paddingVertical: 15,
    backgroundColor: props.backgroundColor
      ? props?.backgroundColor
      : "transparent",
  },
  avatarViewStyles: {
    display: "flex",
    width: "12%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  AbbreviationTextStyles: {
    textAlign: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: -0.24,
    color: theme.colors.text,
  },
  contentViewStyles: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  textStyles: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    color: theme.colors.text,
  },
}));
