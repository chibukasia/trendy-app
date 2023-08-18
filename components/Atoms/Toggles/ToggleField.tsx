import { makeStyles, Switch, useTheme } from "@rneui/themed";
import { useState } from "react";
import { View, Text } from "react-native";

interface Props {
    title?: string;
    checked?: boolean;
    onCheck: (value: boolean)=>void;
    border?: boolean;
    color?: string;
    fontSize?: number;
    bold?: boolean;
    padding?: boolean;
}
const ToggleField = (props: Props)=>{
    const{title, checked, onCheck, color}=props
    const [isChecked, setIsChecked] = useState<boolean>(checked? checked: false);
    const styles = useStyles(props);
    const {theme} = useTheme()


    const toggleSwitch = (value: boolean)=>{
        setIsChecked(!isChecked)
        onCheck(value)
    }
    return(
        <View style={styles.containterStyles}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {props.title && <Text style={styles.textStyles}>{props.title}</Text>}
            </View>
            <View >
              <Switch 
                color={theme.colors.primary} 
                value={isChecked} 
                onValueChange={(value) => toggleSwitch(value)} 
                trackColor={{false: '#d4d4d4', true: theme.colors.primary}}
                testID="toggle-switch"
              />
            </View>
        </View>
    )
}

export default ToggleField 

const useStyles = makeStyles((theme, props: Props)=>({
    containterStyles: {
        borderWidth: props.border? 1: 0,
        borderColor: theme.colors.stroke,
        borderRadius: 8,
        paddingHorizontal: props.padding? 10 : 0,
        paddingVertical: props.padding? 5: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyles:{
        color: props.color? props?.color: 'gray',
        fontSize: props.fontSize? props?.fontSize: 14,
        fontWeight: props.bold? '700': '400',
    }
}))