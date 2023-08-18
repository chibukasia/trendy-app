import { makeStyles } from "@rneui/themed";
import { View, Text } from "react-native";

interface IProps {
  status: string;
}
const StatusTag = (props: IProps) => {
  const styles = useStyles(props);
  return (
    <View
      style={styles.container}
      testID="status-tag"
    >
      <Text style={styles.textStyles} testID="status-text">{props.status}</Text>
    </View>
  );
};

export default StatusTag;

const useStyles = makeStyles((theme, props: IProps) => ({
  container: {
    borderWidth: 1,
    borderColor: props.status==='Completed'? '#38B000': props.status==='Cancelled'? '#BF0603': props.status==='In Progress' ? '#1877F2': '',
    backgroundColor: props.status==='Completed'? '#38B0001A': props.status==='Cancelled'? '#BF06031A': props.status==='In Progress' ? '#1877F21A': '',
    padding: 5,
    borderRadius: 50,
    width: 110,
  },
  textStyles: {
    textAlign: "center",
    color: props.status==='Completed'? '#38B000': props.status==='Cancelled'? '#BF0603': props.status==='In Progress' ? '#1877F2': '',
  }
}));
