import { Avatar } from "@rneui/base";
import { makeStyles } from "@rneui/themed";
import { View, Text } from "react-native";

interface IProps {
  avatar?: string;
  title: string;
  color?: string;
  fontSize?: number;
}
const TopicTitle = (props: IProps) => {
  const styles = useStyles(props);
  return (
    <View style={styles.containter} testID="topic-title">
      <Avatar
        rounded
        size={25}
        source={{
          uri: props.avatar
            ? props.avatar
            : "https://i.pinimg.com/originals/fa/0c/eb/fa0ceb0e64f70e4b81b39f5328c477ff.jpg",
        }}
      />
      <Text style={styles.textStyles}>{props.title}</Text>
    </View>
  );
};

export default TopicTitle;

const useStyles = makeStyles((theme, props: IProps) => ({
  containter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textStyles: {
    color: props.color ? props?.color : theme.colors.title,
    fontSize: props.fontSize ? props?.fontSize : 15,
    fontWeight: "700",
  },
}));
