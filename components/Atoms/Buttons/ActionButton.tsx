import React from "react";
import { View } from "react-native";
import { Button, ButtonProps } from "@rneui/base";
import { makeStyles, useTheme, } from "@rneui/themed";

interface Props {
  children?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  width?: number | string;
  backgroundColor?: string;
  color?: string;
  height?: number;
  onPress?: () => void;
}

const ActionButton = (props: Props & ButtonProps) => {
  const { loading, children, disabled, onPress, color } = props;
  const styles = useStyles(props);
  const {theme} = useTheme()
  return (  
      <View style={styles.containerStyle} testID="button-container">
        <Button
          buttonStyle={styles.buttonStyle}
          title={children}
          disabled={disabled}
          loading={loading}
          onPress={onPress}
          titleStyle={{ color: color ? color : theme.colors.white }}
          testID="button"
        />
      </View>
    );
};

export default ActionButton;

const useStyles = makeStyles((theme, props: Props) => ({
  buttonStyle: {
    borderRadius: 10,
    height:props.height ?? 45,
    backgroundColor: props.disabled
      ? theme.colors.disabled
      : props.backgroundColor
      ? props?.backgroundColor
      : theme.colors.primary,
    width: props.fullWidth ? "100%" : props.width ? props?.width : 300,
  },
  containerStyle: {
    width: props?.fullWidth ? "100%" : props?.width ? props?.width : "auto",
    elevation: 0,
  },
}));
