import { Text, View, } from "react-native";
import { Button, makeStyles, useTheme } from "@rneui/themed";
import { FontAwesome5 } from '@expo/vector-icons';

interface Props {
    title: string;
    name: string;
    width?: number | string;
    onPress: ()=>void;
}

const ImageIconButton = (props: Props) => {
  const {title,name, onPress} =props
  const styles = useStyles(props);
  const {theme} = useTheme()
  return (
    <Button buttonStyle={styles.buttonStyles} onPress={onPress} containerStyle={styles.containerStyle} testID="image-icon-button">
      <View style={styles.imageViewStyles}>
        <FontAwesome5 name={name} size={18} color={theme.colors.text} />
      </View>
      <View style={styles.textViewStyles}>
        <Text style={styles.textStyles}>{title}</Text>
      </View>
    </Button>
  );
};

export default ImageIconButton;

const useStyles = makeStyles((theme, props:Props) => ({
  buttonStyles: {
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    width: props.width? props?.width : "100%",
    flexDirection: "row",
    paddingTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor:theme.colors.background
  },
  textViewStyles: {
    flexDirection: 'column', 
    justifyContent: 'flex-start',
    alignContent: 'flex-start', 
    paddingLeft: 10,
    width: "100%",
  },
  imageStyles: {
    width: 15,
    height: 15,
  }, 
  imageViewStyles: {
    borderWidth: 1, 
    borderColor: "#E5E5E5", 
    borderRadius:12,
    padding: 10,
  }, 
  containerStyle: {
    borderRadius: 8,
    elevation: 0,
    shadowOpacity: 0,
  },
  textStyles:{
    color: theme.colors.text
  }
}));
