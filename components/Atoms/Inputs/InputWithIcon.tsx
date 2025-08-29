import { Input, InputProps, } from "@rneui/base";
import { makeStyles, useTheme } from "@rneui/themed"
import React from "react";
import { View } from "react-native";

interface Props extends InputProps{
    name: string;
    type?: string;
    size?: number;
    color?: string;
}
const InputWithIcon = (props: Props)=>{ 
    const {name, type, size, color, onChangeText, placeholder} = props
    const styles = useStyles()
    const {theme} = useTheme()
    return(
        <View style={styles.containerStyles} testID="input-with-icon-container">
          <Input
            leftIcon={{
                name: name,
                type: type? type: 'ionicons',
                size: size? size : 30,
                color: color? color: theme.colors.stroke,
                testID: 'input-icon'
            }}
            inputStyle={styles.inputStyles}
            inputContainerStyle={styles.inputContainerStyles}
            containerStyle={styles.inputParentContainer}
            placeholder={placeholder? placeholder: ''}
            onChangeText={onChangeText}
            testID="input"
          />
        </View>
    )
} 

export default InputWithIcon 

const useStyles = makeStyles((theme, props: Props)=>({
    containerStyles: {
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        borderRadius: 8,
        padding: 0,
    }, 
    inputStyles: {
        borderWidth: 0, 
        borderRadius: 8,
        padding:0, 
        margin: 0,
    },
    inputContainerStyles: {
        margin: 0,
        padding: 0,
        borderBottomWidth: 0,
    },
    inputParentContainer: {
        margin: 0,
        paddingVertical: 0,
        borderBottomWidth: 0,
        flexDirection: "row",	
        alignItems: "center",
        justifyContent: "flex-start",
    },
}))