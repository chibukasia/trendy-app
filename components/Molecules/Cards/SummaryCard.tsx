import { View } from "../../Themed";
import { Text, TouchableOpacity } from "react-native";
import ImageCard from "../../Atoms/Images/ImageCard";
import { makeStyles, useTheme } from "@rneui/themed";

interface Props {
    imageUri: string;
    title: string;
    summary: string;
    onPress: ()=>void;
}

const SummaryCard = (props: Props) => {
  const {imageUri, title, summary, onPress} = props;
  const {theme}= useTheme();
  const styles = useStyles()
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} testID="summary-card">
    <View style={{ height: "auto", gap: 5, marginBottom: 10,}}>
      <View style={{borderRadius: 15}}>
        <ImageCard imageUrl={imageUri} width={160} height={160}/>
      </View>
      <View style={{ gap: 5, }}>
        <Text style={{ fontWeight: "700", fontSize: 14, color: theme.colors.text }}>
          {title}
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 12, textAlign: 'justify', color: theme.colors.text}}>
         {summary}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default SummaryCard;

const useStyles = makeStyles(()=>({
  container:{
    padding: 0,
    margin: 0,
    width: "48%",
  }
}))