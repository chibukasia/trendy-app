import { View } from "react-native";
import { Input, InputProps } from "@rneui/base";
import { makeStyles } from "@rneui/themed";
import { useState } from "react";
import React from "react";

interface Props extends InputProps{
    placeholder?: string;
    setDescription:(description: string)=>void;
}
const TextArea = (props: Props) => {
  const styles = useStyles();
  const [text, setText] = useState<string>('')
  return (
    <View style={styles.containerStyle}>
      <Input
        multiline={true}
        numberOfLines={6}
        containerStyle={styles.inputParentContainer}
        inputContainerStyle={styles.inputContainerStyles}
        inputStyle={styles.inputStyles}
        placeholder={props.placeholder? props.placeholder: "Enter some text here"}
        placeholderTextColor={'#00000073'}
        testID="textarea"
        onChangeText={setText}
        value={text}
      />
    </View>
  );
};

export default TextArea;

const useStyles = makeStyles((theme, props) => ({
  containerStyle: {
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 8,
    padding: 0,
    margin: 0,
  },
  inputContainerStyles: {
    borderBottomWidth: 0,
    padding: 0,
    margin: 0,
  },
  inputStyles: {
    borderWidth: 0,
    borderRadius: 8,
    padding: 0,
    margin: 0,
    fontSize: 15,
  },
  inputParentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));
