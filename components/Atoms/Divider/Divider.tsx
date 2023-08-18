import React from "react";
import { View, Text } from "react-native";
import { makeStyles } from "@rneui/themed";

interface Props {
  children?: string;
  backgroundColor?: string;
}
const Divider = (props: Props) => {

  const styles = useStyles(props);
  return (
    <View style={styles.container} testID="divider-container">
      <View style={styles.divider} testID="divider"></View>
      {props.children && <Text style={styles.textStyle} testID="text">Or</Text>}
      {props.children && <View style={styles.divider} testID="divider" ></View>}
    </View>
  );
};

export default Divider;

const useStyles = makeStyles((theme, props: Props) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    height: 1,
    backgroundColor: props.backgroundColor? props?.backgroundColor : theme.colors.stroke,
    width: props.children ? "45%" : "100%",
  },
  textStyle: {
    color: theme.colors.stroke,
    fontSize: 12
  }
}));
